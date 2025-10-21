#!/usr/bin/env python3
"""
VITARO Medical Backend API Testing Suite
Tests all backend endpoints including the new catalog registration functionality
"""

import asyncio
import aiohttp
import json
import os
from datetime import datetime
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get backend URL from frontend environment
BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL', 'https://medtech-vitaro.preview.emergentagent.com')
API_BASE = f"{BACKEND_URL}/api"

class VitaroAPITester:
    def __init__(self):
        self.session = None
        self.test_results = {
            'catalog_registration': {'status': 'pending', 'details': []},
            'products': {'status': 'pending', 'details': []},
            'news': {'status': 'pending', 'details': []},
            'contact': {'status': 'pending', 'details': []},
            'newsletter': {'status': 'pending', 'details': []}
        }
    
    async def __aenter__(self):
        self.session = aiohttp.ClientSession()
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()
    
    def log_test(self, test_name, success, message, response_data=None):
        """Log test result"""
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}: {message}")
        
        if test_name in self.test_results:
            self.test_results[test_name]['status'] = 'pass' if success else 'fail'
            self.test_results[test_name]['details'].append({
                'message': message,
                'success': success,
                'response_data': response_data,
                'timestamp': datetime.now().isoformat()
            })
    
    async def test_catalog_registration(self):
        """Test catalog registration endpoint - HIGH PRIORITY"""
        print("\n🔍 Testing Catalog Registration Endpoint...")
        
        # Test data
        test_registration = {
            "fullName": "Dr. Sarah Johnson",
            "email": "sarah.johnson@medicalhospital.com",
            "phone": "+1-555-0123",
            "company": "Metropolitan Medical Center",
            "country": "United States",
            "jobTitle": "Chief Procurement Officer"
        }
        
        try:
            # Test POST /api/catalog/register
            async with self.session.post(
                f"{API_BASE}/catalog/register",
                json=test_registration,
                headers={'Content-Type': 'application/json'}
            ) as response:
                
                if response.status == 200:
                    data = await response.json()
                    
                    # Verify response structure
                    if data.get('success') and data.get('message'):
                        self.log_test('catalog_registration', True, 
                                    f"Registration successful. Response: {data}", data)
                        
                        # Test GET registrations to verify data was saved
                        await self.verify_registration_saved(test_registration['email'])
                    else:
                        self.log_test('catalog_registration', False, 
                                    f"Invalid response structure: {data}", data)
                else:
                    error_text = await response.text()
                    self.log_test('catalog_registration', False, 
                                f"HTTP {response.status}: {error_text}")
        
        except Exception as e:
            self.log_test('catalog_registration', False, f"Request failed: {str(e)}")
        
        # Test error handling - missing required fields
        await self.test_catalog_validation()
    
    async def verify_registration_saved(self, email):
        """Verify registration was saved to database"""
        try:
            async with self.session.get(f"{API_BASE}/catalog/registrations") as response:
                if response.status == 200:
                    registrations = await response.json()
                    
                    # Check if our test registration exists
                    found = any(reg.get('email') == email for reg in registrations)
                    
                    if found:
                        self.log_test('catalog_registration', True, 
                                    f"Registration verified in database for {email}")
                    else:
                        self.log_test('catalog_registration', False, 
                                    f"Registration not found in database for {email}")
                else:
                    self.log_test('catalog_registration', False, 
                                f"Failed to fetch registrations: HTTP {response.status}")
        
        except Exception as e:
            self.log_test('catalog_registration', False, 
                        f"Failed to verify registration: {str(e)}")
    
    async def test_catalog_validation(self):
        """Test catalog registration validation"""
        print("🔍 Testing catalog registration validation...")
        
        # Test missing required fields
        invalid_data = {
            "fullName": "Test User",
            "email": "invalid-email"  # Missing other required fields
        }
        
        try:
            async with self.session.post(
                f"{API_BASE}/catalog/register",
                json=invalid_data,
                headers={'Content-Type': 'application/json'}
            ) as response:
                
                if response.status == 422:  # Validation error expected
                    self.log_test('catalog_registration', True, 
                                "Validation correctly rejected invalid data")
                else:
                    error_text = await response.text()
                    self.log_test('catalog_registration', False, 
                                f"Expected validation error, got HTTP {response.status}: {error_text}")
        
        except Exception as e:
            self.log_test('catalog_registration', False, 
                        f"Validation test failed: {str(e)}")
    
    async def test_products_endpoint(self):
        """Test products endpoints"""
        print("\n🔍 Testing Products Endpoints...")
        
        try:
            # Test GET /api/products
            async with self.session.get(f"{API_BASE}/products") as response:
                if response.status == 200:
                    products = await response.json()
                    
                    if isinstance(products, list) and len(products) > 0:
                        self.log_test('products', True, 
                                    f"Products loaded successfully. Count: {len(products)}")
                        
                        # Test individual product endpoint
                        first_product = products[0]
                        if 'id' in first_product:
                            await self.test_single_product(first_product['id'])
                    else:
                        self.log_test('products', False, 
                                    f"No products found or invalid format: {products}")
                else:
                    error_text = await response.text()
                    self.log_test('products', False, 
                                f"HTTP {response.status}: {error_text}")
        
        except Exception as e:
            self.log_test('products', False, f"Products test failed: {str(e)}")
    
    async def test_single_product(self, product_id):
        """Test single product endpoint"""
        try:
            async with self.session.get(f"{API_BASE}/products/{product_id}") as response:
                if response.status == 200:
                    product = await response.json()
                    self.log_test('products', True, 
                                f"Single product retrieved: {product.get('name', 'Unknown')}")
                else:
                    self.log_test('products', False, 
                                f"Failed to get product {product_id}: HTTP {response.status}")
        except Exception as e:
            self.log_test('products', False, f"Single product test failed: {str(e)}")
    
    async def test_news_endpoint(self):
        """Test news endpoints"""
        print("\n🔍 Testing News Endpoints...")
        
        try:
            async with self.session.get(f"{API_BASE}/news") as response:
                if response.status == 200:
                    news = await response.json()
                    
                    if isinstance(news, list):
                        self.log_test('news', True, 
                                    f"News loaded successfully. Count: {len(news)}")
                    else:
                        self.log_test('news', False, 
                                    f"Invalid news format: {news}")
                else:
                    error_text = await response.text()
                    self.log_test('news', False, 
                                f"HTTP {response.status}: {error_text}")
        
        except Exception as e:
            self.log_test('news', False, f"News test failed: {str(e)}")
    
    async def test_contact_endpoint(self):
        """Test contact form endpoint"""
        print("\n🔍 Testing Contact Form Endpoint...")
        
        test_contact = {
            "name": "John Smith",
            "email": "john.smith@testcompany.com",
            "company": "Test Medical Solutions",
            "message": "Interested in your surgical instruments catalog."
        }
        
        try:
            async with self.session.post(
                f"{API_BASE}/contact",
                json=test_contact,
                headers={'Content-Type': 'application/json'}
            ) as response:
                
                if response.status == 200:
                    data = await response.json()
                    self.log_test('contact', True, 
                                f"Contact form submitted successfully: {data.get('name', 'Unknown')}")
                else:
                    error_text = await response.text()
                    self.log_test('contact', False, 
                                f"HTTP {response.status}: {error_text}")
        
        except Exception as e:
            self.log_test('contact', False, f"Contact test failed: {str(e)}")
    
    async def test_newsletter_endpoint(self):
        """Test newsletter subscription endpoint"""
        print("\n🔍 Testing Newsletter Subscription Endpoint...")
        
        test_subscription = {
            "email": "newsletter.test@medicalpro.com"
        }
        
        try:
            async with self.session.post(
                f"{API_BASE}/newsletter",
                json=test_subscription,
                headers={'Content-Type': 'application/json'}
            ) as response:
                
                if response.status == 200:
                    data = await response.json()
                    self.log_test('newsletter', True, 
                                f"Newsletter subscription successful: {data.get('email', 'Unknown')}")
                else:
                    error_text = await response.text()
                    self.log_test('newsletter', False, 
                                f"HTTP {response.status}: {error_text}")
        
        except Exception as e:
            self.log_test('newsletter', False, f"Newsletter test failed: {str(e)}")
    
    async def run_all_tests(self):
        """Run all backend tests"""
        print(f"🚀 Starting VITARO Medical Backend API Tests")
        print(f"📍 Backend URL: {BACKEND_URL}")
        print(f"📍 API Base: {API_BASE}")
        print("=" * 60)
        
        # Test catalog registration (HIGH PRIORITY)
        await self.test_catalog_registration()
        
        # Test existing endpoints (smoke tests)
        await self.test_products_endpoint()
        await self.test_news_endpoint()
        await self.test_contact_endpoint()
        await self.test_newsletter_endpoint()
        
        # Print summary
        self.print_summary()
    
    def print_summary(self):
        """Print test summary"""
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        
        total_tests = len(self.test_results)
        passed_tests = sum(1 for result in self.test_results.values() if result['status'] == 'pass')
        failed_tests = sum(1 for result in self.test_results.values() if result['status'] == 'fail')
        
        print(f"Total Test Categories: {total_tests}")
        print(f"✅ Passed: {passed_tests}")
        print(f"❌ Failed: {failed_tests}")
        
        if failed_tests > 0:
            print("\n🚨 FAILED TESTS:")
            for test_name, result in self.test_results.items():
                if result['status'] == 'fail':
                    print(f"  - {test_name.upper()}")
                    for detail in result['details']:
                        if not detail['success']:
                            print(f"    • {detail['message']}")
        
        print("\n" + "=" * 60)

async def main():
    """Main test runner"""
    async with VitaroAPITester() as tester:
        await tester.run_all_tests()

if __name__ == "__main__":
    asyncio.run(main())
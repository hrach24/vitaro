# VITARO Medical Website - Backend Integration Contracts

## Overview
This document outlines the API contracts and integration plan for the VITARO Medical website backend.

## Current Mock Data (in /app/frontend/src/mock.js)
- **products**: 8 medical products with categories, specifications, certifications
- **categories**: 4 product categories with counts
- **newsArticles**: 4 news articles with dates, images, categories
- **companyInfo**: Company details, certifications, contact information

## Database Models

### 1. Product Model
```python
{
    "_id": ObjectId,
    "name": str,
    "category": str,
    "description": str,
    "image": str,
    "specifications": dict,
    "certifications": list[str],
    "created_at": datetime,
    "updated_at": datetime
}
```

### 2. NewsArticle Model
```python
{
    "_id": ObjectId,
    "title": str,
    "date": datetime,
    "category": str,
    "excerpt": str,
    "image": str,
    "content": str,
    "created_at": datetime,
    "updated_at": datetime
}
```

### 3. Contact Model
```python
{
    "_id": ObjectId,
    "name": str,
    "email": str,
    "phone": str (optional),
    "company": str (optional),
    "subject": str,
    "message": str,
    "submitted_at": datetime,
    "status": str (new/reviewed/responded)
}
```

### 4. Newsletter Model
```python
{
    "_id": ObjectId,
    "email": str,
    "subscribed_at": datetime,
    "status": str (active/unsubscribed)
}
```

## API Endpoints

### Products
- **GET /api/products** - Get all products (with optional category filter)
- **GET /api/products/{id}** - Get single product
- **GET /api/categories** - Get all categories with product counts
- **POST /api/products** - Create product (admin)
- **PUT /api/products/{id}** - Update product (admin)
- **DELETE /api/products/{id}** - Delete product (admin)

### News
- **GET /api/news** - Get all news articles (with optional category filter)
- **GET /api/news/{id}** - Get single news article
- **POST /api/news** - Create news article (admin)
- **PUT /api/news/{id}** - Update news article (admin)
- **DELETE /api/news/{id}** - Delete news article (admin)

### Contact
- **POST /api/contact** - Submit contact form
- **GET /api/contacts** - Get all contacts (admin)

### Newsletter
- **POST /api/newsletter** - Subscribe to newsletter
- **GET /api/newsletter** - Get all subscribers (admin)

## Frontend Integration Plan

### Files to Update:
1. **/app/frontend/src/pages/Home.jsx**
   - Remove import of mock products
   - Fetch products from API on mount
   - Update featured products display

2. **/app/frontend/src/pages/Products.jsx**
   - Remove import of mock products and categories
   - Fetch products and categories from API
   - Keep filtering logic client-side for performance

3. **/app/frontend/src/pages/News.jsx**
   - Remove import of mock newsArticles
   - Fetch news from API on mount
   - Keep filtering logic client-side

4. **/app/frontend/src/pages/Contact.jsx**
   - Replace localStorage with API call to /api/contact
   - Add proper error handling

5. **/app/frontend/src/components/Footer.jsx**
   - Replace localStorage with API call to /api/newsletter
   - Add proper error handling

6. **/app/frontend/src/mock.js**
   - Keep file for reference but won't be used after integration

## Data Seeding
Seed database with mock data on first run to populate:
- 8 products
- 4 news articles
- Company information (stored in environment or config)

## Error Handling
- All endpoints return proper HTTP status codes
- Frontend shows toast notifications for errors
- API validation for required fields

## Testing Plan
1. Test all GET endpoints with curl
2. Test POST endpoints (contact, newsletter)
3. Verify frontend displays data correctly
4. Test error scenarios

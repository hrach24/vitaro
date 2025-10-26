import React, { useState } from 'react';
import { X, Download, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from './ui/button';

const CatalogDownloadModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    jobTitle: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission
    setIsSuccess(true);

    // Generate and download catalog
    setTimeout(() => {
      generateCatalogPDF();
      toast.success('Catalog downloaded successfully!');
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          country: '',
          jobTitle: ''
        });
        setIsSubmitting(false);
      }, 2000);
    }, 500);
  };

  const generateCatalogPDF = () => {
    // Create a simple HTML page for the catalog
    const catalogHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>VITARO Medical Product Catalog 2025</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background: white;
    }
    .header {
      text-align: center;
      padding: 40px 0;
      border-bottom: 3px solid #f97316;
    }
    .logo {
      max-width: 300px;
      margin-bottom: 20px;
    }
    .product {
      page-break-inside: avoid;
      margin: 30px 0;
      padding: 20px;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
    }
    .product-image {
      width: 100%;
      max-width: 400px;
      height: 300px;
      object-fit: cover;
      border-radius: 4px;
      margin: 20px 0;
    }
    .product-name {
      font-size: 24px;
      font-weight: bold;
      color: #111827;
      margin-bottom: 10px;
    }
    .product-category {
      color: #f97316;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .specs {
      background: #f9fafb;
      padding: 15px;
      border-radius: 4px;
      margin: 15px 0;
    }
    .footer {
      margin-top: 50px;
      padding: 30px;
      background: #f97316;
      color: white;
      text-align: center;
      border-radius: 8px;
    }
    .contact-info {
      margin-top: 30px;
      padding: 20px;
      background: #f9fafb;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1 style="color: #f97316; font-size: 36px;">VITARO MEDICAL</h1>
    <h2>Product Catalog 2025</h2>
    <p>Premium Medical & Dental Equipment</p>
  </div>

  <div class="contact-info">
    <h3>Contact Information</h3>
    <p><strong>Address:</strong> Plot 12, Unit A, North Ridge Industrial Park<br>
    No. 3 Hengshan Road, Jiading District, Shanghai 201800, China</p>
    <p><strong>Phone:</strong> +86 21 6798 1203</p>
    <p><strong>Email:</strong> info@myvitaro.com</p>
    <p><strong>Website:</strong> www.myvitaro.com</p>
  </div>

  <h2 style="margin-top: 40px; color: #f97316;">Our Products</h2>
  <p style="font-style: italic; color: #6b7280;">Please note: Product images are representative. Actual products may vary.</p>

  <div class="product">
    <div class="product-name">Dental Chair</div>
    <div class="product-category">Dental Equipment</div>
    <p>Premium electric dental chair with memory foam cushioning and programmable positioning.</p>
    <div class="specs">
      <strong>Key Specifications:</strong><br>
      • 4-way programmable positioning<br>
      • Weight capacity: 180 kg<br>
      • Medical grade leather upholstery<br>
      • Integrated LED operating light
    </div>
  </div>

  <div class="product">
    <div class="product-name">Dental Endomotor</div>
    <div class="product-category">Dental Equipment</div>
    <p>Advanced endodontic motor with precise torque control and apex locator integration.</p>
    <div class="specs">
      <strong>Key Specifications:</strong><br>
      • Speed: 100-2000 RPM<br>
      • Torque: 0.4-5.0 N.cm<br>
      • 4.5" LCD touchscreen<br>
      • Rechargeable battery
    </div>
  </div>

  <div class="product">
    <div class="product-name">Insulin Syringes 1ml U-100</div>
    <div class="product-category">Medical Supplies</div>
    <p>Sterile single-use insulin syringes with ultra-fine needles (29G, 30G, 31G).</p>
    <div class="specs">
      <strong>Key Specifications:</strong><br>
      • Capacity: 1ml (100 units)<br>
      • Needle lengths: 8mm, 13mm<br>
      • Individually blister packed<br>
      • 5-year shelf life
    </div>
  </div>

  <div class="product">
    <div class="product-name">Nitrile Gloves</div>
    <div class="product-category">Medical Supplies</div>
    <p>Powder-free nitrile examination gloves with superior puncture resistance.</p>
    <div class="specs">
      <strong>Key Specifications:</strong><br>
      • Material: Nitrile<br>
      • Sizes: XS, S, M, L, XL<br>
      • Latex-free<br>
      • 100 pieces per box
    </div>
  </div>

  <div class="product">
    <div class="product-name">Dental X-Ray Machine</div>
    <div class="product-category">Dental Imaging</div>
    <p>Wall-mounted dental X-ray unit with DC technology for precise imaging.</p>
    <div class="specs">
      <strong>Key Specifications:</strong><br>
      • DC constant potential generator<br>
      • Tube voltage: 60-70 kV<br>
      • 360° arm rotation<br>
      • Wireless remote control
    </div>
  </div>

  <div class="product">
    <div class="product-name">Intraoral Camera</div>
    <div class="product-category">Dental Imaging</div>
    <p>HD intraoral camera with autofocus and freeze-frame capture.</p>
    <div class="specs">
      <strong>Key Specifications:</strong><br>
      • 1920 x 1080 Full HD<br>
      • Auto-focus 5-50mm<br>
      • 6 LED illumination<br>
      • USB 2.0 connection
    </div>
  </div>

  <div class="footer">
    <h2>For Prices and Orders</h2>
    <p style="font-size: 18px; margin: 20px 0;">Please contact us by email at:<br>
    <strong style="font-size: 22px;">info@myvitaro.com</strong></p>
    <p>Our sales team will respond within 24 hours with detailed pricing and availability.</p>
  </div>

  <p style="text-align: center; margin-top: 40px; color: #6b7280; font-size: 12px;">
    © 2025 VITARO Medical. All rights reserved.<br>
    Chinese-Korean Joint Venture | ISO 13485 Certified
  </p>
</body>
</html>
    `;

    // Create a blob and download
    const blob = new Blob([catalogHTML], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'VITARO_Medical_Catalog_2025.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {!isSuccess ? (
          <>
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Download Product Catalog</h2>
                <p className="text-sm text-gray-600 mt-1">Please complete your registration to access our catalog</p>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Processing...'
                ) : (
                  <>
                    <Download size={20} />
                    Download Catalog
                  </>
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-600" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h3>
            <p className="text-gray-600 mb-4">Your catalog is being downloaded...</p>
            <p className="text-sm text-gray-500">Thank you for your interest in VITARO Medical products.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogDownloadModal;
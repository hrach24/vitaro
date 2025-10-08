import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import { newsletterAPI } from '../api';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        await newsletterAPI.subscribe(email);
        toast.success('Thank you for subscribing to our newsletter!');
        setEmail('');
      } catch (error) {
        toast.error('Failed to subscribe. Please try again.');
        console.error('Error subscribing to newsletter:', error);
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-700">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
            <p className="text-slate-300 mb-6">
              Subscribe to our newsletter for the latest news and product updates
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3 max-w-md mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-orange-500/30"
              >
                <Send size={18} />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img
              src="https://customer-assets.emergentagent.com/job_medpro-vitaro/artifacts/etcyq21f_IMG_3124.jpeg"
              alt="VITARO Medical"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-slate-300 text-sm mb-4">
              Leading manufacturer of high-quality medical products, committed to healthcare excellence and innovation.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-orange-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-orange-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-300 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-300 hover:text-orange-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-slate-300 hover:text-orange-400 transition-colors">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product Categories</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Medical Gloves</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Face Masks</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Disposable Materials</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Medical Supplies</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-orange-400 flex-shrink-0 mt-0.5" />
                <span>123 Medical Park Avenue, Healthcare District</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-orange-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-orange-400 flex-shrink-0" />
                <span>info@vitaro-medical.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© 2025 VITARO Medical. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-orange-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-orange-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="hover:text-orange-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
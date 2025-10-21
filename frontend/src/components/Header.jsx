import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('aboutUs') },
    { path: '/products', label: t('products') },
    { path: '/news', label: t('news') },
    { path: '/contact', label: t('contact') }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-200/95 backdrop-blur-md shadow-lg' : 'bg-blue-200'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-blue-200 px-3 py-2 rounded">
              <img
                src="https://customer-assets.emergentagent.com/job_medpro-vitaro/artifacts/etcyq21f_IMG_3124.jpeg"
                alt="VITARO Medical"
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-blue-900 bg-blue-300'
                    : 'text-blue-800 hover:text-blue-900 hover:bg-blue-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              to="/contact"
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 whitespace-nowrap"
            >
              {t('getInTouch')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-blue-800 hover:text-blue-900 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 border-t border-blue-300' : 'max-h-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-4 bg-blue-200">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium transition-all mb-1 ${
                location.pathname === link.path
                  ? 'text-blue-900 bg-blue-300'
                  : 'text-blue-800 hover:text-blue-900 hover:bg-blue-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block mt-4 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all text-center"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
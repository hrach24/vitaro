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
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <div className="header__content">
          {/* Logo */}
          <Link to="/" className="header__logo-link">
            <img
              src="/images/logo.webp"
              alt="VITARO Medical"
              className="header__logo-img"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="header__nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`header__nav-link ${
                  location.pathname === link.path ? 'header__nav-link--active' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & CTA Button */}
          <div className="header__actions">
            <LanguageSwitcher />
            <Link to="/contact" className="header__cta-button">
              {t('getInTouch')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="header__mobile-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}>
        <nav className="header__mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`header__mobile-link ${
                location.pathname === link.path ? 'header__mobile-link--active' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="header__mobile-cta"
          >
            {t('getInTouch')}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '../i18n/LanguageContext';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { t } = useLanguage();

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing to our newsletter!');
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="footer__newsletter">
        <div className="footer__newsletter-container">
          <div className="footer__newsletter-content">
            <h3 className="footer__newsletter-title">{t('stayUpdated')}</h3>
            <p className="footer__newsletter-text">
              {t('newsletterDescription')}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="footer__newsletter-form">
              <div className="footer__newsletter-input-wrapper">
                <Mail className="footer__newsletter-icon" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('enterYourEmail')}
                  className="footer__newsletter-input"
                  required
                />
              </div>
              <button type="submit" className="footer__newsletter-button">
                <Send size={18} />
                {t('subscribe')}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer__main">
        <div className="footer__content">
          {/* Company Info */}
          <div className="footer__column">
            <img
              src="/images/logo.webp"
              alt="VITARO Medical"
              className="footer__logo"
            />
            <p className="footer__description">
              {t('leadingManufacturer')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__column">
            <h4 className="footer__column-title">{t('quickLinks')}</h4>
            <ul className="footer__links">
              <li>
                <Link to="/about" className="footer__link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="footer__link">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/news" className="footer__link">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer__link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="footer__column">
            <h4 className="footer__column-title">{t('productCategories')}</h4>
            <ul className="footer__links">
              <li className="footer__link">{t('medicalGloves')}</li>
              <li className="footer__link">{t('faceMasks')}</li>
              <li className="footer__link">{t('disposableMaterials')}</li>
              <li className="footer__link">{t('dentalEquipment')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__column">
            <h4 className="footer__column-title">{t('contactUs')}</h4>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <MapPin size={18} className="footer__contact-icon" />
                <span>Plot 12, Unit A, North Ridge Industrial Park, No. 3 Hengshan Road, Jiading District, Shanghai 201800, China</span>
              </li>
              <li className="footer__contact-item">
                <Phone size={18} className="footer__contact-icon" />
                <span>+86 21 6798 1203</span>
              </li>
              <li className="footer__contact-item">
                <Mail size={18} className="footer__contact-icon" />
                <span>info@myvitaro.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <div className="footer__bottom-content">
            <p>© 2025 VITARO Medical. {t('allRightsReserved')}</p>
            <div className="footer__bottom-links">
              <Link to="/privacy-policy" className="footer__bottom-link">
                {t('privacyPolicy')}
              </Link>
              <Link to="/terms-of-service" className="footer__bottom-link">
                {t('termsOfService')}
              </Link>
              <Link to="/cookie-policy" className="footer__bottom-link">
                {t('cookiePolicy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

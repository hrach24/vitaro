import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Globe, CheckCircle, Download } from 'lucide-react';
import { mockProducts } from '../data/mockData';
import ParallaxSection from '../components/ParallaxSection';
import CatalogDownloadModal from '../components/CatalogDownloadModal';
import ProductCarousel from '../components/ProductCarousel';
import { useLanguage } from '../i18n/LanguageContext';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Load mock data
    setFeaturedProducts(mockProducts.slice(0, 10)); // Get first 10 products for carousel
    setLoading(false);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <div className="home__hero-bg"></div>
        <div className="home__hero-container">
          <div className="home__hero-content">
            <div className="home__hero-text">
              <div className="home__hero-badge-wrapper">
                <span className="home__hero-badge">
                  {t('trustedHealthcare')}
                </span>
              </div>
              <h1 className="home__hero-title">
                {t('innovationInHealthcare')}{' '}
                <span className="home__hero-title-gradient">
                  {t('healthcareSolutions')}
                </span>
              </h1>
              <p className="home__hero-description">
                {t('heroDescription')}
              </p>
              <div className="home__hero-actions">
                <Link
                  to="/products"
                  className="home__button home__button--primary"
                >
                  {t('exploreProducts')}
                  <ArrowRight size={20} />
                </Link>
                <button
                  onClick={() => setIsCatalogModalOpen(true)}
                  className="home__button home__button--secondary"
                >
                  <Download size={20} />
                  {t('downloadCatalog')}
                </button>
              </div>
            </div>
            <div className="home__hero-image">
              <div className="home__hero-image-wrapper">
                <img
                  src="https://images.pexels.com/photos/4586711/pexels-photo-4586711.jpeg"
                  alt="Medical Professional"
                />
              </div>
              <div className="home__hero-badge-card">
                <div className="home__hero-badge-card-content">
                  <div className="home__hero-badge-icon">
                    <Shield size={32} />
                  </div>
                  <div>
                    <p className="home__hero-badge-title">ISO Certified</p>
                    <p className="home__hero-badge-text">Quality Assured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="home__stats">
        <div className="home__container">
          <div className="home__stats-grid">
            {[
              { value: '23+', label: t('yearsExperience2') },
              { value: '45+', label: t('countriesServed2') },
              { value: '500+', label: t('healthcarePartners2') },
              { value: '100%', label: t('qualityGuaranteed2') }
            ].map((stat, index) => (
              <div key={index} className="home__stat">
                <p className="home__stat-value">{stat.value}</p>
                <p className="home__stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="home__featured">
        <div className="home__container">
          <div className="home__section-header">
            <h2 className="home__section-title">{t('featuredProducts')}</h2>
            <p className="home__section-description">
              {t('featuredProductsDesc')}
            </p>
          </div>
          {loading ? (
            <div className="home__loading">
              <p>{t('loading')}</p>
            </div>
          ) : (
            <ProductCarousel products={featuredProducts} />
          )}
          <div className="home__section-cta">
            <Link
              to="/products"
              className="home__button home__button--primary"
            >
              {t('viewAllProducts')}
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* VITARO Factory Manufacturing Parallax Section */}
      <ParallaxSection
        imageUrl="https://customer-assets.emergentagent.com/job_medtech-vitaro/artifacts/jvb3kyc3_parallax.jpg"
        height="500px"
        speed={0.5}
      >
        <div className="home__parallax-container">
          <div className="home__parallax-content">
            <h2 className="home__parallax-title">
              {t('precisionManufacturing')}
            </h2>
            <p className="home__parallax-text">
              {t('manufacturingDesc')}
            </p>
            <div className="home__parallax-stats">
              <div className="home__parallax-stat">
                <p className="home__parallax-stat-value">10,000+</p>
                <p className="home__parallax-stat-label">Sq. Meter Facility</p>
              </div>
              <div className="home__parallax-stat">
                <p className="home__parallax-stat-value">23+</p>
                <p className="home__parallax-stat-label">Years Experience</p>
              </div>
              <div className="home__parallax-stat">
                <p className="home__parallax-stat-value">100%</p>
                <p className="home__parallax-stat-label">Automated Quality</p>
              </div>
            </div>
            <Link
              to="/about"
              className="home__button home__button--primary home__button--shadow"
            >
              {t('exploreOurFacility2')}
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </ParallaxSection>

      {/* Why Choose Us */}
      <section className="home__why-choose">
        <div className="home__container">
          <div className="home__section-header">
            <h2 className="home__section-title">{t('whyChooseVitaro')}</h2>
            <p className="home__section-description">
              {t('whyChooseDesc')}
            </p>
          </div>
          <div className="home__features-grid">
            {[
              {
                icon: Shield,
                title: t('qualityAssurance'),
                description: t('qualityAssuranceDesc')
              },
              {
                icon: Globe,
                title: t('globalReach'),
                description: t('globalReachDesc')
              },
              {
                icon: Award,
                title: t('innovationFocus'),
                description: t('innovationFocusDesc')
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="home__feature-card"
                >
                  <div className="home__feature-icon">
                    <Icon size={32} />
                  </div>
                  <h3 className="home__feature-title">{feature.title}</h3>
                  <p className="home__feature-description">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="home__certifications">
        <div className="home__container">
          <div className="home__section-header">
            <h2 className="home__section-title">{t('certificationsStandards')}</h2>
            <p className="home__section-description">
              {t('certificationsDesc')}
            </p>
          </div>
          <div className="home__certifications-grid">
            {['ISO 13485:2016', 'CE Marking', 'FDA Registered', 'ISO 9001:2015'].map((cert, index) => (
              <div
                key={index}
                className="home__certification-card"
              >
                <div className="home__certification-icon">
                  <CheckCircle size={24} />
                </div>
                <p className="home__certification-text">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VITARO Factory Building Parallax Section */}
      <ParallaxSection
        imageUrl="https://customer-assets.emergentagent.com/job_medpro-vitaro/artifacts/f25xm6yq_factory1.jpg"
        height="450px"
        speed={0.6}
      >
        <div className="home__parallax-container home__parallax-container--center">
          <div className="home__parallax-content home__parallax-content--centered">
            <h2 className="home__parallax-title">
              {t('worldClassFacility')}
            </h2>
            <p className="home__parallax-text">
              {t('worldClassFacilityDesc')}
            </p>
            <Link
              to="/about"
              className="home__button home__button--primary home__button--shadow"
            >
              {t('aboutOurFacility')}
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="home__cta">
        <div className="home__container">
          <div className="home__cta-content">
            <h2 className="home__cta-title">{t('readyToPartner')}</h2>
            <p className="home__cta-description">
              {t('readyToPartnerDesc')}
            </p>
            <div className="home__cta-actions">
              <Link
                to="/contact"
                className="home__button home__button--white"
              >
                {t('contactUs')}
                <ArrowRight size={20} />
              </Link>
              <button
                onClick={() => setIsCatalogModalOpen(true)}
                className="home__button home__button--outline"
              >
                <Download size={20} />
                {t('downloadCatalog')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {isCatalogModalOpen && (
        <CatalogDownloadModal onClose={() => setIsCatalogModalOpen(false)} />
      )}
    </div>
  );
};

export default Home;

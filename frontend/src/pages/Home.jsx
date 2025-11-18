import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Award,
  Globe,
  CheckCircle,
  Download,
} from "lucide-react";
import { mockProducts } from "../data/mockData";
import ParallaxSection from "../components/ParallaxSection";
import CatalogDownloadModal from "../components/CatalogDownloadModal";
import ProductCarousel from "../components/ProductCarousel";
import { useLanguage } from "../i18n/LanguageContext";

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                  {t("trustedHealthcare")}
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t("innovationInHealthcare")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  {t("healthcareSolutions")}
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t("heroDescription")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/products"
                  className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
                >
                  {t("exploreProducts")}
                  <ArrowRight size={20} />
                </Link>
                <button
                  onClick={() => setIsCatalogModalOpen(true)}
                  className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-orange-500 hover:text-orange-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  {t("downloadCatalog")}
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4586711/pexels-photo-4586711.jpeg"
                  alt="Medical Professional"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Shield className="text-orange-600" size={32} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      ISO Certified
                    </p>
                    <p className="text-gray-600">Quality Assured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "23+", label: t("yearsExperience2") },
              { value: "45+", label: t("countriesServed2") },
              { value: "500+", label: t("healthcarePartners2") },
              { value: "100%", label: t("qualityGuaranteed2") },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("featuredProducts")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("featuredProductsDesc")}
            </p>
          </div>
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">{t("loading")}</p>
            </div>
          ) : (
            <ProductCarousel products={featuredProducts} />
          )}
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30"
            >
              {t("viewAllProducts")}
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
        <div className="container mx-auto py-8 px-4  h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h2 className="text-5xl font-bold mb-6 drop-shadow-lg">
              {t("precisionManufacturing")}
            </h2>
            <p className="text-xl mb-8 drop-shadow-lg leading-relaxed">
              {t("manufacturingDesc")}
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-lg border border-white/20">
                <p className="text-3xl font-bold">10,000+</p>
                <p className="text-sm opacity-90">Sq. Meter Facility</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-lg border border-white/20">
                <p className="text-3xl font-bold">23+</p>
                <p className="text-sm opacity-90">Years Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-lg border border-white/20">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm opacity-90">Automated Quality</p>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/50 hover:-translate-y-0.5"
            >
              {t("exploreOurFacility2")}
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </ParallaxSection>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("whyChooseVitaro")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("whyChooseDesc")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: t("qualityAssurance"),
                description: t("qualityAssuranceDesc"),
              },
              {
                icon: Globe,
                title: t("globalReach"),
                description: t("globalReachDesc"),
              },
              {
                icon: Award,
                title: t("innovationFocus"),
                description: t("innovationFocusDesc"),
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                    <Icon
                      className="text-orange-600 group-hover:text-white transition-colors"
                      size={32}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("certificationsStandards")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("certificationsDesc")}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "ISO 13485:2016",
              "CE Marking",
              "FDA Registered",
              "ISO 9001:2015",
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-orange-600" size={24} />
                </div>
                <p className="font-bold text-gray-900">{cert}</p>
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
        <div className="container mx-auto  px-4 py-2 md:py-8 h-full flex items-center justify-center">
          <div className="max-w-4xl text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              {t("worldClassFacility")}
            </h2>
            <p className="text-xl mb-8 drop-shadow-lg leading-relaxed">
              {t("facilityDesc")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <Shield className="mx-auto mb-3 text-orange-400" size={40} />
                <p className="font-semibold text-lg">ISO Certified</p>
                <p className="text-sm opacity-90 mt-2">
                  Multiple international certifications
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <Award className="mx-auto mb-3 text-orange-400" size={40} />
                <p className="font-semibold text-lg">Quality Assured</p>
                <p className="text-sm opacity-90 mt-2">
                  Rigorous testing at every stage
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <Globe className="mx-auto mb-3 text-orange-400" size={40} />
                <p className="font-semibold text-lg">Global Reach</p>
                <p className="text-sm opacity-90 mt-2">
                  Serving 45+ countries worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">{t("readyToPartner")}</h2>
            <p className="text-xl mb-8 opacity-95">{t("readyToPartnerDesc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
              >
                {t("contactSalesTeam")}
              </Link>
              <Link
                to="/products"
                className="px-8 py-4 bg-orange-700 text-white font-semibold rounded-lg hover:bg-orange-800 transition-all duration-300 border-2 border-white/20"
              >
                {t("browseCatalog")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Download Modal */}
      <CatalogDownloadModal
        isOpen={isCatalogModalOpen}
        onClose={() => setIsCatalogModalOpen(false)}
      />
    </div>
  );
};

export default Home;

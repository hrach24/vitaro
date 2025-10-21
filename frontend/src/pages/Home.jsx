import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Globe, CheckCircle, Download } from 'lucide-react';
import { productsAPI } from '../api';
import ParallaxSection from '../components/ParallaxSection';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productsAPI.getAll();
        setFeaturedProducts(data.slice(0, 4));
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
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
                  Trusted Healthcare Solutions
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Innovation in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  Healthcare Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                VITARO Medical delivers premium medical products to healthcare professionals worldwide. Quality, safety, and innovation in every product.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/products"
                  className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
                >
                  Explore Products
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-orange-500 hover:text-orange-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download Catalog
                </Link>
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
                    <p className="text-2xl font-bold text-gray-900">ISO Certified</p>
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
              { value: '15+', label: 'Years Experience' },
              { value: '45+', label: 'Countries Served' },
              { value: '500+', label: 'Healthcare Partners' },
              { value: '100%', label: 'Quality Guaranteed' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">{stat.value}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our range of high-quality medical products designed for professional healthcare environments
            </p>
          </div>
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading products...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                    {product.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <Link
                    to="/products"
                    className="text-orange-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
            </div>
          )}
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30"
            >
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Syringe Manufacturing Parallax Section */}
      <ParallaxSection
        imageUrl="https://images.pexels.com/photos/5995162/pexels-photo-5995162.jpeg"
        height="500px"
        speed={0.5}
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h2 className="text-5xl font-bold mb-6 drop-shadow-lg">
              Precision Syringe Manufacturing
            </h2>
            <p className="text-xl mb-8 drop-shadow-lg leading-relaxed">
              Our 10,000+ square meter facility in Shanghai combines cutting-edge automation, 
              precision robotics, and ISO-certified cleanrooms to produce medical devices 
              that exceed international quality standards.
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
              Explore Our Facility
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </ParallaxSection>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose VITARO</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Committed to excellence in every aspect of medical product manufacturing
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Quality Assurance',
                description: 'All products meet international standards and certifications including ISO 13485, CE, and FDA approval.'
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Serving healthcare facilities in over 45 countries with reliable supply chains and logistics.'
              },
              {
                icon: Award,
                title: 'Innovation Focus',
                description: 'Continuous research and development to bring cutting-edge medical products to market.'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                    <Icon className="text-orange-600 group-hover:text-white transition-colors" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Standards</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality is reflected in our certifications
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['ISO 13485:2016', 'CE Marking', 'FDA Registered', 'ISO 9001:2015'].map((cert, index) => (
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

      {/* Technology & Innovation Parallax Section */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1740362381367-09cb98b4e1c6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwbWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3NTk5NTAzMjB8MA&ixlib=rb-4.1.0&q=85"
        height="450px"
        speed={0.6}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-4xl text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Innovation Meets Precision
            </h2>
            <p className="text-xl mb-8 drop-shadow-lg leading-relaxed">
              From advanced robotics to rigorous quality control, every step of our 
              manufacturing process is designed to deliver medical products healthcare 
              professionals can trust.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <Shield className="mx-auto mb-3 text-orange-400" size={40} />
                <p className="font-semibold text-lg">ISO Certified</p>
                <p className="text-sm opacity-90 mt-2">Multiple international certifications</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <Award className="mx-auto mb-3 text-orange-400" size={40} />
                <p className="font-semibold text-lg">Quality Assured</p>
                <p className="text-sm opacity-90 mt-2">Rigorous testing at every stage</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <Globe className="mx-auto mb-3 text-orange-400" size={40} />
                <p className="font-semibold text-lg">Global Reach</p>
                <p className="text-sm opacity-90 mt-2">Serving 45+ countries worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl mb-8 opacity-95">
              Get in touch with our team to discuss your medical supply needs and discover how VITARO can support your healthcare facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
              >
                Contact Sales Team
              </Link>
              <Link
                to="/products"
                className="px-8 py-4 bg-orange-700 text-white font-semibold rounded-lg hover:bg-orange-800 transition-all duration-300 border-2 border-white/20"
              >
                Browse Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
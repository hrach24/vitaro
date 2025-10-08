import React from 'react';
import { Award, Users, Target, TrendingUp, CheckCircle } from 'lucide-react';
import { companyInfo } from '../mock';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About VITARO Medical</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {companyInfo.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581056771085-3ce30d907416?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxtZWRpY2FsJTIwc3VwcGxpZXN8ZW58MHx8fHwxNzU5OTE1Mjc5fDA&ixlib=rb-4.1.0&q=85"
                alt="Medical Facility"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in {companyInfo.founded}, VITARO Medical has grown from a small medical supplies distributor to a leading global manufacturer of premium medical products. Our journey has been driven by an unwavering commitment to quality, innovation, and patient safety.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Today, we serve healthcare facilities in over {companyInfo.countries} countries, employing {companyInfo.employees} dedicated professionals who share our vision of advancing healthcare through superior medical products.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every product we manufacture undergoes rigorous quality control and meets international standards, ensuring healthcare professionals can trust VITARO Medical for their critical needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-orange-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                {companyInfo.mission}
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-teal-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                {companyInfo.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Quality First', description: 'Uncompromising standards in every product' },
              { title: 'Innovation', description: 'Continuous improvement and advancement' },
              { title: 'Integrity', description: 'Transparency and ethical business practices' },
              { title: 'Customer Focus', description: 'Meeting and exceeding expectations' }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                  <CheckCircle className="text-orange-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality is validated by international certifications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {companyInfo.certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-orange-600" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{cert.name}</h3>
                <p className="text-sm text-gray-600 text-center">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Users className="mx-auto text-orange-600 mb-4" size={48} />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-xl text-gray-600">
                {companyInfo.employees} dedicated professionals working together to deliver excellence in healthcare solutions
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-teal-50 p-12 rounded-2xl text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team consists of experienced healthcare professionals, quality assurance specialists, engineers, and customer service experts, all committed to manufacturing products that healthcare professionals can trust.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
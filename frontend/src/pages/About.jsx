import React from 'react';
import { Award, Users, Target, TrendingUp, CheckCircle } from 'lucide-react';
import { companyInfo } from '../mock';
import { useLanguage } from '../i18n/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('aboutVitaro')}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('innovationInHealthcare')} {t('healthcareSolutions')}
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
                src="https://customer-assets.emergentagent.com/job_medpro-vitaro/artifacts/2rb9vcpa_IMG_3131.jpeg"
                alt="VITARO Medical Manufacturing Facility"
                className="rounded-2xl shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">VITARO Medical Manufacturing Facility - Shanghai, China</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('ourStory')}</h2>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6 rounded-r-lg">
                <p className="text-orange-900 font-semibold">
                  🇨🇳🇰🇷 {t('chineseKoreanJointVenture')}
                </p>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t('companyStory')}
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t('facilityDescription')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('qualityCommitment')}
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
              Our commitment to quality is validated by international certifications and regulatory approvals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { name: 'ISO 13485:2016', description: 'Medical Devices Quality Management System' },
              { name: 'ISO 9001:2015', description: 'Quality Management Systems' },
              { name: 'CE Marking', description: 'European Conformity Standards' },
              { name: 'FDA Registered', description: 'US Food and Drug Administration' },
              { name: 'EN ISO 374', description: 'Protective Gloves Standard' },
              { name: 'EN 455', description: 'Medical Gloves Standard' },
              { name: 'ASTM D6319', description: 'Nitrile Examination Gloves' },
              { name: 'ISO 11607', description: 'Packaging for Medical Devices' },
              { name: 'EN 14683', description: 'Medical Face Masks Standard' },
              { name: 'GB 19083', description: 'Chinese Medical Mask Standard' },
              { name: 'GMP Certified', description: 'Good Manufacturing Practice' },
              { name: 'ISO 14001', description: 'Environmental Management' }
            ].map((cert, index) => (
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
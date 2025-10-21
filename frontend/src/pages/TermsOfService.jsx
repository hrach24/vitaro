import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="bg-white rounded-xl shadow-md p-8 space-y-6 text-gray-700 leading-relaxed">
          <p className="text-sm text-gray-500">Last Updated: January 2025</p>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the VITARO Medical website (www.myvitaro.com) and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
            <p>
              VITARO Medical provides medical and dental equipment manufacturing and distribution services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Obligations</h2>
            <p>When using our services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use</li>
              <li>Use our services only for lawful purposes</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not interfere with the proper working of our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Product Information and Orders</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">4.1 Product Descriptions</h3>
            <p>
              We strive to ensure product information is accurate. However, we do not warrant that product descriptions, specifications, or content are error-free, complete, or current.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">4.2 Pricing</h3>
            <p>
              Prices are subject to change without notice. We reserve the right to modify or discontinue products at any time. Pricing errors are not binding.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">4.3 Order Acceptance</h3>
            <p>
              We reserve the right to refuse or cancel any order for any reason, including product availability, errors in pricing or product information, or suspected fraud.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of VITARO Medical or its licensors and is protected by international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mt-2">
              You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any content without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Medical Disclaimer</h2>
            <p>
              Our products are medical devices intended for use by healthcare professionals. Product information is for reference purposes only and does not constitute medical advice. Always consult qualified healthcare professionals for proper use and application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, VITARO Medical shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or products.
            </p>
            <p className="mt-2">
              Our total liability for any claims shall not exceed the amount paid by you for the specific product or service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Warranty and Returns</h2>
            <p>
              Our products are covered by manufacturer warranties as specified in product documentation. Return policies are subject to our Returns and Refunds Policy, available upon request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless VITARO Medical, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the People's Republic of China. Any disputes shall be resolved through negotiation or, if necessary, through arbitration in Shanghai, China.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Continued use of our services after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
            <p>For questions about these Terms, please contact:</p>
            <div className="mt-2 space-y-1">
              <p><strong>VITARO Medical</strong></p>
              <p>Plot 12, Unit A, North Ridge Industrial Park</p>
              <p>No. 3 Hengshan Road, Jiading District</p>
              <p>Shanghai 201800, China</p>
              <p>Email: info@myvitaro.com</p>
              <p>Phone: +86 21 6798 1203</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
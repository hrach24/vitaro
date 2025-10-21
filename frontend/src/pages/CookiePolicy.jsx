import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        <div className="bg-white rounded-xl shadow-md p-8 space-y-6 text-gray-700 leading-relaxed">
          <p className="text-sm text-gray-500">Last Updated: January 2025</p>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
            <p>VITARO Medical uses cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Analytics Cookies:</strong> Collect anonymous data about website usage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2">3.1 Strictly Necessary Cookies</h3>
            <p>
              These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility.
            </p>
            <div className="mt-2 bg-gray-50 p-4 rounded-lg">
              <p className="text-sm"><strong>Examples:</strong></p>
              <ul className="text-sm list-disc pl-5 mt-1">
                <li>Session cookies</li>
                <li>Authentication cookies</li>
                <li>Security cookies</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3.2 Performance and Analytics Cookies</h3>
            <p>
              These cookies collect information about how visitors use our website, such as which pages are visited most often. This helps us improve website performance.
            </p>
            <div className="mt-2 bg-gray-50 p-4 rounded-lg">
              <p className="text-sm"><strong>Examples:</strong></p>
              <ul className="text-sm list-disc pl-5 mt-1">
                <li>Google Analytics</li>
                <li>Page view tracking</li>
                <li>Error logging</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3.3 Functionality Cookies</h3>
            <p>
              These cookies remember choices you make and provide enhanced, personalized features.
            </p>
            <div className="mt-2 bg-gray-50 p-4 rounded-lg">
              <p className="text-sm"><strong>Examples:</strong></p>
              <ul className="text-sm list-disc pl-5 mt-1">
                <li>Language preferences</li>
                <li>User interface customization</li>
                <li>Location data</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
            <p>
              We may use third-party services that set cookies on our website. These services help us analyze website usage and improve user experience. Third parties include:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Google Analytics (analytics and reporting)</li>
              <li>Content delivery networks (CDNs)</li>
              <li>Social media platforms (when sharing features are used)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Cookies</h2>
            <p>
              You can control and manage cookies in various ways:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">5.1 Browser Settings</h3>
            <p>
              Most browsers allow you to refuse or accept cookies, delete existing cookies, and set preferences for certain websites. Please consult your browser's help section for instructions:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Chrome: Settings > Privacy and Security > Cookies</li>
              <li>Firefox: Options > Privacy & Security > Cookies</li>
              <li>Safari: Preferences > Privacy > Cookies</li>
              <li>Edge: Settings > Privacy > Cookies</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">5.2 Opt-Out Tools</h3>
            <p>
              You can opt out of certain analytics cookies:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Impact of Disabling Cookies</h2>
            <p>
              If you choose to disable cookies, some features of our website may not function properly, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Remembering your preferences</li>
              <li>Staying logged in to your account</li>
              <li>Shopping cart functionality</li>
              <li>Personalized content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy periodically to reflect changes in technology or legal requirements. Please check this page regularly for updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
            <p>For questions about our use of cookies, please contact:</p>
            <div className="mt-2 space-y-1">
              <p><strong>VITARO Medical</strong></p>
              <p>Email: info@myvitaro.com</p>
              <p>Phone: +86 21 6798 1203</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
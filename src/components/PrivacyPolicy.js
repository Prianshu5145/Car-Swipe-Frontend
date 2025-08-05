import React from 'react';
import Navbar from '../components/Navbar';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-700 mb-10">
          Privacy Policy
        </h1>

        <div className="bg-white shadow-md rounded-xl p-8 space-y-8">
          <p className="text-lg">
            <strong>Effective Date:</strong> June 5, 2025
          </p>

          <p className="text-lg">
            <strong>Car Swipe Services Pvt Ltd</strong> ("Company", "we", "our", or "us")
            values your privacy. This Privacy Policy explains how we collect, use, disclose,
            and protect your personal data when you use our services.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li><strong>Personal Info:</strong> Name, email, phone, address, ID proof, vehicle details.</li>
              <li><strong>Financial Info:</strong> Card/bank/UPI details, credit history for loans.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, time spent, actions on platform.</li>
              <li><strong>Cookies:</strong> To enhance and personalize your experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li>To deliver and improve services.</li>
              <li>To verify identity and prevent fraud.</li>
              <li>To communicate updates and offers.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">3. Sharing of Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li>With service providers like payment or logistics partners.</li>
              <li>With legal authorities when required.</li>
              <li>During mergers or acquisitions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">4. Data Security</h2>
            <p>
              We use SSL encryption, access controls, and regular audits. However, no system is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">5. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li>Access or correct your data.</li>
              <li>Request deletion or object to marketing.</li>
              <li>Withdraw consent at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">6. Data Retention</h2>
            <p>
              We retain data as long as needed to serve you and comply with legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">7. Third-Party Links</h2>
            <p>
              We're not responsible for privacy practices of third-party websites linked from our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">8. Children’s Privacy</h2>
            <p>
              We do not knowingly collect data from individuals under 18.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">9. Changes to This Policy</h2>
            <p>
              We may update this policy periodically. Continued use of our platform means acceptance of the changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">10. Contact Us</h2>
            <p>
              <strong>Car Swipe Services Pvt Ltd</strong><br />
              Taukalpur Nagra, Surapur, Kadipur,<br />
              Sultanpur, Uttar Pradesh, 228161<br />
              Email: <a href="mailto:contact@trustnride.in" className="text-blue-600 hover:underline">contact@trustnride.in</a><br />
              Phone: <a href="tel:+919792983625" className="text-blue-600 hover:underline">+91 97929 83625</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

import React from 'react';
import Navbar from '../components/Navbar';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-700 mb-10">
          Terms & Conditions
        </h1>

        <div className="bg-white shadow-md rounded-xl p-8 space-y-8">
          <p className="text-lg leading-relaxed">
            These Terms and Conditions ("Agreement") are entered into by and between you
            ("User", "you", or "your") and <strong>Car Swipe Services Pvt Ltd.</strong>
            ("Company", "we", "us", or "our"). By using our website, services, or platform,
            you agree to be bound by these terms.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">1. Eligibility</h2>
            <p>
              You must be at least 18 years old and capable of entering into legally binding
              contracts under Indian law to use this platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">2. Services Offered</h2>
            <p>
              Car Swipe offers a platform to buy, sell, and evaluate new and used vehicles.
              We also provide tools such as vehicle history checks, inspection reports, and
              financing options.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information.</li>
              <li>Do not post illegal, misleading, or harmful content.</li>
              <li>Comply with all applicable laws and regulations.</li>
              <li>Maintain confidentiality of your login credentials.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">4. Vehicle Listings</h2>
            <p>
              If you are listing a vehicle for sale, you must be the lawful owner or
              authorized seller. The vehicle must be accurately described and available
              for inspection.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">5. Payments and Fees</h2>
            <p>
              Payments made via our platform are processed through third-party gateways.
              Car Swipe is not responsible for payment gateway errors or delays. Listing
              fees, if any, are non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">6. Cancellations and Refunds</h2>
            <p>
              Any cancellation or refund policies will be governed by specific service
              terms. Please review those at the time of booking or payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">7. Limitation of Liability</h2>
            <p>
              Car Swipe is not liable for direct or indirect damages arising from
              transactions between users or issues related to vehicles listed or sold.
              We do not guarantee the quality, condition, or legality of listed vehicles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">8. Intellectual Property</h2>
            <p>
              All content on the platform, including logos, trademarks, and data, is
              owned or licensed by Car Swipe and protected by applicable IP laws.
              Unauthorized use is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">9. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the platform at
              our sole discretion for violations of these terms or applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              10. Governing Law and Jurisdiction
            </h2>
            <p>
              These terms shall be governed by the laws of India. Any disputes shall be
              subject to the exclusive jurisdiction of courts in [Insert Your City], India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">11. Changes to These Terms</h2>
            <p>
              We may update these Terms and Conditions at any time. Continued use of our
              services constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">12. Contact Us</h2>
            <p className="mb-2">
              If you have any questions or concerns regarding these terms, please contact:
            </p>
            <p className="leading-relaxed">
              <strong>Car Swipe Services Pvt Ltd</strong><br />
              GST No : 09AAMCC8090M1ZV <br />
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

export default TermsAndConditions;

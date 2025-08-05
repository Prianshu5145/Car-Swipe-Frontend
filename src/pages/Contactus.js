import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/footer.js';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    // Add submission logic here
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6 max-w-6xl">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-600 mb-10">
          Contact Us
        </h1>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-8 space-y-6">
            <div>
              <label htmlFor="name" className="text-gray-700 font-semibold block mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-gray-700 font-semibold block mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="mobile" className="text-gray-700 font-semibold block mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="subject" className="text-gray-700 font-semibold block mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-gray-700 font-semibold block mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full px-4 py-3 border rounded-md shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info Section */}
          <div className="bg-white shadow-xl rounded-xl p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-center">
                <FaEnvelope className="text-blue-500 mr-3 text-xl" />
                <span>
                  Email:{' '}
                  <a href="mailto:support@carswipe.in" className="text-blue-600 hover:underline">
                    support@carswipe.in
                  </a>
                </span>
              </div>

              <div className="flex items-center">
                <FaPhoneAlt className="text-blue-500 mr-3 text-xl" />
                <span>
                  Phone:{' '}
                  <a href="tel:+919792983625" className="text-blue-600 hover:underline">
                    +91 97929 83625
                  </a>
                </span>
              </div>

              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-500 mr-3 text-xl mt-1" />
                <span>
                  Address:<br />
                  Car Swipe Services, Taukalpur Nagra, Surapur,<br /> Kadipur,
                  Sultanpur, Uttar Pradesh, 228161
                </span>
              </div>
            </div>

            {/* Optional: Google Maps iframe */}
            {/* <div className="mt-6">
              <iframe
                title="Car Swipe Location"
                src="https://maps.google.com/..."
                className="w-full h-64 rounded-md border"
                loading="lazy"
              ></iframe>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;

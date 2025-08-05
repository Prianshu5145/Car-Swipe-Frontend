import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const ExchangeCar = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50">
        {/* Hero Image */}
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dunsl7vvf/image/upload/v1754046814/Instagram_Post_-_Exchange_Your_Used_Car_Today_3_egppw6.png"
            alt="Exchange your car"
            className="hidden lg:block w-full h-[79vh] object-cover rounded-b-lg shadow-md"
          />
          <img
            src="https://res.cloudinary.com/dunsl7vvf/image/upload/v1754046938/Instagram_Post_-_Exchange_Your_Used_Car_Today_4_mtmueq.png"
            alt="Exchange your car"
            className="block lg:hidden w-full h-full object-cover rounded-b-lg shadow-md"
          />
        </div>

        {/* What are Car Exchange Offers? */}
        <section className="p-6 md:p-12 bg-gradient-to-b from-blue-100 to-white shadow-xl rounded-xl mt-2 mx-4">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">What are Car Exchange Offers?</h2>
          <p className="text-gray-800 text-lg">
            The <strong>Car Swipe Exchange Offer</strong> is a smart way to upgrade your car without breaking the bank. Sell your old car and buy your next car from us to receive an exclusive exchange bonus. We make the entire process smooth, fast, and worry-free — no more juggling between buyers and sellers.
          </p>
        </section>

        {/* Why Choose Car Swipe? */}
        <section className="p-6 md:p-12 bg-gradient-to-r from-sky-100 to-indigo-50 rounded-xl shadow-xl mt-4 mx-4">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">Why Choose Car Swipe?</h2>
          <p className="text-gray-800 text-lg">
            With Car Swipe, you get top resale value and fast RC transfer thanks to our C2C (Customer-to-Customer) model. No middlemen means better deals. Instant payments, secure documentation, and our <strong>Seller Protection Policy</strong> make us the trusted choice.
          </p>
        </section>

        {/* How it Works */}
        <section className="p-6 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Need to Get Your Car Financed?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Step Cards */}
            {[
              {
                title: 'Book Inspection',
                text: 'Schedule an inspection for your car before the exchange.',
                step: '1'
              },
              {
                title: 'Sell Your Car',
                text: 'Sell your used car to us for a great price!',
                step: '2'
              },
              {
                title: 'Get Exchange Bonus',
                text: 'Receive a unique exchange bonus coupon after selling your car.',
                step: '3'
              },
              {
                title: 'Browse Cars',
                text: 'Browse thousands of certified cars and choose the one you love!',
                step: '4'
              },
              {
                title: 'Test Drive',
                text: 'Test drive your dream car before making a purchase.',
                step: '5'
              },
              {
                title: 'Coupon Redemption',
                text: 'Redeem your coupon during payment to get up to ₹30,000 off.',
                step: '6'
              }
            ].map(({ title, text, step }) => (
              <div
                key={title}
                className="bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white mr-4 text-lg font-bold shadow-md group-hover:scale-110 transition-transform">
                    {step}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                </div>
                <p className="text-gray-200 mb-2 text-base">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="p-6 md:p-12 bg-white border border-blue-200 rounded-xl mt-4 mx-4 mb-4 shadow">
          <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">Need Help with Car Exchange?</h2>
          <p className="text-gray-700 mb-2 text-center">We're here to help! Reach out to us at:</p>
          <p className="text-center text-gray-800 font-medium">📧 contact@carswipe.in</p>
          <p className="text-center text-gray-800 font-medium">📞 +91 97929 83625</p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ExchangeCar;
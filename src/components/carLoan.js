import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

export default function CarLoanPage() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(9.5);
  const [loanTenure, setLoanTenure] = useState(60);

  const principal = Number(loanAmount);
  const rate = Number(interestRate) / 12 / 100;
  const months = Number(loanTenure);

  const emi = rate === 0 ? principal / months :
    (principal * rate * Math.pow(1 + rate, months)) /
    (Math.pow(1 + rate, months) - 1);

  return (
    <div>
      <Navbar />
      <div className="p-4 md:p-12 max-w-5xl mx-auto font-sans">
        {/* Hero Section */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-lg p-10 mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Need to Get Your Car Financed?</h1>
          <p className="text-lg md:text-xl mb-4">We’ll connect you with trusted finance partners to make it simple and affordable.</p>
        </section>

        {/* How It Works Section */}
        <section className="bg-white shadow-md rounded-2xl p-6 md:p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Planning to Buy a Used or New Car?</h2>
          <p className="text-center text-gray-700 text-lg mb-4">
            Get your car financed before RC transfer with <span className="font-semibold text-blue-600">Car Swipe's trusted finance partnerships</span>.
            We handle everything from financing to RC transfer—end-to-end, hassle-free.
          </p>
        </section>

        {/* EMI Calculator */}
        <section className="bg-white shadow-md rounded-2xl p-6 md:p-8 mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">EMI Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700">Loan Amount (₹)</label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">Interest Rate (%)</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">Tenure (Months)</label>
              <input
                type="number"
                value={loanTenure}
                onChange={(e) => setLoanTenure(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg font-medium text-gray-800">
              Estimated EMI: <span className="text-blue-600 font-bold">₹{emi.toFixed(0)}</span>/month
            </p>
          </div>
        </section>

        {/* Application Form */}
        <section className="bg-white shadow-md rounded-2xl p-6 md:p-8 mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Get Loan Assistance</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Full Name" required />
            <input className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Mobile Number" type="tel" required />
            <input className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="City" required />
            <input className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="State" required />
            <input className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Car Brand" required />
            <input className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Car Model" required />
            <input className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Variant" required />
            <input className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Expected Loan Amount (₹)" type="number" />
            <select className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Employment Type</option>
              <option>Salaried</option>
              <option>Self-employed</option>
            </select>
            <input className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Monthly Income" type="number" required />
            <input className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Preferred Down Payment" type="number" />
          </form>
          <div className="mt-6 text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition">Submit Application</button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

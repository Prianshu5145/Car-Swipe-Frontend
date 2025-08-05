import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer'); // Default role
  const [message, setMessage] = useState(''); // Store success or error messages
  
  const navigate = useNavigate();
const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loader

    const userData = { name, email, mobile, password, role };

    try {
      const response = await fetch('https://car-swipe-backend-production.up.railway.app/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json(); // Parse response data

      if (response.ok) {
        setMessage(result.message || 'User signed up successfully!');
        setTimeout(() => navigate('/login'), 4000); // Redirect to login
      } else {
        setMessage(result.message || 'Error signing up');
      }
    } catch (error) {
      console.error('Failed to sign up:', error);
      setMessage('Failed to sign up. Please try again later.');
    } finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <div><Navbar/><div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg space-y-4 w-96"
    >
      <h2 className="text-2xl font-bold mb-2">Signup</h2>

      {message && (
        <p className={`mb-4 text-sm ${message.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}

      <p className="text-red-500 mb-6 text-sm">
        Please enter a memorable email ID and password. These will be used for login.
      </p>

      <div>
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border rounded-lg"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded-lg"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Mobile <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
          className="w-full p-2 border rounded-lg"
          placeholder="Enter your mobile number"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border rounded-lg"
          placeholder="Enter your password"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Role <span className="text-red-500">*</span>
        </label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          className="w-full p-2 border rounded-lg"
        >
          <option value="buyer">Buyer</option>
          
        </select>
      </div>

      {loading ? (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
    {/* Car Animation */}
    <div className="w-28 h-16 flex items-center justify-center mb-4">
      <img
        src="https://res.cloudinary.com/dztz5ltuq/image/upload/v1754381777/Screenshot__620_-removebg-preview_20250805_134123_0000_2_gbdz3h.png"
        alt="Car Logo"
        className="w-36 h-16 animate-carDrive"
      />
    </div>

    {/* Loading Text */}
    <p className="text-xl md:text-2xl font-bold text-gray-800 text-center">
      Creating Your{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        Account...
      </span>
    </p>
  </div>
) : (
  <button
    type="submit"
    className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition mt-5"
  >
    Sign Up
  </button>
)}

    </form>

    
  </div></div>
  );
};

export default Signup;

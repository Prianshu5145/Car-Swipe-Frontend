import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState(''); // To store success/error message from backend
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Disable scrolling
    document.body.classList.add('no-scroll');

    // Cleanup function to enable scrolling again
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);
const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Clear previous errors
    setMessage(''); // Clear previous messages

    try {
      const response = await axios.post('https://car-swipe-backend-production.up.railway.app/api/auth/login', { email, password });
      const { token, role, message } = response.data; // Assuming backend sends a message too
      login(token, role); // Save token and role in context
      setMessage(message); // Set success message from backend (if available)
      setTimeout(() => navigate('/'), 300); // Use navigate instead of history.push with delay
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message); // Show backend error message
      } else {
        setError('Login failed. Please check your credentials.');
      }
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div>
  <Navbar />

  <div className="relative bg-cover bg-center min-h-screen flex justify-center items-center">
    {/* Background Image Overlay */}
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-800 via-purple-900 to-black opacity-70 z-0" />
    <div className="absolute inset-0 bg-loginSignup-mobile lg:hidden bg-cover bg-center opacity-30" />
    <div className="absolute inset-0 hidden lg:block bg-loginSignup-desktop bg-cover bg-center opacity-30" />

    {/* Login Card */}
    <form
      onSubmit={handleSubmit}
      className="relative z-10 bg-white/80 backdrop-blur-lg shadow-2xl rounded-xl px-8 py-10 w-full max-w-md border border-gray-200"
    >
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-6 tracking-wide">
        Welcome Back
      </h2>

      {error && <p className="text-red-600 text-center font-medium mb-2">{error}</p>}
      {message && <p className="text-green-600 text-center font-medium mb-2">{message}</p>}

      {/* Email Field */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your registered email"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Password Field */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <button
  type="submit"
  className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition duration-300"
>
  {loading ? 'Logging You In...' : 'Log In'}
</button>

      {/* Bottom Links */}
      <p className="mt-5 text-center text-md text-gray-700">
        Don’t have an account?{' '}
        <a href="/signup" className="text-blue-600 hover:underline font-medium">
          Sign up
        </a>
      </p>
      <p className="text-center text-md text-gray-700">
        Forgot password?{' '}
        <a href="/forgot-Password" className="text-blue-600 hover:underline font-medium">
          Reset it
        </a>
      </p>
    </form>
  </div>
</div>

  );
};

export default Login;

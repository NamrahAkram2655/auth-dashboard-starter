// src/pages/Login.jsx
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/User/login`, formData);
      const { name, email, role } = response.data;

      // Save to sessionStorage
      sessionStorage.setItem('name', name);
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('role', role);

      // Redirect or show success
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform rotate-12 animate-pulse opacity-20 shadow-2xl"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-bounce opacity-30 shadow-xl"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 border-4 border-white/20 rounded-full animate-spin opacity-40"></div>
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-cyan-400 rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg transform rotate-45 animate-pulse opacity-30"></div>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 transform hover:scale-105 transition-all duration-300">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-2">Login</h2>
            <p className="text-white/70">Welcome back! Please login to your account.</p>
          </div>

          {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm group-hover:bg-white/15"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="group relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-6 py-4 pr-12 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm group-hover:bg-white/15"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-200"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-4 rounded-2xl font-semibold hover:from-gray-800 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-black/25"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </div>
              ) : (
                'Login'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async () => {
    setErrorMsg('');
    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Something went wrong');

      sessionStorage.setItem('user', JSON.stringify(data));
      window.location.href = '/login';

    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform rotate-12 animate-pulse opacity-20 shadow-2xl" />
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-bounce opacity-30 shadow-xl" />
        <div className="absolute top-1/3 left-1/4 w-16 h-16 border-4 border-white/20 rounded-full animate-spin opacity-40" />
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-cyan-400 rounded-full animate-ping opacity-50" />
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg transform rotate-45 animate-pulse opacity-30" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 transform hover:scale-105 transition-all duration-300">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-2">Sign Up</h2>
            <p className="text-white/70">Create your account</p>
          </div>

          {errorMsg && (
            <div className="text-red-400 text-center mb-4 font-medium">
              {errorMsg}
            </div>
          )}

          <div className="space-y-6">
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="input-style"
              placeholder="Full Name"
            />

            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="input-style"
              placeholder="Email Address"
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="input-style pr-12"
                placeholder="Password"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="eye-btn">
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="input-style pr-12"
                placeholder="Confirm Password"
              />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="eye-btn">
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="submit-btn"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Creating Account...</span>
                </div>
              ) : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .input-style {
          width: 100%;
          padding: 1rem 1.5rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 1rem;
          color: white;
          placeholder: rgba(255,255,255,0.6);
          backdrop-filter: blur(10px);
          outline: none;
          transition: all 0.3s;
        }
        .eye-btn {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255,255,255,0.6);
        }
        .submit-btn {
          width: 100%;
          background: linear-gradient(to right, #111827, #000000);
          color: white;
          padding: 1rem;
          border-radius: 1rem;
          font-weight: 600;
          transition: all 0.3s;
          box-shadow: 0 4px 6px rgba(0,0,0,0.25);
        }
      `}</style>
    </div>
  );
};

export default Signup;
// pages/Login.jsx
import React from "react";
import { Link} from "react-router-dom";
import {  FaEnvelope,  FaLock,  FaArrowLeft} from "react-icons/fa";


const Login = () => {
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-50 flex items-center justify-center p-4">
      {/* Back to Home */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 hover:text-rose-800 transition group"
      >
        <FaArrowLeft className="text-sm group-hover:-translate-x-1 transition" />
        <span>Back to Home</span>
      </Link>

      {/* Main Card */}
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-rose-100 rounded-full -ml-16 -mb-16 opacity-50"></div>
          
          {/* Logo */}
        <div className="flex items-center justify-center"> 
               <img
            src="/logo.png"
            alt="Food Express Logo"
            className="h-20 w-32 object-contai"
          />
          </div>

          {/* Header */}
          <div className="text-center mb-8">
          
            <p className="text-gray-500">Sign in to continue your food journey</p>
          </div>

          {/* Login Form */}
          <form  className="space-y-5">
            
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  // required
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 transition  focus:ring-red-200  border-gray-300 focus:border-rose-800 "
                />
              </div>
             
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type= "password"
                  name="password"
                  // required
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 transition  focus:ring-red-200  border-gray-300 focus:border-rose-800 "
                />
                
              </div>
              
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-rose-800 border-gray-300 rounded focus:ring-rose-800"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              
              <Link 
                to="/forgot-password"
                className="text-sm text-rose-800 hover:underline font-medium"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-rose-800 text-white font-semibold rounded-xl  transition transform hover:scale-[1.02]  flex items-center justify-center "
            > Sign In  </button>
          </form>

         

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-rose-800 font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
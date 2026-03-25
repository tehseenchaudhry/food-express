// pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault();

  const storedUser = JSON.parse(localStorage.getItem("signupData"));

  if (!storedUser) {
    toast.error("No user found. Please sign up first.");
    return;
  }

  if (
    storedUser.email === formData.email &&
    storedUser.password === formData.password
  ) {
    toast.success("Login Successfully 🎉");
    navigate("/")
  } else {
    toast.error("Invalid Email or Password");
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-50 flex items-center justify-center p-4">


      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-rose-100 rounded-full -ml-16 -mb-16 opacity-50"></div>

          <div className="flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Food Express Logo"
              className="h-20 w-32 object-contai"
            />
          </div>

          <div className="text-center mb-8">
            <p className="text-gray-500">
              Sign in to continue your food journey
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
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
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 transition focus:ring-red-200 border-gray-300 focus:border-rose-800"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 transition focus:ring-red-200 border-gray-300 focus:border-rose-800"
                />
              </div>
            </div>

            {/* Remember */}
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

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-rose-800 text-white font-semibold rounded-xl transition transform hover:scale-[1.02] flex items-center justify-center"
            >
              Sign In
            </button>

          </form>

          <p className="mt-8 text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-rose-800 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
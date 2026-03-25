// pages/Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaArrowLeft
} from "react-icons/fa";
import { toast } from "react-toastify"

const Signup = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast("Password do not match", {
        type: "error"
      })
    }
    else{

      
      localStorage.setItem("signupData", JSON.stringify(formData));
      
      console.log("Saved to LocalStorage:", formData);
      navigate("/login")
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
              Join us and get delicious food delivered
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 transition focus:ring-red-200 border-gray-300 focus:border-rose-800"
                />
              </div>
            </div>

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
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 transition focus:ring-red-200 border-gray-300 focus:border-rose-800"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="text-gray-400" />
                </div>

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="03xxxxxxxxx"
                  value={formData.phone}
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
                  required
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 transition border-gray-300 focus:border-rose-800 focus:ring-rose-200"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 transition focus:ring-red-200 border-gray-300 focus:border-rose-800"
                />
              </div>
            </div>

            {/* Terms */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-rose-800 border-gray-300 rounded focus:ring-rose-800 mt-1"
                />
                <span className="text-sm text-gray-600">
                  I agree to the{" "}
                  <span className="text-rose-800 hover:underline">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-rose-800 hover:underline">
                    Privacy Policy
                  </span>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-rose-800 text-white font-semibold rounded-xl transition transform hover:scale-[1.02] flex items-center justify-center"
            >
              Create Account
            </button>
          </form>

          <p className="mt-3 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-rose-800 font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;
// pages/ForgotPassword.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FaEnvelope, 
  FaArrowLeft,
  FaCheckCircle,
  FaKey
} from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: email, 2: verification, 3: new password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(60);

  // Handle email submission
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setStep(2);
        startTimer();
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };

  // Timer for OTP
  const startTimer = () => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Handle OTP change
  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  // Handle OTP verification
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const otpString = otp.join("");
    
    if (otpString.length !== 6) {
      setErrors({ otp: "Please enter complete OTP" });
      return;
    }

    setIsLoading(true);
    // Simulate verification
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
    }, 1500);
  };

  // Handle password reset
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (newPassword.length < 6) {
      newErrors.newPassword = "Password must be at least 6 characters";
    }
    
    if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      // Simulate password reset
      setTimeout(() => {
        setIsLoading(false);
        // Redirect to login
        navigate("/login");
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };

  // Resend OTP
  const handleResendOtp = () => {
    setTimer(60);
    startTimer();
    // Resend OTP logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-50 flex items-center justify-center p-4">
      {/* Back to Login */}
      <Link 
        to="/login" 
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 hover:text-rose-800 transition group"
      >
        <FaArrowLeft className="text-sm group-hover:-translate-x-1 transition" />
        <span>Back to Login</span>
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
              <div className="text-center mb-8">
                <div className="w-15 h-15 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaKey className="text-xl text-rose-800" />
                </div>
                <h1 className="text-2xl font-bold text-black mb-2">Forgot Password?</h1>
                <p className="text-gray-500">
                  Enter your email address and we'll send you a verification code
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-5">
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
                      required
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 transition  focus:ring-red-200  border-gray-300 focus:border-rose-800 "
                    />
                  </div>
                 
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-rose-800 text-white font-semibold rounded-xl  transition transform hover:scale-[1.02]  flex items-center justify-center "
                >
                 Send Reset Code"                
                </button>
              </form>

        

          {/* Help Links */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Need help?{" "}
              <Link to="/contact" className="text-rose-800 hover:underline font-medium">
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
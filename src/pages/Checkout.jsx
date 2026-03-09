import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import CheckoutLeft from "../component/Checkout/CheckoutLeft";
import CheckoutRight from "../component/Checkout/CheckoutRight";

const Checkout = () => {
  const navigate = useNavigate();
  
  // State yahan define karein
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: ""
  });
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      {/* Back to Cart Button */}
      <div className="max-w-6xl mx-auto px-4 mb-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-rose-800 transition"
        >
          <FaAngleLeft />
          Back to Cart
        </button>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {/* Left Side - Forms with props */}
        <CheckoutLeft 
          formData={formData}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          handleInputChange={handleInputChange}
        />
        
        {/* Right Side - Order Summary with formData prop */}
        <CheckoutRight 
          formData={formData}  
        />
      </div>
    </div>
  );
};

export default Checkout;
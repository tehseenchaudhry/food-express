import React from "react";
import { FaUser, FaMapMarkerAlt, FaCreditCard, FaTruck } from "react-icons/fa";

const CheckoutLeft = ({ 
  formData, 
  paymentMethod, 
  setPaymentMethod, 
  handleInputChange 
}) => {
  return (
    <div className="md:col-span-2 space-y-4">
      {/* Contact Info */}
      <div className="bg-white p-5 rounded-xl shadow-sm">
        <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <FaUser className="text-rose-800" />
          Contact Information
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-800 outline-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-800 outline-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-800 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Shipping Address */}
      <div className="bg-white p-5 rounded-xl shadow-sm">
        <h2 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FaMapMarkerAlt className="text-rose-800" />
          Shipping Address
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5 lg:col-span-2">
            <label className="text-sm font-medium text-gray-700">Street Address</label>
            <input
              type="text"
              name="address"
              placeholder="123 Main Street"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-800 outline-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              name="city"
              placeholder="Karachi"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-800 outline-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              placeholder="75000"
              value={formData.postalCode || ''}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-800 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white p-5 rounded-xl shadow-sm">
        <h2 className="font-bold text-gray-800 mb-4 flex items-center gap-2 mx-16">
          <FaCreditCard className="text-rose-800" />
          Payment Method
        </h2>
        <div className="space-y-3">
          <label className="flex items-center border-rose-800 bg-rose-50 p-4 border rounded-xl cursor-pointer transition-all mx-16">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-3 accent-rose-800 w-4 h-4"
            />
            <span className="flex-1 font-medium">Cash on Delivery</span>
            <FaTruck className="text-rose-800 text-xl" />
          </label>

        
        </div>
      </div>
    </div>
  );
};

export default CheckoutLeft;
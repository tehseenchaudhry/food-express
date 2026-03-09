import React from "react";
import { FaUser, FaMapMarkerAlt, FaCreditCard, FaTruck } from "react-icons/fa";
import { motion } from "framer-motion";

const CheckoutLeft = ({ 
  formData, 
  paymentMethod, 
  setPaymentMethod, 
  handleInputChange 
}) => {
  return (
    <motion.div 
      className="md:col-span-2 space-y-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Contact Info */}
      <motion.div 
        className="bg-white p-5 rounded-xl shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      >
        <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <FaUser className="text-rose-800" />
          Contact Information
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <motion.div 
            className="flex flex-col gap-1.5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <motion.input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-800 outline-none"
              whileFocus={{ scale: 1.02, borderColor: "#9f1239" }}
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col gap-1.5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label className="text-sm font-medium text-gray-700">Email</label>
            <motion.input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-800 outline-none"
              whileFocus={{ scale: 1.02, borderColor: "#9f1239" }}
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col gap-1.5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="text-sm font-medium text-gray-700">Phone</label>
            <motion.input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-800 outline-none"
              whileFocus={{ scale: 1.02, borderColor: "#9f1239" }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Shipping Address */}
      <motion.div 
        className="bg-white p-5 rounded-xl shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      >
        <h2 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FaMapMarkerAlt className="text-rose-800" />
          Shipping Address
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <motion.div 
            className="flex flex-col gap-1.5 lg:col-span-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <label className="text-sm font-medium text-gray-700">Street Address</label>
            <motion.input
              type="text"
              name="address"
              placeholder="123 Main Street"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-800 outline-none"
              whileFocus={{ scale: 1.02, borderColor: "#9f1239" }}
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col gap-1.5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="text-sm font-medium text-gray-700">City</label>
            <motion.input
              type="text"
              name="city"
              placeholder="Karachi"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-800 outline-none"
              whileFocus={{ scale: 1.02, borderColor: "#9f1239" }}
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col gap-1.5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <label className="text-sm font-medium text-gray-700">Postal Code</label>
            <motion.input
              type="text"
              name="postalCode"
              placeholder="75000"
              value={formData.postalCode || ''}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-800 outline-none"
              whileFocus={{ scale: 1.02, borderColor: "#9f1239" }}
            />
          </motion.div>
        </div>
      </motion.div>
 
      {/* Payment Method */}
      <motion.div 
        className="bg-white p-5 rounded-xl shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      >
        <h2 className="font-bold text-gray-800 mb-4 flex items-center gap-2 mx-16">
          <FaCreditCard className="text-rose-800" />
          Payment Method
        </h2>
        <div className="space-y-3">
          <motion.label 
            className="flex items-center border-rose-800 bg-rose-50 p-4 border rounded-xl cursor-pointer transition-all mx-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-3 accent-rose-800 w-4 h-4"
            />
            <span className="flex-1 font-medium">Cash on Delivery</span>
            <motion.div
              animate={{ 
                x: [0, 5, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <FaTruck className="text-rose-800 text-xl" />
            </motion.div>
          </motion.label>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CheckoutLeft;
import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="max-w-6xl mx-auto mt-20 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-rose-800 to-rose-600 rounded-3xl opacity-20 group-hover:opacity-20 blur-xl transition-opacity"></div>
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
              alt="Restaurant Contact"
              className="w-full h-auto object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">We'd Love to Hear</h3>
              <p className="text-sm opacity-90">Drop us a message and we'll get back to you within 24 hours</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div 
          className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-rose-800 mb-6">Send us a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Name and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-rose-800 focus:ring-2 focus:ring-rose-200 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="03XX-XXXXXXX"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-rose-800 focus:ring-2 focus:ring-rose-200 transition"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="House #, Street, Area, City"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-rose-800 focus:ring-2 focus:ring-rose-200 transition"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-rose-800 focus:ring-2 focus:ring-rose-200 transition resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-rose-800 to-rose-700 text-white font-semibold rounded-xl hover:from-rose-900 hover:to-rose-800 transition flex items-center justify-center gap-2"
            >
              <FaPaperPlane className="text-sm" />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
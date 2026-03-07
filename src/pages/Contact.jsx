// pages/Contact.jsx
import React, { useState } from "react";
import { 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaHeadset,
  FaUser,
  FaComment,
  FaPaperPlane,
  FaMapMarkerAlt
} from "react-icons/fa";
import { MdRestaurantMenu, MdDeliveryDining } from "react-icons/md";

const Contact = () => {
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
    // Handle form submission
    console.log(formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-rose-100 px-4 py-2 rounded-full">
            <MdRestaurantMenu className="text-rose-800 text-sm" />
            <span className="text-rose-800 font-medium text-sm">GET IN TOUCH</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-4">
          Get in <span className="text-rose-800">Touch</span>
        </h1>

        {/* Paragraph */}
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Have questions? We'd love to hear from you. Our team is always here to help.
        </p>

        {/* 3 Stylish Cards with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Opening Hours */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-rose-100  transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaClock className="text-rose-800 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Opening Hours</h3>
                <p className="text-gray-600">Monday - Friday</p>
                <p className="text-gray-600 font-medium">10:00 AM – 10:00 PM</p>
              </div>
            </div>
          </div>

          {/* Card 2: Quick Support */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-rose-100 transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaHeadset className="text-rose-800 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Quick Support</h3>
                <p className="text-gray-600">24/7 Customer Service</p>
                <p className="text-gray-600 font-medium">Live Chat Available</p>
              </div>
            </div>
          </div>

          {/* Card 3: Delivery Info */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-rose-100 transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MdRestaurantMenu className="text-rose-800 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Delivery Hours</h3>
                <p className="text-gray-600">Everyday</p>
                <p className="text-gray-600 font-medium">11:00 AM – 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image & Contact Form Section */}
        <div className="max-w-6xl mx-auto mt-20 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Image */}
            <div className="relative group ">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-800 to-rose-600 rounded-3xl opacity-20 group-hover:opacity-20 blur-xl transition-opacity"></div>
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
                  alt="Restaurant Contact"
                  className="w-full h-auto object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Text on Image */}
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">We'd Love to Hear</h3>
                  <p className="text-sm opacity-90">Drop us a message and we'll get back to you within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-rose-800 mb-6">Send us a Message</h3>
              
              <form  className="space-y-5">
                
                {/* Name and Phone - Same Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-rose-800 focus:ring-2 focus:ring-rose-200 transition"
                        required
                      />

                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="03XX-XXXXXXX"
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-rose-800 focus:ring-2 focus:ring-rose-200 transition"
                        required
                      />

                  </div>
                </div>

                {/* Delivery Address Field - Full Width */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Address
                  </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="House #, Street, Area, City"
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-rose-800 focus:ring-2 focus:ring-rose-200 transition"
                      required
                    />
                </div>

                {/* Message Field - Full Width */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="Write your message here..."
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-rose-800 focus:ring-2 focus:ring-rose-200 transition resize-none"
                      required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-rose-800 to-rose-700 text-white font-semibold rounded-xl hover:from-rose-900 hover:to-rose-800 transition transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <FaPaperPlane className="text-sm" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
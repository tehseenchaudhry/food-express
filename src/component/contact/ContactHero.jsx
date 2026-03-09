import React from 'react';
import { FaClock } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import { MdRestaurantMenu } from "react-icons/md";



import { motion } from 'framer-motion';

const ContactHero = () => {
  const cards = [
    {
      icon: <FaClock className="text-rose-800 text-2xl" />,
      title: "Opening Hours",
      line1: "Monday - Friday",
      line2: "10:00 AM – 10:00 PM"
    },
    {
      icon: <FaHeadset className="text-rose-800 text-2xl" />,
      title: "Quick Support",
      line1: "24/7 Customer Service",
      line2: "Live Chat Available"
    },
    {
      icon: <MdRestaurantMenu className="text-rose-800 text-2xl" />,
      title: "Delivery Hours",
      line1: "Everyday",
      line2: "11:00 AM – 11:00 PM"
    }
  ];

  return (
    <>
      {/* Badge */}
      <motion.div 
        className="flex justify-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 bg-rose-100 px-4 py-2 rounded-full">
          <MdRestaurantMenu className="text-rose-800 text-sm" />
          <span className="text-rose-800 font-medium text-sm">GET IN TOUCH</span>
        </div>
      </motion.div>

      {/* Heading */}
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-black text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Get in <span className="text-rose-800">Touch</span>
      </motion.h1>

      {/* Paragraph */}
      <motion.p 
        className="text-gray-600 text-center max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Have questions? We'd love to hear from you. Our team is always here to help.
      </motion.p>

      {/* 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-rose-100 transition-all duration-300 border border-gray-100 group"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.line1}</p>
                <p className="text-gray-600 font-medium">{card.line2}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ContactHero;
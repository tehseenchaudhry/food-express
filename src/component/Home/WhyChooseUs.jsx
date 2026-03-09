import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const features = [
    "Free Delivery on orders above Rs. 500",
    "30 Min Delivery Guaranteed",
    "Best Daily Offers & Deals",
    "100% Hygienic Food",
    "500+ Partner Restaurants",
    "24/7 Customer Support"
  ];

  return (
    <motion.section 
      className="py-14 md:py- bg-white lg:px-8 overflow-x-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="text-rose-800 font-semibold text-sm uppercase tracking-wider"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-black mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We Make <span className="text-rose-800">Food Delivery</span> Easy
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto mt-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Experience the fastest and most reliable food delivery service in your city.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl sm:text-3xl font-bold text-black mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              We Deliver More Than Just Food
            </motion.h3>

            <motion.p 
              className="text-gray-600 mb-6 max-w-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Your satisfaction is our priority. Here's why thousands of customers choose us every day.
            </motion.p>
            
            <div className="space-y-3">
              {features.map((f, i) => (
                <motion.div 
                  key={i} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaCheckCircle className="text-rose-800 text-lg md:text-xl" />
                  </motion.div>
                  <span className="text-gray-700 text-sm md:text-base">{f}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src="https://www.mckinsey.com/~/media/mckinsey/industries/technology%20media%20and%20telecommunications/high%20tech/our%20insights/the%20changing%20market%20for%20food%20delivery/the-changing-market-1536x1536-500_standard.jpg"
              alt="Food Delivery Man"
              className="w-full h-[350px] lg:h-[430px] object-cover rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Floating Badge */}
            <motion.div 
              className="absolute -bottom-4 lg:-left-4 -left-2 bg-rose-800 text-white px-4 py-3 rounded-xl shadow-lg"
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <p className="text-xl font-bold leading-none">30 min</p>
              <p className="text-xs">Delivery</p>
            </motion.div>
            
            {/* Rating Badge */}
            <motion.div 
              className="absolute -top-4 lg:-right-4 -right-2 border border-rose-800 bg-white px-4 py-3 rounded-xl shadow-lg"
              initial={{ scale: 0, rotate: 10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <p className="text-xl font-bold text-rose-800 leading-none">4.8★</p>
              <p className="text-xs text-gray-600">Rating</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
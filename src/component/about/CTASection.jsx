import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaShoppingBag, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden lg:px-8">
      {/* Background Image - Fixed */}
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80')",
        }}
      ></div>
      
      {/* Overlay with Blur */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div 
          className="rounded-3xl p-12 md:p-16 text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          
          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Experience the <span className="text-rose-700">Best Food Delivery?</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-200 mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join thousands of happy customers who get their favorite food delivered in minutes
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-3 px-8 py-3 bg-rose-700 text-white rounded-full font-semibold hover:bg-rose-800 transition-all duration-500 shadow-xl"
                >
                  <FaShoppingBag />
                  Order Now
                  <FaArrowRight />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-rose-800 transition-all duration-500"
                >
                  <FaEnvelope />
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              className="flex justify-center gap-8 mt-12 text-sm text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                "✓ 1000+ Restaurants",
                "✓ 30 Min Delivery", 
                "✓ 24/7 Support"
              ].map((text, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1, color: "#fff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {text}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
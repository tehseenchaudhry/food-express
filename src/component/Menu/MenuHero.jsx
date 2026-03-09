import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setSearchItem } from '../../reduxToolkit/features/menuSlice';
import { motion } from 'framer-motion';

const MenuHero = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchItem(e.target.value));
  };

  return (
    <motion.section 
      className="bg-gradient-to-br from-rose-50 to-white py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Badge */}
        <motion.span 
          className="inline-block bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          🍽️ Our Special Menu
        </motion.span>
        
        {/* Heading */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          What would you like to{' '}
          <span className="text-rose-800">eat today?</span>
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          className="text-gray-600 text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Discover delicious dishes from top restaurants, delivered fresh to your doorstep
        </motion.p>
        
        {/* Search Bar - Design Only */}
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div 
            className="flex items-center bg-white rounded-full shadow-lg border border-gray-100 p-1 hover:border-rose-800"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex-1 flex items-center pl-4">
              <FaSearch className="text-gray-400" />
              <motion.input
                type="text"
                onChange={handleChange}
                placeholder="Search for pizza, burger, biryani..."
                className="w-full px-3 py-2 outline-none bg-transparent text-gray-800"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MenuHero;
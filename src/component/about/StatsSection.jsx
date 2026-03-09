import React from 'react';
import { FaUtensils, FaSmile, FaTruck, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    { 
      icon: <FaUtensils className="text-2xl text-rose-400" />, 
      value: '50K+', 
      label: 'Orders Delivered',
    },
    { 
      icon: <FaSmile className="text-2xl lg:text-4xl text-rose-400" />, 
      value: '25K+', 
      label: 'Happy Customers',
    },
    { 
      icon: <FaTruck className="text-2xl lg:text-4xl text-rose-400" />, 
      value: '1K+', 
      label: 'Restaurant Partners',
    },
    { 
      icon: <FaStar className="text-2xl lg:text-4xl text-rose-400" />, 
      value: '50+', 
      label: 'Cities Covered',
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden lg:px-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80')",
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            FoodExpress by the <span className="text-rose-700">Numbers</span>
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Proudly serving our amazing community
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/70"
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div className="w-12 h-12 bg-rose-50/10 rounded-lg flex items-center justify-center">
                  {stat.icon}
                </div>
                
                {/* Content */}
                <div>
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <h3 className="text-lg font-semibold text-rose-400">{stat.label}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
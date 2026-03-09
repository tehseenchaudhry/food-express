import React from "react";
import { 
  FaSmile,
  FaArrowRight 
} from "react-icons/fa";
import { BiSearchAlt, BiFoodMenu } from "react-icons/bi";
import { MdDeliveryDining} from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    icon: <BiSearchAlt/>,
    title: "Search Food",
    description: "Browse through thousands of restaurants and dishes in your area",
  },
  {
    id: 2,
    icon: <BiFoodMenu/>,
    title: "Choose & Order",
    description: "Select your favorite items, customize, and place your order",
  },
  {
    id: 3,
    icon: <MdDeliveryDining/>,
    title: "Fast Delivery",
    description: "We deliver your food hot & fresh right to your doorstep",
  },
  {
    id: 4,
    icon: <FaSmile/>,
    title: "Enjoy & Relax",
    description: "Sit back, relax and enjoy your delicious meal", 
  }
];

const HowItWorks = () => {
  return (
    <motion.section 
      className="py-24 lg:px-8 bg-gradient-to-b from-white via-rose-50/30 to-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Header with Animation */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-rose-100/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-rose-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-800 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-800"></span>
            </span>
            <span className="text-rose-800 font-semibold text-sm tracking-wider">
              EASY 4-STEP PROCESS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            How It{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-rose-800">Works</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q25,0 50,5 T100,5" stroke="#9f1239" strokeWidth="2" fill="none"/>
              </svg>
            </span>
          </h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get your favorite food delivered in just 4 easy steps - from searching to enjoying!
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          
          {/* Animated connecting line - only visible on large screens */}
          <motion.div 
            className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-rose-600 via-rose-800 to-rose-600 -translate-y-1/2"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            style={{ originX: 0 }}
          >
          </motion.div>

          {steps.map((step, index) => (
            <motion.div 
              key={step.id} 
              className="group relative pt-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              {/* Step Number - Completely Visible */}
              <motion.div 
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-rose-800 to-rose-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl z-20"
                whileHover={{ rotate: 0 }}
                animate={{ rotate: 12 }}
                transition={{ duration: 0.5 }}
              >
                <motion.span 
                  className="inline-block"
                  whileHover={{ rotate: 0 }}
                  animate={{ rotate: -12 }}
                  transition={{ duration: 0.5 }}
                >
                  {step.id}
                </motion.span>
              </motion.div>

              {/* Card */}
              <motion.div 
                className="relative bg-white rounded-3xl pt-12 pb-8 px-6 text-center shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                whileHover={{ y: -3, borderBottom: "4px solid #9f1239" }}
                transition={{ duration: 0.3 }}
              >
                
                {/* Icon Container with Animation */}
                <motion.div 
                  className="relative w-28 h-28 mx-auto rounded-3xl flex items-center justify-center shadow-lg mb-8"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="text-5xl text-rose-800"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.icon}
                  </motion.div>
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="text-2xl font-bold text-black mb-4 transition-colors duration-300"
                  whileHover={{ color: "#9f1239" }}
                >
                  {step.title}
                </motion.h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {step.description}
                </p>

              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Link to="/menu" className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-800 to-rose-700 text-white font-semibold rounded-full hover:from-rose-900 hover:to-rose-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
            <span>Get Started Now</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <FaArrowRight className="text-sm" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
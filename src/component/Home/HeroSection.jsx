import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaTruck, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = () => {
  
  return (
    <section className="relative h-[70vh] lg:h-screen w-full overflow-hidden">
      {/* Video Background - Working Coverr Videos */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="video.mp4" type="video/mp4" />
      </video>

      {/* Overlay - dark for text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          
          {/* BADGE - H1 ke upar add kiya */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-rose-800/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-rose-800/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <FaStar className="text-rose-800 text-sm" />
            </motion.div>
            <span className="text-sm font-medium tracking-wider"> PREMIUM QUALITY FOOD</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -10, 10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                delay: 0.5
              }}
            >
              <FaStar className="text-rose-800 text-sm" />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Food <span className="text-rose-800">Express</span>
          </motion.h1> 
          
          {/* Subheading */}
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Delicious food delivered to your doorstep in 30 minutes or less
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              to=""
              className="inline-flex items-center gap-2 px-8 py-3 bg-rose-800 text-white rounded-full hover:bg-rose-900 transition-all transform hover:scale-105 shadow-lg hover:shadow-rose-800/30"
            >
              Order Now
            </Link>
          </motion.div>

          {/* Stats - optional but looks good */}
          <motion.div 
            className="flex justify-center gap-8 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
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
                <FaTruck className="text-rose-800" />
              </motion.div>
              <span className="text-sm">Free Delivery</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }}
              >
                <FaClock className="text-rose-800" />
              </motion.div>
              <span className="text-sm">30 Min Delivery</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
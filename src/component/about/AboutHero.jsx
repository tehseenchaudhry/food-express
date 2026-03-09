import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="bg-white py-16 pt-6 px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ✦ Who We Are ✦
          </span>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Delivering <span className="text-rose-700">Happiness</span> <br />
            Through Food
          </motion.h1>

          <motion.p 
            className="text-gray-600 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            At FoodExpress, we connect you with the best restaurants in your city.
            Fresh meals, fast delivery, and a seamless ordering experience every time.
          </motion.p>

          <motion.div 
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="/menu"
              className="px-6 py-3 bg-rose-700 text-white rounded-full hover:bg-rose-800 transition"
            >
              Explore Menu
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div 
          className="relative h-[300px] lg:h-[450px] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Border Div */}
          <div className="absolute top-10 right-3 lg:right-10 w-full h-full border-2 border-rose-700 bg-rose-50 rounded-2xl"></div>
          
          {/* Image Div */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
              alt="restaurant"
              className="rounded-2xl shadow-lg object-cover h-full w-full"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutHero;
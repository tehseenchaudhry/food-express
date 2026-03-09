import React, { useState, useEffect } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

const TodaysSpecials = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const specials = [
    {
      id: 1,
      name: "Double Cheese Pizza",
      restaurant: "Pizza Heaven",
      originalPrice: 1299,
      discountedPrice: 899,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      discount: 30,
      category: "Pizza",
    },
    {
      id: 2,
      name: "Crown Crunch Burger",
      restaurant: "Burger Lab",
      originalPrice: 899,
      discountedPrice: 649,
      image:
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      discount: 28,
      category: "Burger",
    },
    {
      id: 3,
      name: "Chicken Tikka Biryani",
      restaurant: "Spice Kitchen",
      originalPrice: 549,
      discountedPrice: 399,
      image:
        "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      discount: 27,
      category: "Biryani",
    },
    {
      id: 4,
      name: "Hot Crispy Chicken (10 pcs)",
      restaurant: "Wok Express",
      originalPrice: 899,
      discountedPrice: 649,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUg5r4xTnprRDZR4vZwBYI6fC2EpYhdac4Vw&s",
      rating: 4.7,
      discount: 28,
      category: "Chicken",
    },
    {
      id: 5,
      name: "Chocolate Lava Cake",
      restaurant: "Dessert House",
      originalPrice: 499,
      discountedPrice: 349,
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
      rating: 5.0,
      discount: 30,
      category: "Desserts",
    },
    {
      id: 6,
      name: "Grilled BBQ Platter",
      restaurant: "BBQ Tonight",
      originalPrice: 1599,
      discountedPrice: 1199,
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      discount: 25,
      category: "BBQ",
    },
  ];

  return (
    <motion.section 
      className="py-20 lg:px-8 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="bg-rose-800 text-white font-semibold text-sm tracking-wide rounded-2xl py-1 px-4 uppercase inline-block mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Today's Specials
          </motion.span>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-black mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hot <span className="text-rose-800">Deals</span>
          </motion.h2>

          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Grab our most loved dishes before they run out!
          </motion.p>

          {/* Countdown Timer - Original Code */}
          <motion.div 
            className="flex justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-rose-800"
                key={timeLeft.hours}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {timeLeft.hours || 0}
              </motion.div>
              <div className="text-xs text-gray-500">Hours</div>
            </div>
            
            <motion.div 
              className="text-3xl font-bold text-rose-800"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              :
            </motion.div>
            
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-rose-800"
                key={timeLeft.minutes}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {timeLeft.minutes || 0}
              </motion.div>
              <div className="text-xs text-gray-500">Minutes</div>
            </div>
            
            <motion.div 
              className="text-3xl font-bold text-rose-800"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              :
            </motion.div>
            
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-rose-800"
                key={timeLeft.seconds}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {timeLeft.seconds || 0}
              </motion.div>
              <div className="text-xs text-gray-500">Seconds</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Specials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Discount Badge */}
                <motion.div 
                  className="absolute top-4 left-4 bg-rose-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg"
                  initial={{ x: -100 }}
                  whileInView={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 100, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.discount}% OFF
                </motion.div>

                {/* Category */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-rose-800 px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Restaurant */}
                <div className="flex items-center gap-2 text-rose-800 mb-2">
                  <div className="w-1.5 h-1.5 bg-rose-800 rounded-full"></div>
                  <span className="text-sm font-medium">{item.restaurant}</span>
                </div>

                {/* Name + Rating */}
                <div className="flex justify-between mb-4">
                  <h3 className="text-xl font-bold text-black group-hover:text-rose-800 transition-colors">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="font-bold text-gray-700">{item.rating}</span>
                  </div>
                </div>

                {/* Price + Cart */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-rose-800">
                      Rs. {item.discountedPrice}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      Rs. {item.originalPrice}
                    </span>
                  </div>

                  <motion.button 
                    className="w-12 h-12 bg-rose-800 rounded-2xl flex items-center justify-center text-white hover:bg-rose-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaShoppingCart className="text-lg" />
                  </motion.button>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-rose-800 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TodaysSpecials;
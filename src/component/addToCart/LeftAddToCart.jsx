import React from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const LeftAddToCart = ({ 
  cartItems, 
  onIncreaseQty,
  onDecreaseQty,
  onRemoveItem,
  getItemPrice
}) => {
  
  return (
    <div className="md:col-span-2 space-y-4">
      <AnimatePresence>
        {cartItems.map((item, index) => {
          
          const itemTotal = getItemPrice(item);
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ 
                opacity: 0, 
                x: -100,
                transition: { duration: 0.3 }
              }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1 
              }}
              layout
              className="bg-white rounded-xl shadow-sm p-4"
            >
              
              {/* Main Item Row */}
              <div className="flex gap-4">
                {/* Item Image */}
                <motion.div 
                  className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <img 
                    src={item.image || 'https://via.placeholder.com/100'} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Item Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-sm text-rose-800 font-semibold">
                        {item.restaurant || 'Restaurant'}
                      </p>
                      <h3 className="font-bold text-gray-800">{item.name}</h3>
                    </div>
                    
                    <motion.button 
                      onClick={() => onRemoveItem(item.id)}
                      whileHover={{ scale: 1.2, color: "#ef4444" }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 transition cursor-pointer"
                    >
                      <FaTrash />
                    </motion.button>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <motion.button 
                        onClick={() => onDecreaseQty(item.id, item.quantity || 1)}
                        whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb" }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition cursor-pointer shadow-inner"
                      >
                        <FaMinus size={12} />
                      </motion.button>
                      
                      <motion.span 
                        key={item.quantity}
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        className="font-semibold"
                      >
                        {item.quantity || 1}
                      </motion.span>
                      
                      <motion.button 
                        onClick={() => onIncreaseQty(item.id, item.quantity || 1)}
                        whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb" }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition cursor-pointer shadow-inner"
                      >
                        <FaPlus size={12} />
                      </motion.button>
                    </div>
                    
                    <motion.div 
                      className="text-right"
                      key={itemTotal}
                      initial={{ scale: 1.2, color: "#9f1239" }}
                      animate={{ scale: 1, color: "#9f1239" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="font-bold text-rose-800">
                        Rs. {itemTotal.toLocaleString()}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default LeftAddToCart;
import React from "react";
import { FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

const CheckoutRight = ({ 
  cartItems, 
  finalTotal, 
  getItemPrice, 
  getItemTotal,
  onPlaceOrder 
}) => {
  return (
    <motion.div 
      className="md:col-span-1"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="bg-white p-5 rounded-xl shadow-sm sticky top-4"
        whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        transition={{ duration: 0.2 }}
      >
        <h2 className="font-bold text-gray-800 mb-3">Order Summary</h2>

        {/* Items List */}
        <div className="max-h-60 overflow-y-auto mb-3 space-y-3 overflow-x-hidden">
          {cartItems.map((item, index) => {
            const itemPrice = getItemPrice(item);
            const itemTotal = getItemTotal(item);
            
            return (
              <motion.div 
                key={item.id} 
                className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, backgroundColor: "#f3f4f6" }}
              >
                <motion.img 
                  src={item.image || 'https://via.placeholder.com/48'} 
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <div className="flex-1">
                  <p className="font-medium text-sm text-gray-800">{item.name}</p>
                  {item.selectedSize && (
                    <p className="text-xs text-rose-800 font-semibold">
                      {item.selectedSize.name}
                    </p>
                  )}
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-xs text-gray-500">
                      Rs.{itemPrice} , qty.{item.quantity}
                    </p>
                    <motion.p 
                      className="font-bold text-rose-800 text-sm"
                      key={itemTotal}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Rs.{itemTotal}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Price Details */}
        <motion.div 
          className="border-t pt-3 space-y-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className="flex justify-between text-sm"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <span className="text-gray-600">Subtotal</span>
            <motion.span 
              className="font-medium"
              key={finalTotal}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Rs. {finalTotal.toLocaleString()}
            </motion.span>
          </motion.div>
          
          {/* Note: Delivery fee already included in AddToCart */}
          <motion.div 
            className="text-xs text-gray-400 text-right"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            *Delivery fee already included
          </motion.div>

          <motion.div 
            className="flex justify-between font-bold text-base border-t pt-2 mt-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <span>Total Amount</span>
            <motion.span 
              className="text-rose-800"
              key={finalTotal}
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Rs. {finalTotal.toLocaleString()}
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Place Order Button */}
        <motion.button
          onClick={onPlaceOrder}
          className="w-full bg-rose-800 text-white py-3 rounded-lg font-medium hover:bg-rose-900 transition-all hover:scale-105 mt-4 shadow-md cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Place Order
        </motion.button>

        {/* Security Note */}
        <motion.p 
          className="text-xs text-gray-400 text-center mt-3 flex items-center justify-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <FaLock className="text-rose-800" size={12} />
          </motion.div>
          Secure Checkout
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default CheckoutRight;
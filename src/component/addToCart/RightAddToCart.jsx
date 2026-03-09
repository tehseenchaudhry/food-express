import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const RightAddToCart = ({ finalTotal}) => {
  
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const applyPromo = () => {
    if (promoCode.toUpperCase() === "SAVE10" && !promoApplied) {
      setPromoApplied(true);
      alert("Promo applied successfully!");
    } else if (promoApplied) {
      alert("Promo already applied!"); 
    } else {
      alert("Invalid promo code");
    }
  };

  return (
    <motion.div 
      className="md:col-span-1"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="bg-white rounded-xl shadow-sm p-6 sticky top-4"
        whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        transition={{ duration: 0.2 }}
      >
        <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
        
        {/* Price Details */}
        <motion.div 
          className="space-y-3 mb-6"
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
            className="flex justify-between text-gray-600"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <span>Subtotal</span>
            <motion.span 
              className="font-semibold"
              key={finalTotal}
              initial={{ scale: 1.2, color: "#9f1239" }}
              animate={{ scale: 1, color: "#4b5563" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Rs. {finalTotal.toLocaleString()}
            </motion.span>
          </motion.div>
          
          <motion.div 
            className="flex justify-between text-gray-600"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <span>Delivery Fee</span>
            <span className="font-semibold">Rs. 99</span>
          </motion.div>

          <motion.div 
            className="border-t pt-3 flex justify-between text-lg font-bold"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <span>Total</span>
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

        {/* Promo Code Section */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Promo Code
          </label>
          <div className="flex gap-2">
            <motion.input 
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter code"
              disabled={promoApplied}
              whileFocus={{ scale: 1.02, borderColor: "#9f1239" }}
              className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-rose-800 text-sm"
            />
            
            <motion.button 
              onClick={applyPromo}
              disabled={promoApplied}
              whileHover={!promoApplied ? { scale: 1.05 } : {}}
              whileTap={!promoApplied ? { scale: 0.95 } : {}}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                promoApplied 
                  ? 'bg-rose-800 text-white cursor-not-allowed' 
                  : 'bg-gray-800 text-white hover:bg-rose-800'
              }`}
            >
              {promoApplied ? 'Applied' : 'Apply'}
            </motion.button>
          </div>
        </motion.div>

        {/* Checkout Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/checkout">
            <motion.button 
              className="w-full bg-rose-800 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 cursor-pointer transition shadow-md"
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "#9f1239",
                boxShadow: "0 20px 25px -5px rgba(159, 18, 57, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Proceed to Checkout
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <FaArrowRight size={14} />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default RightAddToCart;
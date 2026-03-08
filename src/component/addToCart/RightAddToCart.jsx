import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const RightAddToCart = ({ subtotal, deliveryFee}) => {
  
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  const applyPromo = () => {
    if (promoCode.toUpperCase() === "SAVE10" && !promoApplied) {
      setDiscount(subtotal * 0.1);
      setPromoApplied(true);
      alert("Promo applied! 10% discount");
    } else if (promoApplied) {
      alert("Promo already applied!");
    } else {
      alert("Invalid promo code");
    }
  };

  const finalTotal = total - discount;

  return (
    <div className="md:col-span-1">
      <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
        
        {/* Price Details */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span className="font-semibold">Rs. {subtotal.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between text-gray-600">
            <span>Delivery Fee</span>
            <span className="font-semibold">Rs. {deliveryFee}</span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Discount (SAVE10)</span>
              <span className="font-semibold">-Rs. {discount.toLocaleString()}</span>
            </div>
          )}
          
          <div className="border-t pt-3 flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-rose-800">Rs. {finalTotal.toLocaleString()}</span>
          </div>
        </div>

        {/* Promo Code Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Promo Code
          </label>
          <div className="flex gap-2">
            <input 
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter code"
              className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-rose-800 text-sm"
              disabled={promoApplied}
            />
            <button 
              onClick={applyPromo}
              disabled={promoApplied}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                promoApplied 
                  ? 'bg-green-500 text-white cursor-not-allowed' 
                  : 'bg-gray-800 text-white hover:bg-rose-800'
              }`}
            >
              {promoApplied ? 'Applied' : 'Apply'}
            </button>
          </div>
        </div>

        {/* Checkout Button */}
        <Link to="/checkout">
          <button className="w-full bg-rose-800 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-rose-700 cursor-pointer transition shadow-md">
            Proceed to Checkout
            <FaArrowRight size={14} />
          </button>
        </Link>

      </div>
    </div>
  );
};

export default RightAddToCart;
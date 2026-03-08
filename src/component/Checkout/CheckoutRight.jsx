import React from "react";
import { FaLock } from "react-icons/fa";

const CheckoutRight = ({ 
  cartItems, 
  subtotal, 
  getItemPrice, 
  getItemTotal,
  onPlaceOrder 
}) => {
  return (
    <div className="md:col-span-1">
      <div className="bg-white p-5 rounded-xl shadow-sm sticky top-4">
        <h2 className="font-bold text-gray-800 mb-3">Order Summary</h2>

        {/* Items List */}
        <div className="max-h-60 overflow-y-auto mb-3 space-y-3">
          {cartItems.map((item) => {
            const itemPrice = getItemPrice(item);
            const itemTotal = getItemTotal(item);
            
            return (
              <div key={item.id} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                <img 
                  src={item.image || 'https://via.placeholder.com/48'} 
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-lg"
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
                      Rs.{itemPrice} x {item.quantity}
                    </p>
                    <p className="font-bold text-rose-800 text-sm">
                      Rs.{itemTotal}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Price Details */}
          {/* Price Details - Sirf Subtotal aur Total */}
        <div className="border-t pt-3 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">Rs.{subtotal.toLocaleString()}</span>
          </div>
          
          {/* Note: Delivery fee already included in AddToCart */}
          <div className="text-xs text-gray-400 text-right">
            *Delivery fee already included
          </div>

          <div className="flex justify-between font-bold text-base border-t pt-2 mt-2">
            <span>Total Amount</span>
            <span className="text-rose-800">Rs.{subtotal.toLocaleString()}</span>
          </div>
        </div>

        {/* Place Order Button */}
        <button
          onClick={onPlaceOrder}
          className="w-full bg-rose-800 text-white py-3 rounded-lg font-medium hover:bg-rose-700 transition-all hover:scale-105 mt-4 shadow-md"
        >
          Place Order
        </button>

        {/* Security Note */}
        <p className="text-xs text-gray-400 text-center mt-3 flex items-center justify-center gap-1">
          <FaLock className="text-rose-800" size={12} />
          Secure Checkout
        </p>
      </div>
    </div>
  );
};

export default CheckoutRight;
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaTrash, FaMinus, FaPlus, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";


const AddToCart = () => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const cartItems = useSelector((state) => state.cart?.items || []);

  const handleSizeChange = (itemId, size) => {
    setSelectedSizes({
      ...selectedSizes,
      [itemId]: size
    });
  };

  const getItemPrice = (item) => {
    const selectedSize = selectedSizes[item.id] || item.sizes?.[0] || { price: item.price };
    return selectedSize.price * (item.quantity || 1);
  };

  const subtotal = cartItems.reduce((total, item) => {
    return total + getItemPrice(item);
  }, 0);

  const deliveryFee = 99;
  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="w-full min-h-screen bg-[#F7F9FA] flex flex-col items-center justify-center p-8 font-sans">
        <div className="bg-white rounded-full p-8 mb-4 shadow-lg">
          <FaShoppingBag className="text-6xl text-gray-300" />
        </div>
        <h3 className="text-2xl font-semibold text-[#2a2a2a] mb-2">Your cart is empty</h3>
        <p className="text-gray-500 mb-6">Looks like you haven't added anything yet</p>
        <Link
          to="/menu"
          className="bg-rose-800 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition shadow-md"
        >
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#F7F9FA] flex flex-col items-center py-8 lg:py-16 font-sans text-[#2a2a2a] px-4 relative overflow-hidden">
      
      {/* Main Container */}
      <div className="w-full max-w-5xl bg-white rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,112,116,0.05)] borde overflow-hidden flex flex-col lg:flex-row z-10">
        
        {/* Left Section - Cart Items */}
        <div className="w-full lg:w-[60%] p-6 md:p-10 flex flex-col bg-white">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 flex items-center gap-3">
              <FaShoppingBag className="text-rose-800" />
              Your Cart
            </h2>
            </div>
            
            <Link 
              to="/menu" 
              className="hidden md:flex items-center gap-1 text-[11px] font-bold text-gray-400 hover:text-rose-800 transition-colors uppercase tracking-widest bg-gray-50 px-4 py-2 rounded-full"
            >
              <FaAngleLeft size={14} />
              Back to menu
            </Link>
          </div>

          {/* Cart Items List */}
          <div className="flex flex-col gap-6 overflow-y-auto max-h-[50vh] pr-4 custom-scrollbar">
            {cartItems.map((item, index) => {
              const currentSize = selectedSizes[item.id] || item.sizes?.[0] || { name: "Regular", price: item.price };
              const animationDelay = index * 100;

              return (
                <div 
                  key={item.id} 
                  className="flex items-center gap-4 group pb-6 border-b border-gray-50 last:border-0 animate-stagger"
                  style={{ animationDelay: `${animationDelay}ms` }}
                >
                  {/* Image */}
                  <div className="w-20 h-24 md:w-24 md:h-28 shrink-0 bg-[#F7F3F0] rounded-2xl overflow-hidden relative shadow-sm">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col flex-1 py-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-[9px] font-bold text-rose-800 uppercase tracking-widest mb-1">
                          {item.restaurant}
                        </p>
                        <h3 className="font-bold text-sm md:text-base text-[#2a2a2a] line-clamp-1">
                          {item.name}
                        </h3>
                        
                        {/* Size Display */}
                        {item.sizes && item.sizes.length > 0 && (
                          <div className="mt-2">
                            <div className="flex flex-wrap gap-1">
                              {item.sizes.map((size) => (
                                <button
                                  key={size.name}
                                  onClick={() => handleSizeChange(item.id, size)}
                                  className={`text-[8px] font-bold px-2 py-1 rounded-full transition-all ${
                                    currentSize.name === size.name
                                      ? 'bg-rose-800 text-white'
                                      : 'bg-gray-100 text-gray-600 hover:bg-rose-100'
                                  }`}
                                >
                                  {size.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <p className="text-[10px] text-gray-500 mt-1">
                          {currentSize.name} • Qty: {item.quantity || 1}
                        </p>
                      </div>
                      <span className="font-bold text-[#2a2a2a] text-sm">
                        Rs {getItemPrice(item).toLocaleString()}
                      </span>
                    </div>

                    {/* Quantity and Remove */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2 bg-gray-50 rounded-full p-1 border border-gray-100 shadow-inner">
                        <button className="w-7 h-7 rounded-full flex items-center justify-center transition-all bg-white text-rose-800 shadow-sm hover:bg-rose-50">
                          <FaMinus size={12} />
                        </button>
                        <span className="font-bold text-xs w-4 text-center">{item.quantity || 1}</span>
                        <button className="w-7 h-7 rounded-full flex items-center justify-center transition-all bg-white text-rose-800 shadow-sm hover:bg-rose-50">
                          <FaPlus size={12} />
                        </button>
                      </div>

                      <button className="text-[10px] font-bold text-gray-400 hover:text-rose-500 uppercase tracking-widest flex items-center gap-1.5 transition-colors">
                        <FaTrash size={14} />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div className="w-full lg:w-[40%] p-6 md:p-10 bg-gradient-to-br from-gray-50 to-rose-100 border-t lg:border-t-0 lg:border-l border-gray-100 flex flex-col justify-between">
          
          <div>
            <h2 className="text-xl font-bold  text-rose-800 mb-6">Order Summary</h2>
            
            {/* Promo Code */}
            <div className="mb-8">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input 
                    placeholder="Enter code"
                    className="w-full bg-white border border-gray-200 rounded-xl py-3 px-3  text-xs focus:ring-1 focus:ring-rose-800 outline-none shadow-sm transition-all" 
                    type="text" 
                  />
                </div>
                <button className="bg-[#2a2a2a] text-white px-5 rounded-xl text-xs font-bold hover:bg-rose-800 transition-all shadow-md">
                  Apply
                </button>
              </div>
            </div>

            {/* Price Details */}
            <div className="space-y-4 text-sm bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span className="font-bold text-[#2a2a2a]">Rs {subtotal.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between text-gray-500 items-center">
                <span>Delivery Fee</span>
                <span className="font-bold text-[#2a2a2a]">Rs {deliveryFee}</span>
              </div>


              <div className="border-t border-gray-50 pt-4 flex justify-between items-end">
                <span className="font-bold text-lg">Total</span>
                <span className="font-bold text-rose-800 text-2xl">Rs. {total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Checkout Button */}
          <div>
            <Link to="/checkout">
              <button className="w-full bg-gradient-to-r from-[#2a2a2a] to-gray-800 text-white py-4 rounded-full text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:from-rose-900 hover:to-rose-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg">
                Proceed to Checkout
                <FaArrowRight />

              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
import React from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

const LeftAddToCart = ({ 
  cartItems, 
  onIncreaseQty,
  onDecreaseQty,
  onRemoveItem,
  getItemPrice
}) => {
  
  return (
    <div className="md:col-span-2 space-y-4">
      {cartItems.map((item) => {
        
        const itemTotal = getItemPrice(item);
        
        return (
          <div key={item.id} className="bg-white rounded-xl shadow-sm p-4">
            
            {/* Main Item Row */}
            <div className="flex gap-4">
              {/* Item Image */}
              <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={item.image || 'https://via.placeholder.com/100'} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Item Details */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm text-rose-800 font-semibold">
                      {item.restaurant || 'Restaurant'}
                    </p>
                    <h3 className="font-bold text-gray-800">{item.name}</h3>
                    
                  </div>
                  <button 
                    onClick={() => onRemoveItem(item.id)}
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <FaTrash />
                  </button>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-between mt-4 ">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => onDecreaseQty(item.id, item.quantity || 1)}
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
                    >
                      <FaMinus size={12} />
                    </button>
                    <span className="font-semibold">{item.quantity || 1}</span>
                    <button 
                      onClick={() => onIncreaseQty(item.id, item.quantity || 1)}
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-rose-800">
                      Rs. {itemTotal.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LeftAddToCart;
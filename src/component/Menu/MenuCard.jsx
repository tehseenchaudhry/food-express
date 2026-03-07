import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addCart } from '../../reduxToolkit/features/cartSlice';

const MenuCard = ({ item }) => {
  const dispatch = useDispatch()

  // Static for design
  const currentPrice = item.discountedPrice || item.price;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          -{item.discount}%
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Restaurant Name */}
        <p className="text-xs text-rose-800 font-semibold mb-2 tracking-wide uppercase">
          {item.restaurant}
        </p>
        <div className="flex justify-between">
          {/* Item Name */}
          <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-1">
            {item.name}
          </h3>


          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <div className="flex items-center bg-green-50 px-2 py-1 rounded-full">
              <FaStar className="text-yellow-400 text-xs" />
              <span className="font-semibold text-sm text-gray-700 ml-1">{item.rating}</span>
            </div>
          </div>
        </div>


        {/* Description */}
        <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div>
            <span className="text-xl font-bold text-gray-900">
              Rs. {currentPrice}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Add to Cart Button - Design Only */}
            <button
              onClick={() => dispatch(addCart(item))}
              className="w-10 h-10 bg-rose-800 rounded-lg flex items-center justify-center text-white transition-all shadow-md hover:shadow-lg hover:bg-rose-800 hover:scale-105 cursor-pointer">
              <FaShoppingCart className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
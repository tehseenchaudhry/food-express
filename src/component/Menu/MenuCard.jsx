import React, { useState } from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addCart } from '../../reduxToolkit/features/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MenuCard = ({ item }) => {
  const dispatch = useDispatch();
  
  // State for selected size
  const [selectedSize, setSelectedSize] = useState(
     item.sizes?.[0] || { name: "Regular", price: item.price }
  );

  // Handle size change
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  // Handle add to cart with Toast
  const handleAddToCart = () => {
    dispatch(addCart({
      ...item,
      selectedSize: selectedSize,
    }));
    
    // 🎉 Toast Notification - Added here
    toast.success(`${item.name} (${selectedSize.name}) added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Restaurant Name */}
        <p className="text-xs text-rose-800 font-semibold mb-2 tracking-wide uppercase">
          {item.restaurant}
        </p>
        
        <div className="flex justify-between">
          {/* Item Name */}
          <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-1"
           data-aos="zoom-in"
              data-aos-delay={item.id * 50 + 450}
          >
            {item.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3"
           data-aos="zoom-in"
              data-aos-delay={item.id * 50 + 450}
              >
            <div className="flex items-center bg-green-50 px-2 py-1 rounded-full">
              <FaStar className="text-yellow-400 text-xs" />
              <span className="font-semibold text-sm text-gray-700 ml-1">{item.rating}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed"
         data-aos="fade-right"
              data-aos-delay={item.id * 50 + 450}>
          {item.description}
        </p>

        {/* ===== SIZE SELECTION ===== */}
        {item.sizes && item.sizes.length > 0 && (
          <div className="mt-2 mb-4">
            <p className="text-xs text-gray-500 mb-2">Select Size:</p>
            <div className="flex flex-wrap gap-2"  data-aos="zoom-in"
              data-aos-delay={item.id * 50 + 450}>
              {item.sizes.map((size) => (
                <button
                  key={size.name}
                  onClick={() => handleSizeChange(size)}
                  className={`
                    px-3 py-1.5 text-xs font-bold rounded-full transition-all
                    ${selectedSize.name === size.name
                      ? 'bg-rose-800 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-rose-100'
                    }
                  `}
                  
                >
                  {size.name} 
                </button>
              ))}
            </div>
          </div>
        )}

       {/* SHOW SELECTED SIZE WITH PRICE  */}
        <p className="text-xs text-gray-500 mt-2 mb-3 bg-gray-50 p-2 rounded-lg b">
          <span className="font-semibold text-rose-800">{selectedSize.name}</span> • 
          Rs. {selectedSize.price} • 
          <span className="text-gray-400 ml-1">(per item)</span>
        </p>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 ">
            <div className="text-xl font-bold text-gray-900">
              Rs. {selectedSize.price}
            </div>

          <div className="flex items-center gap-2">
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-10 h-10 bg-rose-800 rounded-lg flex items-center justify-center text-white transition-all shadow-md hover:shadow-lg hover:bg-rose-700 hover:scale-105 cursor-pointer"
               data-aos="zoom-in"
              data-aos-delay={item.id * 50 + 450}
            >
              <FaShoppingCart className="text-sm" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MenuCard;

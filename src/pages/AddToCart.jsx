import React from "react";
import { useSelector } from "react-redux";
import { FaShoppingBag, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import LeftAddToCart from "../component/addToCart/LeftAddToCart";
import RightAddToCart from "../component/addToCart/RightAddToCart";

const AddToCart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // Empty cart view
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          <div className="bg-rose-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaShoppingBag className="text-4xl text-rose-800" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Cart is Empty</h2>
          <p className="text-gray-500 mb-6">Add some delicious items to your cart</p>
          <Link 
            to="/menu" 
            className="bg-rose-800 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition inline-block"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
            <FaShoppingBag className="text-rose-800" />
            My Cart ({cartItems.length})
          </h1>
          <Link 
            to="/menu" 
            className="flex items-center gap-2 text-gray-600 hover:text-rose-800 transition"
          >
            <FaArrowLeft size={14} />
            Continue Shopping
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <LeftAddToCart />
          <RightAddToCart /> 
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
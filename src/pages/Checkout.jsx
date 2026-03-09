import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { toast } from 'react-toastify';
import CheckoutLeft from "../component/Checkout/CheckoutLeft";
import CheckoutRight from "../component/Checkout/CheckoutRight";
import { clearCart } from "../reduxToolkit/features/cartSlice";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart?.items || []);

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: ""
  });

  // Get item price from selected size
  const getItemPrice = (item) => {
    if (item.selectedSize?.price) {
      return item.selectedSize.price;
    }
    return item.discountedPrice || item.price || 0;
  };

  // Get item total with quantity
  const getItemTotal = (item) => {
    const price = getItemPrice(item);
    return price * (item.quantity || 1);
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    return total + getItemTotal(item);
  }, 0);

  // const deliveryFee = 99;
  const finalTotal = subtotal + 99;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = () => {
    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.city) {
      toast.error("Please fill all fields!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }


    dispatch(clearCart())
    // Success Toast for order placed
    toast.success("Order placed successfully! 🎉", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      onClose: () => navigate("/")
    });
  };


  return (
    <div className="bg-gray-50 min-h-screen py-8">
      {/* Back to Cart Button */}
      <div className="max-w-6xl mx-auto px-4 mb-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-rose-800 transition"
        >
          <FaAngleLeft />
          Back to Cart
        </button>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {/* Left Side - Forms */}
        <CheckoutLeft 
          formData={formData}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          handleInputChange={handleInputChange}
        />

        {/* Right Side - Order Summary */}
        <CheckoutRight 
          cartItems={cartItems}
          finalTotal={finalTotal}
          getItemPrice={getItemPrice}
          getItemTotal={getItemTotal}
          onPlaceOrder={handlePlaceOrder}
        />
      </div>
    </div>
  );
};

export default Checkout;
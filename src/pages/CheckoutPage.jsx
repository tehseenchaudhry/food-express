import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft, FaLock, FaTruck, FaCreditCard, FaMapMarkerAlt, FaUser } from "react-icons/fa";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart?.items || []);

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: ""
  });

  // Calculate total
  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = item.selectedSize?.price || item.discountedPrice || item.price;
    return total + (itemPrice * (item.quantity || 1));
  }, 0);

  const deliveryFee = 99;
  const total = subtotal + deliveryFee;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.city) {
      alert("Please fill all fields");
      return;
    }
    alert("Order placed successfully!");
    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart is Empty</h2>
          <Link to="/menu" className="bg-rose-800 text-white px-6 py-2 rounded-lg">
            Go to Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Main Content */}

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-6 ">

          {/* Left Side - Forms (2/3 width) */}
          <div className="md:col-span-2 space-y-4 ">

            {/* Contact Info */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <FaUser className="text-rose-800" />
                Contact Information
              </h2>
              <div className="space-y-3 grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-800 outline-none"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-800 outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-800 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h2 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-rose-800" />
                Shipping Address
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Street Address - Full width on mobile, half on desktop */}
                <div className="flex flex-col gap-1.5 lg:col-span-2">
                  <label htmlFor="address" className="text-sm font-medium text-gray-700">
                    Street Address <span className="text-rose-800">*</span>
                  </label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    placeholder="123 Main Street, House No. 4"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-800 outline-none"
                  />
                </div>

                {/* City */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="city" className="text-sm font-medium text-gray-700">
                    City <span className="text-rose-800">*</span>
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="e.g., Karachi"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-800 outline-none"
                  />
                </div>

                {/* Postal Code / Zip Code (optional) */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="postalCode" className="text-sm font-medium text-gray-700">
                    Postal Code
                  </label>
                  <input
                    id="postalCode"
                    type="text"
                    name="postalCode"
                    placeholder="e.g., 75000"
                    value={formData.postalCode || ''}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-rose-800 outline-none"
                  />
                </div>
              </div>
            </div>


            {/* Payment Method */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h2 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaCreditCard className="text-rose-800" />
                Payment Method
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Cash on Delivery */}
                <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'cod'
                    ? 'border-rose-800 bg-rose-50 ring-1 ring-rose-800'
                    : 'border-gray-200 hover:bg-gray-50'
                  }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3 accent-rose-800 w-4 h-4"
                  />
                  <div className="flex-1">
                    <span className="font-medium text-gray-800">Cash on Delivery</span>
                  </div>
                  <FaTruck className="text-rose-800 text-xl" />
                </label>

                {/* Card Payment */}
                <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'card'
                    ? 'border-rose-800 bg-rose-50 ring-1 ring-rose-800'
                    : 'border-gray-200 hover:bg-gray-50'
                  }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3 accent-rose-800 w-4 h-4"
                  />
                  <div className="flex-1">
                    <span className="font-medium text-gray-800">Card Payment</span>
                  </div>
                  <FaCreditCard className="text-rose-800 text-xl" />
                </label>
              </div>
            </div>
          </div>

          {/* Right Side - Order Summary (1/3 width) */}
          <div className="md:col-span-1">
            <div className="bg-white p-5 rounded-xl shadow-sm sticky top-4">
              <h2 className="font-bold text-gray-800 mb-3">Order Summary</h2>

              {/* Items */}
              <div className="max-h-60 overflow-y-auto mb-3 space-y-2">
                {cartItems.map((item) => (
                 <div key={item.id} className="flex items-center gap-3 p-2  rounded-lg">
  {/* Image */}
  <img 
    src={item.image} 
    alt={item.name}
    className="w-12 h-12 object-cover rounded-lg"
  />
  
  {/* Details */}
  <div className="flex gap-6  justify-center">
    <p className="font-medium text-sm">{item.name}</p>
     <p className="font-bold text-rose-800">Rs {item.price}</p>
  </div>
  
  {/* Quantity and Price */}
  <div className="text-right">
   
  </div>
</div>
                ))}
              </div>

              {/* Price Details */}
              <div className="border-t pt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">Rs {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-medium">Rs {deliveryFee}</span>
                </div>
                <div className="flex justify-between font-bold text-base border-t pt-2 mt-2">
                  <span>Total</span>
                  <span className="text-rose-800">Rs {total.toLocaleString()}</span>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handlePlaceOrder}
                className="w-full bg-rose-800 text-white py-3 rounded-lg font-medium hover:bg-rose-700 transition mt-4"
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
        </div>
     
    </div>
  );
};

export default CheckoutPage;
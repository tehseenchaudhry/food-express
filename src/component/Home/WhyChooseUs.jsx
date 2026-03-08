import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    "Free Delivery on orders above Rs. 500",
    "30 Min Delivery Guaranteed",
    "Best Daily Offers & Deals",
    "100% Hygienic Food",
    "500+ Partner Restaurants",
    "24/7 Customer Support"
  ];

  return (
    <section className="py-14 md:py- bg-white lg:px-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="text-rose-800 font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            We Make <span className="text-rose-800">Food Delivery</span> Easy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            Experience the fastest and most reliable food delivery service in your city.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 leading-tight">
              We Deliver More Than Just Food
            </h3>

            <p className="text-gray-600 mb-6 max-w-lg">
              Your satisfaction is our priority. Here's why thousands of customers choose us every day.
            </p>
            
            <div className="space-y-3">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-rose-800 text-lg md:text-xl" />
                  <span className="text-gray-700 text-sm md:text-base">{f}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <img 
              src="https://www.mckinsey.com/~/media/mckinsey/industries/technology%20media%20and%20telecommunications/high%20tech/our%20insights/the%20changing%20market%20for%20food%20delivery/the-changing-market-1536x1536-500_standard.jpg"
              alt="Food Delivery Man"
              className="w-full h-[350px] lg:h-[430px] object-cover rounded-2xl shadow-2xl"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 lg:-left-4 -left-2 bg-rose-800 text-white px-4 py-3 rounded-xl shadow-lg">
              <p className="text-xl font-bold leading-none">30 min</p>
              <p className="text-xs">Delivery</p>
            </div>
            
            {/* Rating Badge */}
            <div className="absolute -top-4 lg:-right-4 -right-2 border border-rose-800 bg-white px-4 py-3 rounded-xl shadow-lg">
              <p className="text-xl font-bold text-rose-800 leading-none">4.8★</p>
              <p className="text-xs text-gray-600">Rating</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
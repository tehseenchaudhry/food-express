import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaShoppingBag, FaEnvelope } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden lg:px-8">
      {/* Background Image - Fixed */}
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80')",
        }}
      ></div>
      
      {/* Overlay with Blur */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="rounded-3xl p-12 md:p-16 text-white text-center">
          
          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Experience the <span className="text-rose-700">Best Food Delivery?</span>
            </h2>
            
            <p className="text-xl text-gray-200 mb-10">
              Join thousands of happy customers who get their favorite food delivered in minutes
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/menu"
                className="inline-flex items-center gap-3 px-8 py-3 bg-rose-700 text-white rounded-full font-semibold hover:bg-rose-800 transition-all duration-500 transform hover:scale-105 shadow-xl"
              >
                <FaShoppingBag />
                Order Now
                <FaArrowRight />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-rose-800 transition-all duration-500 transform hover:scale-105"
              >
                <FaEnvelope />
                Contact Us
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex justify-center gap-8 mt-12 text-sm text-gray-300">
              <span>✓ 1000+ Restaurants</span>
              <span>✓ 30 Min Delivery</span>
              <span>✓ 24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
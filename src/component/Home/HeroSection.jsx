import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaTruck, FaClock } from "react-icons/fa";

const HeroSection = () => {
  
  return (
    <section className="relative h-[70vh] lg:h-screen w-full overflow-hidden">
      {/* Video Background - Working Coverr Videos */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="video.mp4" type="video/mp4" />
      </video>

      {/* Overlay - dark for text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          
          {/* BADGE - H1 ke upar add kiya */}
          <div className="inline-flex items-center gap-2 bg-rose-800/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-rose-800/30">
            <FaStar className="text-rose-800 text-sm" />
            <span className="text-sm font-medium tracking-wider"> PREMIUM QUALITY FOOD</span>
            <FaStar className="text-rose-800 text-sm" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
            Food <span className="text-rose-800">Express</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Delicious food delivered to your doorstep in 30 minutes or less
          </p>
          
          {/* CTA Button */}
          <Link
            to=""
            className="inline-flex items-center gap-2 px-8 py-3 bg-rose-800 text-white rounded-full hover:bg-rose-900 transition-all transform hover:scale-105 shadow-lg hover:shadow-rose-800/30"
          >
            Order Now
          </Link>

          {/* Stats - optional but looks good */}
          <div className="flex justify-center gap-8 mt-12">
            <div className="flex items-center gap-2">
              <FaTruck className="text-rose-800" />
              <span className="text-sm">Free Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-rose-800" />
              <span className="text-sm">30 Min Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
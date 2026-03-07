import React from "react";
import { 
  FaSmile,
  FaArrowRight 
} from "react-icons/fa";
import { BiSearchAlt, BiFoodMenu } from "react-icons/bi";
import { MdDeliveryDining} from "react-icons/md";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    icon: <BiSearchAlt/>,
    title: "Search Food",
    description: "Browse through thousands of restaurants and dishes in your area",
  },
  {
    id: 2,
    icon: <BiFoodMenu/>,
    title: "Choose & Order",
    description: "Select your favorite items, customize, and place your order",
  },
  {
    id: 3,
    icon: <MdDeliveryDining/>,
    title: "Fast Delivery",
    description: "We deliver your food hot & fresh right to your doorstep",
  },
  {
    id: 4,
    icon: <FaSmile/>,
    title: "Enjoy & Relax",
    description: "Sit back, relax and enjoy your delicious meal", 
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 lg:px-8 bg-gradient-to-b from-white via-rose-50/30 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Header with Animation */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 bg-rose-100/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6  border border-rose-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-800 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-800"></span>
            </span>
            <span className="text-rose-800 font-semibold text-sm tracking-wider">
              EASY 4-STEP PROCESS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            How It{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-rose-800">Works</span>
              <svg className="absolute  -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q25,0 50,5 T100,5" stroke="#9f1239" strokeWidth="2" fill="none"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Get your favorite food delivered in just 4 easy steps - from searching to enjoying!
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          
          {/* Animated connecting line - only visible on large screens */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-rose-600 via-rose-800 to-rose-600 -translate-y-1/2">
          </div>

          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="group relative pt-8"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step Number - Completely Visible */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-rose-800 to-rose-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl transform rotate-12 group-hover:rotate-0 transition-all duration-500 z-20 ">
                <span className="transform -rotate-12 group-hover:rotate-0 transition-all duration-500 ">
                  {step.id}
                </span>
              </div>

              {/* Card */}
              <div className="relative bg-white rounded-3xl pt-12 pb-8 px-6 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3  overflow-hidden hover:border-b-4 hover:border-rose-800">
                
                
                {/* Icon Container with Animation */}
                  <div className="relative  w-28 h-28 mx-auto  rounded-3xl flex items-center justify-center transform   transition-all duration-500 shadow-lg group-hover:shadow-xl mb-8 ">
                    <div className="text-5xl text-rose-800 transform group-hover:scale-110 transition-transform duration-500" >{step.icon}</div>
                  </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-rose-800 transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {step.description}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link to="/menu" className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-800 to-rose-700 text-white font-semibold rounded-full hover:from-rose-900 hover:to-rose-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
            <span>Get Started Now</span>
            <FaArrowRight className="text-sm group-hover:translate-x-2 transition-transform" />
          </Link>
         
        </div>
      </div>

     
    </section>
  );
};

export default HowItWorks;
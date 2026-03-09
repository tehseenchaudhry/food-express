import React from 'react';
import { FaBullseye, FaEye, FaHandsHelping, FaRocket } from 'react-icons/fa';

const OurMission = () => {
  const items = [
    {
      icon: <FaBullseye className="text-3xl text-white" />,
      title: "Our Mission",
      description: "To deliver delicious food quickly while supporting local restaurants and creating memorable experiences for our customers.",
    },
    {
      icon: <FaEye className="text-3xl text-white" />,
      title: "Our Vision",
      description: "To become the most trusted and loved food delivery platform, connecting communities through the joy of food.",
    },
    {
      icon: <FaHandsHelping className="text-3xl text-white" />,
      title: "Our Values",
      description: "Quality, speed, reliability, and customer satisfaction are at the heart of everything we do.",
    },
    {
      icon: <FaRocket className="text-3xl text-white" />,
      title: "Our Promise",
      description: "30-minute delivery, fresh food, and hassle-free service every single time.",
    },
  ];

  return (
    <section className="py-16 bg-white lg:px-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✦ What Drives Us ✦
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Mission & <span className="text-rose-700">Vision</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every decision we make is guided by our core principles
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative rounded-xl p-6 hover:shadow-xl transition-all overflow-hidden border border-rose-800"
            >
              {/* Hover Background */}
              <div className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-rose-800 to-black group-hover:h-full transition-all duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 bg-rose-800 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
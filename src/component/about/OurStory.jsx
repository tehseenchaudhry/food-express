import React from 'react';
import { FaQuoteLeft, FaClock, FaHeart } from 'react-icons/fa';

const OurStory = () => {
  return (
    <section className="py-20 bg-white lg:px-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80" 
                  alt="Restaurant"
                  className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 "
                />
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80" 
                  alt="Chef"
                  className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 "
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80" 
                  alt="Food"
                  className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
                />
                <img 
                  src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80" 
                  alt="Delivery"
                  className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 lg:-right-6 -right-3 -bottm-3 bg-rose-800 text-white  p-2 rounded-2xl shadow-xl">
              <FaHeart className="lg:text-3xl lg:mb-2" />
              <div className="font-bold lg:text-2xl">4.8</div>
              <div className="text-sm">Customer Rating</div>
            </div>
          </div>

          {/* Right Side - Story */}
          <div>
            <span className="text-rose-800 font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Journey
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              From a Small Kitchen to <span className="text-rose-800">Your Doorstep</span>
            </h2>
            
            <div className="space-y-6 text-gray-600">
              <p className="leading-relaxed">
                <FaQuoteLeft className="inline text-rose-800 mr-2 text-xl" />
                FoodExpress started in 2020 with a simple idea: great food should be accessible to everyone. 
                What began as a small delivery service in one neighborhood has grown into a platform 
                connecting thousands of food lovers with their favorite restaurants.
              </p>
              
              <p className="leading-relaxed">
                Today, we partner with over 1000+ restaurants, from local favorites to international chains, 
                ensuring that every craving is satisfied. Our dedicated team works 24/7 to make sure your 
                food arrives hot, fresh, and on time.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                    <FaClock className="text-rose-800" />
                  </div>
                  <div>
                    <div className="font-bold text-black">24/7 Service</div>
                    <div className="text-sm">Always here for you</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                    <FaHeart className="text-rose-800" />
                  </div>
                  <div>
                    <div className="font-bold text-black">Quality First</div>
                    <div className="text-sm">Best ingredients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { FaStar, FaQuoteLeft, FaQuoteRight, FaUserCheck } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Food Blogger",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    comment: "FoodExpress has completely changed how I order food. The delivery is always on time and the food arrives hot and fresh. Their customer service is exceptional!",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Ali Raza",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    comment: "The variety of restaurants available is amazing. I've discovered so many new places through this app. Highly recommended!",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Fatima Khan",
    role: "Teacher",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    comment: "Great app with user-friendly interface. The order tracking feature is very helpful. My go-to food delivery service.",
    date: "3 days ago"
  },
  {
    id: 4,
    name: "Usman Malik",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    comment: "Their customer support is top-notch. Had an issue with an order and they resolved it within minutes. Keep up the good work!",
    date: "5 days ago"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:px-8 bg-gradient-to-b from-rose-50 via-white to-white relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-300 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 bg-rose-100 px-4 py-2 rounded-full mb-4">
            <BiMessageRoundedDetail className="text-rose-800" />
            <span className="text-rose-800 font-semibold text-sm tracking-wider">
              CUSTOMER REVIEWS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            What Our <span className="text-rose-800">Customers</span> Say
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join thousands of satisfied customers who trust us for their daily meals
          </p>
        </div>

        {/* Swiper Testimonials */}
        <div className="max-w-5xl mx-auto ">
          <div className="relative">
            
            {/* Floating Quote Icons */}
            <div className="absolute -top-6 -left-6 text-6xl text-rose-200 opacity-50 animate-float z-20">
              <FaQuoteLeft />
            </div>

            {/* Swiper Component */}
            <Swiper
              modules={[Autoplay, Pagination, Navigation, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              className="rounded-3xl"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
                    
                    {/* User Info Card */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4">
                      <div className="flex items-center gap-4">
                        {/* Image with glow effect */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-rose-400 rounded-full blur-md opacity-30 animate-pulse"></div>
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-xl relative z-10"
                          />
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-bold text-black">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-rose-800 font-medium">
                            {testimonial.role}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {testimonial.date}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Rating Strip */}
                    <div className="flex items-center justify-between mb-8 py-4 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`text-xl ${
                                i < testimonial.rating
                                  ? "text-yellow-400"
                                  : "text-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-gray-400 text-sm ml-2 ">
                          ({testimonial.rating}.0)
                        </span>
                      </div>
                      
                      {/* Verified Badge */}
                      <div className="flex items-center gap-1 text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        <FaUserCheck className="text-sm" />
                        <span className="text-xs font-semibold">Verified Customer</span>
                      </div>
                    </div>

                    {/* Comment with Animation */}
                    <div className="relative mb-8 ">
                      <div className="absolute -top-2 -left-2 text-2xl text-rose-300 opacity-30">
                        <FaQuoteLeft />
                      </div>
                      <p className="text-xl md:text-2xl text-gray-700 leading-relaxed pl-6 relative z-10">
                        "{testimonial.comment}"
                      </p>
                      <div className="absolute -bottom-2 -right-2 text-2xl text-rose-300 opacity-30">
                        <FaQuoteRight />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

             
            </Swiper>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default Testimonials;
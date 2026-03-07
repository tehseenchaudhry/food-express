import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';

import 'swiper/css/autoplay';


const categories = [
  { 
    id: 1, 
    name: 'Pizza', 
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 2, 
    name: 'Burgers', 
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 3, 
    name: 'Biryani', 
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 4, 
    name: 'Chicken Pieces', 
   image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 5, 
    name: 'BBQ', 
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 6, 
    name: 'Desserts', 
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 7, 
    name: 'Cold Drinks', 
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' 
  },
];

const Categories = () => {
  return (
    <div className="py-20 px-4  overflow-hidden">
      <div className="max-w-7xl mx-auto ">

        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Food <span className="text-rose-800">Categories</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore our delicious collection of food categories.
          </p>
        </div>

        {/* Swiper */}
        <div className="relative px-2 md:px-8 " data-aos="fade-left">
          <Swiper
            modules={[ Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            loop
            navigation={true} 
            pagination={{ clickable: true }} 
            breakpoints={{
              480: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className=" pb-16"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <Link
                  to="/menu"
                  className="group block"
                  data-aos="fade-left"
                  data-aos-delay={category.id * 80}
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500  ">
                    {/* Image */}
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition duration-700 "
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-black/40  to-rose-800/20"></div>
                    {/* Text */}
                    <div className="absolute bottom-6 left-6 text-white ">
                      <h3 className="text-3xl font-bold drop-shadow-lg">{category.name}</h3>
                      
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


      </div>
    </div>
  );
};

export default Categories;

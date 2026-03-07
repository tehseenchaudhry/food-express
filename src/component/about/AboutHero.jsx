import React from "react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="bg-white py-16 pt-6 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ✦ Who We Are ✦
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Delivering <span className="text-rose-700">Happiness</span> <br />
            Through Food
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            At FoodExpress, we connect you with the best restaurants in your city.
            Fresh meals, fast delivery, and a seamless ordering experience every time.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/menu"
              className="px-6 py-3 bg-rose-700 text-white rounded-full hover:bg-rose-800 transition"
            >
              Explore Menu
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE - Border alag, image absolute */}
        <div className="relative h-[450px] w-full">
          {/* Border Div */}
          <div className="absolute top-10 right-10 w-full h-full border-2 border-rose-700 bg-rose-50 rounded-2xl "></div>
          
          {/* Image Div - Absolute */}
          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
              alt="restaurant"
              className="rounded-2xl shadow-lg object-cover h-full w-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;
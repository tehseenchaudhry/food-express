import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setSearchItem } from '../../reduxToolkit/features/menuSlice';


const MenuHero = () => {

 const dispatch = useDispatch();

  const handleChange = (e)=>{
    dispatch(setSearchItem(e.target.value))
  }

  return (
    <section className="bg-gradient-to-br from-rose-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Badge */}
        <span className="inline-block bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          🍽️ Our Special Menu
        </span>
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What would you like to{' '}
          <span className="text-rose-800">eat today?</span>
        </h1>
        
        {/* Description */}
        <p className="text-gray-600 text-lg mb-8">
          Discover delicious dishes from top restaurants, delivered fresh to your doorstep
        </p>
        
        {/* Search Bar - Design Only */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center bg-white rounded-full shadow-lg border border-gray-100 p-1 hover:border-rose-800">
            <div className="flex-1 flex items-center pl-4">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                onChange={handleChange}
                placeholder="Search for pizza, burger, biryani..."
                className="w-full px-3 py-2 outline-none bg-transparent text-gray-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuHero;
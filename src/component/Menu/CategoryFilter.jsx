import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from '../../reduxToolkit/features/menuSlice';
import { motion } from 'framer-motion';

const categor = [
  { id: 'all', name: 'All' },
  { id: 'pizza', name: 'Pizza' },
  { id: 'burgers', name: 'Burgers' },
  { id: 'biryani', name: 'Biryani' },
  { id: 'chicken', name: 'Chicken Pieces' },  
  { id: 'bbq', name: 'BBQ' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'drinks', name: 'Cold Drinks' },
];

const CategoryFilter = () => { 
  const dispatch = useDispatch();
  const selectedcategories = useSelector((state)=>state.food.categories)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center lg:pl-30 overflow-x-auto py-4 gap-2 flex-wrap">
          {categor.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={()=>dispatch(setCategories(category.id))}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedcategories === category.id
                  ? 'bg-rose-800 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-rose-100 hover:text-rose-800'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium">{category.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryFilter;
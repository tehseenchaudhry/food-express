import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from '../../reduxToolkit/features/menuSlice';

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

const  selectedcategories = useSelector((state)=>state.food.categories)

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center lg:pl-30 overflow-x-auto py-4 gap-2 flex-wrap">
          {categor.map((category) => (
            <button
              key={category.id}
              onClick={()=>dispatch(setCategories(category.id))}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              selectedcategories === category.id
                  ? 'bg-rose-800 text-white shadow-md'  // 'all' active by default for design
                  : 'bg-gray-100 text-gray-700 hover:bg-rose-100 hover:text-rose-800'
              }`}
            >
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
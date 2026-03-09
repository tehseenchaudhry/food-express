import React from 'react';
import CategoryFilter from '../component/Menu/CategoryFilter';
import SortOptions from '../component/Menu/SortOptions';
import MenuCard from '../component/Menu/MenuCard';
import MenuHero from '../component/Menu/MenuHero';
import { useSelector } from 'react-redux';



const MenuPage = () => {
// menucards
  const menuCards = useSelector((state) => state.food.foodCards);
// 
  const serachbar = useSelector((state) => state.food.searchItem);


  const selectedcategories = useSelector((state) => state.food.categories);

 const sortby = useSelector((state) => state.food.sortType);


  const foodCards = menuCards.filter((item) =>

    item.name.toLowerCase().includes(serachbar.toLowerCase())

  );

  const filterCards =
    selectedcategories === "all" ?
      foodCards :
      foodCards.filter((items) => items.category === selectedcategories)

const finalCards = sortby ==="low"
?[...filterCards]. sort((a,b) => a.price- b.price)
: sortby === "high"
?[...filterCards].sort((a,b)=>b.price-a.price)
:filterCards;
  return (
    <main className='overflow-hidden'>
      <MenuHero />
      <div className="flex flex-col lg:flex-row justify-between">
      <CategoryFilter />

      {/* Filters Bar */}
      <div className="sticky z-10 bg-white/80 backdrop-blur-sm py-4 ">
        <div className="flex flex-wrap items-center px-4 justify-end gap-4">
          <SortOptions />
        </div>
      </div>
      </div>

      {/* Menu Items Grid */}
      <section className="py-12 bg-gray-50 min-h-screen lg:px-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {finalCards.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
};

export default MenuPage;
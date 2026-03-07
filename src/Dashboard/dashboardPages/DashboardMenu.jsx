import React, { useState } from 'react';
import { 
  FiSearch, 
  FiPlus, 
  FiEdit2, 
  FiTrash2, 
  FiEye,
  FiStar,
} from 'react-icons/fi';

const DashboardMenu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Menu Data
  const menuItems = [
    // Pizza Category
    { id: 1, name: 'Margherita Pizza', category: 'pizza', price: 899, discountedPrice: 749, stock: 45, rating: 4.8, veg: true, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400' },
    { id: 2, name: 'Pepperoni Pizza', category: 'pizza', price: 999, discountedPrice: 849, stock: 32, rating: 4.7, veg: false, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400' },
    { id: 3, name: 'BBQ Chicken Pizza', category: 'pizza', price: 1099, discountedPrice: 949, stock: 28, rating: 4.6, veg: false, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400' },
    
    // Burger Category
    { id: 4, name: 'Chicken Burger', category: 'burger', price: 549, discountedPrice: 499, stock: 56, rating: 4.5, veg: false, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400' },
    { id: 5, name: 'Zinger Burger', category: 'burger', price: 449, discountedPrice: 399, stock: 48, rating: 4.6, veg: false, image: 'https://media.istockphoto.com/id/501530895/photo/zinger-burger-5.webp?a=1&b=1&s=612x612&w=0&k=20&c=jHn7GicYrmnhySQO9iP3B4_btCzXEsrsmURuFl3i7u8=' },
    { id: 6, name: 'Beef Burger', category: 'burger', price: 599, discountedPrice: 549, stock: 34, rating: 4.7, veg: false, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400' },
    
    // Biryani Category
    { id: 7, name: 'Chicken Biryani', category: 'biryani', price: 399, discountedPrice: 349, stock: 65, rating: 4.9, veg: false, image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400' },
    { id: 8, name: 'Beef Biryani', category: 'biryani', price: 449, discountedPrice: 399, stock: 42, rating: 4.8, veg: false, image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400' },
    { id: 9, name: 'Mutton Biryani', category: 'biryani', price: 549, discountedPrice: 499, stock: 23, rating: 4.9, veg: false, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400' },
    
    // BBQ Category
    { id: 10, name: 'Chicken Tikka', category: 'bbq', price: 499, discountedPrice: 449, stock: 38, rating: 4.8, veg: false, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400' },
    { id: 11, name: 'Seekh Kebab', category: 'bbq', price: 449, discountedPrice: 399, stock: 45, rating: 4.7, veg: false, image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400' },
    { id: 12, name: 'Malai Boti', category: 'bbq', price: 549, discountedPrice: 499, stock: 29, rating: 4.9, veg: false, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400' },
    
    // Desserts Category
    { id: 13, name: 'Chocolate Brownie', category: 'dessert', price: 399, discountedPrice: 349, stock: 52, rating: 5.0, veg: true, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400' },
    { id: 14, name: 'Cheesecake', category: 'dessert', price: 449, discountedPrice: 399, stock: 27, rating: 4.9, veg: true, image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400' },
    { id: 15, name: 'Kunafa', category: 'dessert', price: 349, discountedPrice: 299, stock: 41, rating: 5.0, veg: true, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Dve-mqSPyYeDCBe0DIhGo6MMrqMBsBTtIg&s' },
    
    // Drinks Category
    { id: 16, name: 'Cold Coffee', category: 'drink', price: 199, discountedPrice: 149, stock: 78, rating: 4.4, veg: true, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400' },
    { id: 17, name: 'Mango Smoothie', category: 'drink', price: 249, discountedPrice: 199, stock: 34, rating: 4.5, veg: true, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400' },
    { id: 18, name: 'Pakola', category: 'drink', price: 99, discountedPrice: 89, stock: 92, rating: 4.8, veg: true, image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400' },
  ];

  // Categories
  const categories = ['all', 'pizza', 'burger', 'biryani', 'bbq', 'dessert', 'drink'];


  // Filter menu items
  const filteredItems = menuItems.filter(item => {
    if (categoryFilter !== 'all' && item.category !== categoryFilter) return false;
    if (searchTerm) {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return true;
  });

  const getCategoryIcon = (category) => {
    const icons = {
      pizza: '🍕',
      burger: '🍔',
      biryani: '🍛',
      bbq: '🍖',
      dessert: '🍰',
      drink: '🥤',
    };
    return icons[category] || '🍽️';
  };

  return (
    <div className="p-3 sm:p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-rose-800">Menu Management</h1>
          <p className="text-sm text-gray-500">Manage all your food items ({menuItems.length} items)</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-rose-800 text-white rounded-lg hover:bg-rose-900 transition w-full sm:w-auto">
          <FiPlus /> Add New Item
        </button>
      </div>

   

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-800/20 focus:border-rose-800"
          />
        </div>
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition ${
                categoryFilter === category
                  ? 'bg-rose-800 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile View - Cards (hidden on desktop) */}
      <div className="block lg:hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition">
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-gray-800">{item.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full">
                        {getCategoryIcon(item.category)} {item.category}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        item.veg ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {item.veg ? 'Veg' : 'Non-Veg'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiStar className="text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-rose-800">Rs. {item.discountedPrice}</span>
                  <span className="text-sm text-gray-400 line-through">Rs. {item.price}</span>
                </div>

                {/* Stock Status */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-gray-600">Stock: {item.stock}</span>
                  </div>
                  {item.stock < 30 && (
                    <span className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                      Low Stock
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  <button className="flex-1 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm hover:bg-blue-100 transition flex items-center justify-center gap-1">
                    <FiEdit2 /> Edit
                  </button>
                  <button className="flex-1 py-2 bg-rose-50 text-rose-600 rounded-lg text-sm hover:bg-rose-100 transition flex items-center justify-center gap-1">
                    <FiTrash2 /> Delete
                  </button>
                  <button className="p-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition">
                    <FiEye />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View - Table (hidden on mobile) */}
      <div className="hidden lg:block bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-rose-100 border-b border-gray-200">
              <tr className="text-left text-sm text-rose-800">
                <th className="px-4 py-3 font-medium">Image</th>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Category</th>
                <th className="px-4 py-3 font-medium">Price</th>
                <th className="px-4 py-3 font-medium">Discounted</th>
                <th className="px-4 py-3 font-medium">Stock</th>
                <th className="px-4 py-3 font-medium">Rating</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm font-medium">{item.name}</td>
                  <td className="px-4 py-3 text-sm capitalize">{item.category}</td>
                  <td className="px-4 py-3 text-sm text-gray-400 line-through">Rs. {item.price}</td>
                  <td className="px-4 py-3 text-sm font-bold text-rose-800">Rs. {item.discountedPrice}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center gap-2">
                      {item.stock}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center gap-1">
                      <FiStar className="text-yellow-400 fill-current" />
                      {item.rating}
                    </div>
                  </td>
                 
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-blue-50 rounded transition" title="Edit">
                        <FiEdit2 className="text-blue-600" />
                      </button>
                      <button className="p-1 hover:bg-red-50 rounded transition" title="Delete">
                        <FiTrash2 className="text-red-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded transition" title="View">
                        <FiEye className="text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="bg-white rounded-lg p-8 text-center">
          <p className="text-gray-500">No menu items found</p>
        </div>
      )}
    </div>
  );
};




export default DashboardMenu
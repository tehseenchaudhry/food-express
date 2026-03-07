import React, { useState } from 'react';
import { 
  FiSearch, 
  FiFilter, 
  FiEye
} from 'react-icons/fi';

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // 30 Orders Data
  const orders = [
  // Mix of all statuses
  { id: 'ORD-001', customer: 'Ahmed Khan', items: 'Margherita Pizza, Garlic Bread', amount: 'Rs. 1,299', status: 'delivered', time: '5 min ago', restaurant: 'Pizza Heaven' },
  { id: 'ORD-002', customer: 'Fatima Ali', items: 'Zinger Burger, Fries, Cold Drink', amount: 'Rs. 899', status: 'preparing', time: '12 min ago', restaurant: 'Burger Lab' },
  { id: 'ORD-003', customer: 'Usman Malik', items: 'Chicken Biryani, Raita, Salad', amount: 'Rs. 1,599', status: 'onway', time: '20 min ago', restaurant: 'Spice Kitchen' },
  { id: 'ORD-004', customer: 'Sara Ahmed', items: 'Chicken Chowmein, Spring Rolls', amount: 'Rs. 749', status: 'pending', time: '25 min ago', restaurant: 'Wok Express' },
  { id: 'ORD-005', customer: 'Bilal Hassan', items: 'Chicken Tikka, Malai Boti, Naan', amount: 'Rs. 2,499', status: 'cancelled', time: '30 min ago', restaurant: 'BBQ Tonight' },
  { id: 'ORD-006', customer: 'Zainab Malik', items: 'Chocolate Brownie, Ice Cream', amount: 'Rs. 549', status: 'delivered', time: '35 min ago', restaurant: 'Dessert House' },
  { id: 'ORD-007', customer: 'Sana Javed', items: 'Chicken Biryani', amount: 'Rs. 899', status: 'cancelled', time: '40 min ago', restaurant: 'Biryani House' },
  { id: 'ORD-008', customer: 'Hassan Ahmed', items: 'Beef Burger, Onion Rings', amount: 'Rs. 999', status: 'onway', time: '18 min ago', restaurant: 'Burger Lab' },
  { id: 'ORD-009', customer: 'Amir Khan', items: 'Chicken Biryani, Raita', amount: 'Rs. 1,299', status: 'pending', time: '10 min ago', restaurant: 'Biryani House' },
  { id: 'ORD-010', customer: 'Ali Zafar', items: 'Zinger Burger, Fries', amount: 'Rs. 749', status: 'cancelled', time: '50 min ago', restaurant: 'Burger Lab' },
  { id: 'ORD-011', customer: 'Hamza Ali', items: 'Chicken Karahi, Naan', amount: 'Rs. 1,899', status: 'delivered', time: '1 hour ago', restaurant: 'Spice Kitchen' },
  { id: 'ORD-012', customer: 'Bilal Ahmed', items: 'Chicken Biryani, Raita', amount: 'Rs. 1,299', status: 'preparing', time: '15 min ago', restaurant: 'Biryani House' },
  { id: 'ORD-013', customer: 'Faisal Qureshi', items: 'Chicken Tikka, Salad', amount: 'Rs. 1,199', status: 'onway', time: '22 min ago', restaurant: 'BBQ Tonight' },
  { id: 'ORD-014', customer: 'Farah Talib', items: 'Vegetable Pizza', amount: 'Rs. 999', status: 'pending', time: '15 min ago', restaurant: 'Pizza Heaven' },
  { id: 'ORD-015', customer: 'Hira Mani', items: 'Chicken Pizza', amount: 'Rs. 1,299', status: 'cancelled', time: '1 hour ago', restaurant: 'Pizza Heaven' },
  { id: 'ORD-016', customer: 'Ayesha Khan', items: 'Fish Fry, Salad', amount: 'Rs. 1,299', status: 'delivered', time: '2 hours ago', restaurant: 'Sea Food' },
  { id: 'ORD-017', customer: 'Sadia Mirza', items: 'Chicken Pizza, Garlic Bread', amount: 'Rs. 1,599', status: 'preparing', time: '25 min ago', restaurant: 'Pizza Heaven' },
  { id: 'ORD-018', customer: 'Rabia Anum', items: 'Chicken Chowmein, Spring Rolls', amount: 'Rs. 849', status: 'onway', time: '28 min ago', restaurant: 'Wok Express' },
  { id: 'ORD-019', customer: 'Shahid Afridi', items: 'Chicken Tikka, Naan', amount: 'Rs. 1,299', status: 'pending', time: '20 min ago', restaurant: 'BBQ Tonight' },
  { id: 'ORD-020', customer: 'Danish Taimoor', items: 'Chicken Chowmein', amount: 'Rs. 599', status: 'cancelled', time: '2 hours ago', restaurant: 'Wok Express' },
  { id: 'ORD-021', customer: 'Omar Farooq', items: 'Mutton Biryani, Raita', amount: 'Rs. 1,999', status: 'delivered', time: '3 hours ago', restaurant: 'Biryani House' },
  { id: 'ORD-022', customer: 'Tariq Jamil', items: 'Chicken Qorma, Naan', amount: 'Rs. 1,299', status: 'preparing', time: '30 min ago', restaurant: 'Spice Kitchen' },
  { id: 'ORD-023', customer: 'Imran Ashraf', items: 'Mutton Karahi, Naan', amount: 'Rs. 2,199', status: 'onway', time: '32 min ago', restaurant: 'Spice Kitchen' },
  { id: 'ORD-024', customer: 'Hina Akhtar', items: 'Chicken Sandwich, Fries', amount: 'Rs. 699', status: 'delivered', time: '4 hours ago', restaurant: 'Burger Lab' },
  { id: 'ORD-025', customer: 'Nida Yasir', items: 'Chicken Shawarma, Fries', amount: 'Rs. 749', status: 'preparing', time: '40 min ago', restaurant: 'Wok Express' },
  { id: 'ORD-026', customer: 'Raza Haider', items: 'Beef Burger, Fries', amount: 'Rs. 849', status: 'delivered', time: '5 hours ago', restaurant: 'Burger Lab' },
  { id: 'ORD-027', customer: 'Saba Qamar', items: 'Vegetable Pizza, Garlic Bread', amount: 'Rs. 1,199', status: 'delivered', time: '6 hours ago', restaurant: 'Pizza Heaven' },
  { id: 'ORD-028', customer: 'Fahad Mustafa', items: 'Chicken Tikka, Naan', amount: 'Rs. 1,449', status: 'delivered', time: '7 hours ago', restaurant: 'BBQ Tonight' },
  { id: 'ORD-029', customer: 'Mahnoor Baloch', items: 'Gulab Jamun, Kheer', amount: 'Rs. 399', status: 'delivered', time: '8 hours ago', restaurant: 'Dessert House' },
  { id: 'ORD-030', customer: 'Annie Zaidi', items: 'Chicken Burger, Fries', amount: 'Rs. 699', status: 'pending', time: '45 min ago', restaurant: 'Burger Lab' },
];

  const getStatusBadge = (status) => {
    const badges = {
      delivered: 'bg-green-100 text-green-700',
      preparing: 'bg-blue-100 text-blue-700',
      onway: 'bg-yellow-100 text-yellow-700',
      pending: 'bg-gray-100 text-gray-700',
      cancelled: 'bg-red-100 text-red-700',
    };
    return badges[status] || badges.pending;
  };

  // Stats
  const deliveredCount = orders.filter(o => o.status === 'delivered').length;
  const pendingCount = orders.filter(o => ['pending', 'preparing', 'onway'].includes(o.status)).length;
  
  const stats = [
    { label: 'Total Orders', value: orders.length.toString() },
    { label: 'Delivered', value: deliveredCount.toString() },
    { label: 'Pending', value: pendingCount.toString() },
    { label: 'Revenue', value: 'Rs. 36.5k' },
  ];

  // Filter orders by search only
  const filteredOrders = orders.filter(order => {
    if (searchTerm) {
      return order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
             order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
             order.restaurant.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return true;
  });

  return (
    <div className="p-3 sm:p-4 md:p-6 max-w-full overflow-x-hidden">
      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-rose-800">Orders</h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">Manage and track all orders ({orders.length} total)</p>
      </div>

      {/* Stats Cards - 2 columns on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="p-3 sm:p-4 rounded-lg bg-rose-900 text-center">
            <p className="text-base sm:text-xl font-bold text-white">{stat.value}</p>
            <p className="text-xs sm:text-sm text-white/90 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Search Bar - Stack on mobile, row on desktop */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
          <input
            type="text"
            placeholder="Search by ID, customer or restaurant..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-2 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:border-rose-800"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 bg-rose-800 text-white text-sm sm:text-base rounded-lg hover:bg-rose-900 transition whitespace-nowrap">
          <FiFilter className="text-sm sm:text-base" /> 
          <span>Filter</span>
        </button>
      </div>

      {/* Mobile Card View - All orders visible */}
      <div className="block lg:hidden space-y-3 mb-4">
        {filteredOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg border border-gray-200 p-3 hover:shadow-md transition">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="font-mono text-xs text-gray-500">{order.id}</p>
                <p className="font-bold text-gray-800 text-sm mt-1">{order.customer}</p>
                <p className="text-xs text-gray-600">{order.restaurant}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs whitespace-nowrap ${getStatusBadge(order.status)}`}>
                {order.status}
              </span>
            </div>
            
            <p className="text-xs text-gray-600 mb-2 line-clamp-2">{order.items}</p>
            
            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <div>
                <p className="text-xs text-gray-500">Amount</p>
                <p className="text-sm font-bold text-rose-800">{order.amount}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">{order.time}</p>
                <button className="mt-1 p-1.5 bg-rose-50 text-rose-700 rounded-lg hover:bg-rose-100 transition inline-flex">
                  <FiEye className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View - Hidden on mobile */}
      <div className="hidden lg:block bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-rose-100 border-b border-gray-200 sticky top-0">
              <tr className="text-left text-sm text-rose-800">
                <th className="px-4 py-3 font-medium">Order ID</th>
                <th className="px-4 py-3 font-medium">Customer</th>
                <th className="px-4 py-3 font-medium">Restaurant</th>
                <th className="px-4 py-3 font-medium">Items</th>
                <th className="px-4 py-3 font-medium">Amount</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Time</th>
                <th className="px-4 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-sm font-medium">{order.id}</td>
                  <td className="px-4 py-3 text-sm">{order.customer}</td>
                  <td className="px-4 py-3 text-sm">{order.restaurant}</td>
                  <td className="px-4 py-3 text-sm max-w-xs truncate">{order.items}</td>
                  <td className="px-4 py-3 text-sm font-medium">{order.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadge(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">{order.time}</td>
                  <td className="px-4 py-3">
                    <button className="p-1 hover:bg-gray-100 rounded transition">
                      <FiEye className="text-gray-500 text-sm" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
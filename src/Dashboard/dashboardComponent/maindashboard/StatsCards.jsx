import React from 'react';
import { FiDollarSign, FiShoppingBag, FiUsers, FiTruck } from 'react-icons/fi';

const StatsCards = () => {
  const stats = [
    { icon: <FiDollarSign/>, label: 'Total Revenue', value: 'Rs. 2.4M', change:'+12.5%' },
    { icon: <FiShoppingBag/>, label: 'Total Orders', value: '24,567', change: '+8.2%' },
    { icon: <FiUsers/>, label: 'Total Customers', value: '12,345', change: '+15.3%' },
    { icon: <FiTruck/>, label: 'Active Deliveries', value: '48', change: '+5.7%' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition group">
          <div className="flex items-start justify-between mb-">
            <div className="text-xl p-3 bg-rose-50 rounded-xl text-rose-700 transition">
              {stat.icon}
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-400 mt-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-1">
            <span className="text-xs text-green-600 font-medium">{stat.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
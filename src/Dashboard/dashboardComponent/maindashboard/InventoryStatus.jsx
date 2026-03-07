import React from 'react';
import { FiPackage } from 'react-icons/fi';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const InventoryStatus = () => {
  // Low Stock Chart Data
  const lowStockData = {
    labels: ['Chicken Biryani', 'Zinger Burger', 'Cold Drinks', 'Chicken Tikka', 'Garlic Bread', 'French Fries'],
    datasets: [{
      label: 'Current Stock',
      data: [8, 12, 5, 15, 7, 9],
      backgroundColor: [
        '#ef4444',
        '#f59e0b',
        '#ef4444',
        '#f59e0b',
        '#ef4444',
        '#f59e0b',
      ],
      borderRadius: 6,
    }],
  };

  const lowStockOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `Stock: ${context.raw} units`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: '#e5e7eb' },
        title: {
          display: true,
          text: 'Stock Level',
        },
      },
    },
  };

  // Low Stock Alerts with threshold info
  const lowStockAlerts = [
    { name: 'Chicken Biryani', stock: 8, unit: 'plates', threshold: 15, status: 'critical' },
    { name: 'Zinger Burger', stock: 12, unit: 'pcs', threshold: 20, status: 'warning' },
    { name: 'Cold Drinks', stock: 5, unit: 'bottles', threshold: 10, status: 'critical' },
    { name: 'Chicken Tikka', stock: 15, unit: 'skewers', threshold: 25, status: 'warning' },
    { name: 'Garlic Bread', stock: 7, unit: 'boxes', threshold: 15, status: 'critical' },
    { name: 'French Fries', stock: 9, unit: 'packs', threshold: 20, status: 'warning' },
  ];

  return (
    <div className="space-y-6">
      {/* Main Grid - Left side chart, Right side alerts */}
      <div className="">
        
        {/* Left Side - Chart (2 columns wide) */}
        <div className="w-full bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-rose-100 rounded-lg">
                <FiPackage className="text-rose-800 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Inventory Status</h3>
                <p className="text-xs text-gray-500">Current stock levels - Critical items highlighted</p>
              </div>
            </div>
          </div>
          
          {/* Chart */}
          <div className="h-72">
            <Bar data={lowStockData} options={lowStockOptions} />
          </div>
          
          {/* Threshold Line Indicator */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs border-t pt-4">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-gray-600">Critical (Below 10)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-600">Warning (Below 20)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <span className="text-gray-600">Safe (Above 20)</span>
            </div>
          </div>
        </div>

        {/* Right Side - Critical Alerts (1 column) */}
        {/* <div className="lg:col-span-1 bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              Critical Alerts
            </h3>
            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
              {lowStockAlerts.filter(item => item.status === 'critical').length} items
            </span>
          </div>
          
          <div className="space-y-3 flex-1">
            {lowStockAlerts.filter(item => item.status === 'critical').map((item, index) => (
              <div key={index} className="p-3 bg-gradient-to-r from-red-50 to-white rounded-lg border border-red-100 hover:shadow-md transition">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-1.5 w-16 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-red-500 rounded-full" 
                          style={{ width: `${(item.stock/item.threshold)*100}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500">
                        <span className="font-bold text-red-600">{item.stock}</span>/{item.threshold} {item.unit}
                      </p>
                    </div>
                  </div>
                  <button className="text-xs bg-red-600 text-white px-2.5 py-1.5 rounded-lg hover:bg-red-700 transition shadow-sm">
                    Restock
                  </button>
                </div>
              </div>
            ))}
            
            {lowStockAlerts.filter(item => item.status === 'critical').length === 0 && (
              <div className="flex flex-col items-center justify-center h-48 text-gray-500">
                <p className="text-5xl mb-3">🎉</p>
                <p className="text-sm font-medium">No critical alerts</p>
                <p className="text-xs mt-1">All inventory levels are healthy</p>
              </div>
            )}
          </div>

          {/* View All Link 
          {lowStockAlerts.filter(item => item.status === 'critical').length > 0 && (
            <button className="mt-4 text-xs text-rose-800 hover:text-rose-900 font-medium text-center border-t pt-3">
              View All Inventory →
            </button>
          )}
        </div> */}
      </div>

    
     
    </div>
  );
};

export default InventoryStatus;
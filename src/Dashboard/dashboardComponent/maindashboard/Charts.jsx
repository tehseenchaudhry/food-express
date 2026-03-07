import React from 'react';
import { FiTrendingUp } from 'react-icons/fi';
import { Line, Doughnut } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// ✅ Register chart elements
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ArcElement
);

const Charts = () => {
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Revenue 2024',
        data: [45000, 52000, 58000, 62000, 71000, 85000, 92000],
        borderColor: '#9f1239',
        backgroundColor: 'rgba(159, 18, 57, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#9f1239',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  const categoryData = {
    labels: ['Burgers', 'Pizza', 'Biryani', 'Chinese', 'BBQ', 'Desserts'],
    datasets: [
      {
        data: [30, 25, 20, 12, 8, 5],
        backgroundColor: [
          '#9f1239',
          '#ea580c',
          '#16a34a',
          '#2563eb',
          '#9333ea',
          '#eab308',
        ],
        borderWidth: 0,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { mode: 'index', intersect: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: '#e5e7eb' },
        ticks: {
          callback: (v) => v / 1000 + 'k',
        },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '65%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: { boxWidth: 12, padding: 15 },
      },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* Revenue Chart */}
      <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-gray-800">Revenue Overview</h3>
            <p className="text-xs text-gray-500 mt-1">Last 7 months</p>
          </div>
          <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded flex items-center gap-1">
            <FiTrendingUp /> +15% vs last year
          </span>
        </div>

        <div className="h-64">
          <Line data={revenueData} options={lineOptions} />
        </div>
      </div>

      {/* Category Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-2">Orders by Category</h3>
        <p className="text-xs text-gray-500 mb-4">This month</p>

        <div className="h-64 flex items-center justify-center">
          <Doughnut data={categoryData} options={doughnutOptions} />
        </div>
      </div>

    </div>
  );
};

export default Charts;
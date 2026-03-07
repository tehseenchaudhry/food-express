import React from 'react';
import { FiClock, FiDownload } from 'react-icons/fi';
import StatsCards from '../dashboardComponent/maindashboard/StatsCards';
import Charts from '../dashboardComponent/maindashboard/Charts';
import InventoryStatus from '../dashboardComponent/maindashboard/InventoryStatus';


const MainDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-rose-800">Overview</h1>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <FiClock className="text-xs" /> Last updated: {new Date().toLocaleTimeString()}
          </p>
        </div>
        <button className="px-4 py-2 bg-rose-700 text-white rounded-lg text-sm hover:bg-rose-800 flex items-center gap-2">
          <FiDownload /> Export
        </button>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Charts */}
      <Charts />

      {/* Inventory Status */}
      <InventoryStatus />
    </div>
  );
};

export default MainDashboard;
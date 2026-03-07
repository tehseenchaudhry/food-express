import React from 'react';
import { FaMotorcycle, FaUserCheck, FaShippingFast } from "react-icons/fa";

const Delivery = () => {
  const riders = [
    { id: 1, name: 'Ali Raza', zone: 'North Karachi', status: 'on-delivery', deliveries: 45, rating: 4.9 },
    { id: 2, name: 'Bilal Ahmed', zone: 'Gulshan', status: 'available', deliveries: 38, rating: 4.8 },
    { id: 3, name: 'Sana Mir', zone: 'Clifton', status: 'on-delivery', deliveries: 42, rating: 5.0 },
    { id: 4, name: 'Zain Ahmed', zone: 'Malir', status: 'offline', deliveries: 28, rating: 4.7 },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'on-delivery': 'bg-yellow-100 text-yellow-700',
      'available': 'bg-green-100 text-green-700',
      'offline': 'bg-gray-100 text-gray-700',
    };
    return colors[status] || colors.offline;
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold text-rose-800">Delivery Partners</h2>
        <button className="w-full sm:w-auto px-4 py-2 bg-rose-800 text-white rounded-lg hover:bg-rose-900">
          + Add Rider
        </button>
      </div>

      

<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-6">

  {/* Total Riders */}
  <div className="bg-white rounded-xl p-4 shadow-md flex items-center gap-4">
    <div className="w-12 h-12 flex items-center justify-center rounded-lg text-rose-800 text-3xl">
      <FaMotorcycle />
    </div>

    <div>
      <p className="text-2xl font-bold ">48</p>
      <p className="text-gray-500">Total Riders</p>
    </div>
  </div>

  {/* Active Now */}
  <div className="bg-white rounded-xl p-4 shadow-md flex items-center gap-4">
    <div className="w-12 h-12 flex items-center justify-center rounded-lg text-rose-800 text-3xl">
      <FaUserCheck />
    </div>

    <div>
      <p className="text-2xl font-bold ">32</p>
      <p className="text-gray-500">Active Now</p>
    </div>
  </div>

  {/* On Delivery */}
  <div className="bg-white rounded-xl p-4 shadow-md flex items-center gap-4">
    <div className="w-12 h-12 flex items-center justify-center rounded-lg text-rose-800 text-3xl">
      <FaShippingFast />
    </div>

    <div>
      <p className="text-2xl font-bold text-gray-800">12</p>
      <p className="text-gray-500">On Delivery</p>
    </div>
  </div>

</div>

      {/* Riders List */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden ">
        {/* Mobile View - Cards (sm se neeche) */}
        <div className="block sm:hidden divide-y divide-gray-300 ">
          {riders.map((rider) => (
            <div key={rider.id} className="p-4 ">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-800">{rider.name}</h3>
                  <p className="text-sm text-gray-500">{rider.zone}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(rider.status)}`}>
                  {rider.status}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{rider.deliveries} deliveries</span>
                <span className="flex items-center gap-1">⭐ {rider.rating}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Table (sm se upar) */}
        <div className="hidden sm:block overflow-x-auto ">
          <table className="w-full">
            <thead className="bg-rose-800">
              <tr className="text-left text-sm text-white ">
                <th className="px-6 py-3">Rider</th>
                <th className="px-6 py-3">Zone</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Deliveries</th>
                <th className="px-6 py-3">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y ">
              {riders.map((rider) => (
                <tr key={rider.id} className="hover:bg-gray-50 border border-gray-300">
                  <td className="px-6 py-4 font-medium">{rider.name}</td>
                  <td className="px-6 py-4">{rider.zone}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(rider.status)}`}>
                      {rider.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{rider.deliveries}</td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1">⭐ {rider.rating}</span>
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

export default Delivery;
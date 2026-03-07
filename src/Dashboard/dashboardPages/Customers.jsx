import React from 'react';
import {  
  FiMail, 
  FiPhone, 
  FiMapPin,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiStar
} from 'react-icons/fi';

const Customers = () => {

  // Customers Data
  const customers = [
    { 
      id: 1, 
      name: 'Ahmed Khan', 
      email: 'ahmed.khan@email.com', 
      phone: '+92 300 1234567',
      location: 'Karachi',
      totalOrders: 45,
      totalSpent: 45678,
      joined: '2024-01-15',
      lastOrder: '2024-02-20',
      status: 'active',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      reviews: 12
    },
    { 
      id: 2, 
      name: 'Fatima Ali', 
      email: 'fatima.ali@email.com', 
      phone: '+92 321 7654321',
      location: 'Lahore',
      totalOrders: 32,
      totalSpent: 32456,
      joined: '2024-02-20',
      lastOrder: '2024-02-19',
      status: 'vip',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      reviews: 8
    },
    { 
      id: 3, 
      name: 'Usman Malik', 
      email: 'usman.malik@email.com', 
      phone: '+92 333 9876543',
      location: 'Islamabad',
      totalOrders: 28,
      totalSpent: 28934,
      joined: '2024-03-10',
      lastOrder: '2024-02-18',
      status: 'active',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      reviews: 5
    },
    { 
      id: 4, 
      name: 'Sara Ahmed', 
      email: 'sara.ahmed@email.com', 
      phone: '+92 345 6789012',
      location: 'Karachi',
      totalOrders: 12,
      totalSpent: 12567,
      joined: '2024-04-05',
      lastOrder: '2024-02-15',
      status: 'new',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      reviews: 2
    },
    { 
      id: 5, 
      name: 'Bilal Hassan', 
      email: 'bilal.hassan@email.com', 
      phone: '+92 312 3456789',
      location: 'Lahore',
      totalOrders: 8,
      totalSpent: 8245,
      joined: '2024-05-18',
      lastOrder: '2024-02-10',
      status: 'new',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      reviews: 1
    },
    { 
      id: 6, 
      name: 'Zainab Malik', 
      email: 'zainab.malik@email.com', 
      phone: '+92 334 5678901',
      location: 'Rawalpindi',
      totalOrders: 3,
      totalSpent: 3450,
      joined: '2024-06-01',
      lastOrder: '2024-02-08',
      status: 'inactive',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
      reviews: 0
    },
    { 
      id: 7, 
      name: 'Hamza Ali', 
      email: 'hamza.ali@email.com', 
      phone: '+92 300 9876543',
      location: 'Karachi',
      totalOrders: 56,
      totalSpent: 67890,
      joined: '2023-12-01',
      lastOrder: '2024-02-20',
      status: 'vip',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
      reviews: 23
    },
    { 
      id: 8, 
      name: 'Ayesha Khan', 
      email: 'ayesha.khan@email.com', 
      phone: '+92 321 4567890',
      location: 'Lahore',
      totalOrders: 19,
      totalSpent: 21345,
      joined: '2024-01-25',
      lastOrder: '2024-02-17',
      status: 'active',
      avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
      reviews: 4
    }
  ];





  return (
    <div className="w-full  bg-gray-50">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h1 className="text-2xl font-bold text-rose-800">Customers</h1>
            <p className="text-sm text-gray-500">Manage all your customers ({customers.length} total)</p>
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-rose-800 text-white text-sm rounded-lg hover:bg-rose-900 transition w-full sm:w-auto">
            + Add Customer
          </button>
        </div>

        {/* Mobile View - Cards */}
        <div className="block lg:hidden">
          <div className="space-y-3">
            {customers.map((customer) => (
              <div key={customer.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-3">
                  {/* Header with Avatar */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <img 
                        src={customer.avatar} 
                        alt={customer.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-gray-800 text-base">{customer.name}</h3>
                      </div>
                    </div>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <FiEye className="text-gray-500 text-sm" />
                    </button>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-1 mt-2">
                    <div className="flex items-center gap-2 text-xs">
                      <FiMail className="text-gray-400" />
                      <span className="text-gray-600">{customer.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <FiPhone className="text-gray-400" />
                      <span className="text-gray-600">{customer.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <FiMapPin className="text-gray-400" />
                      <span className="text-gray-600">{customer.location}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mt-3 pt-2 border-t border-gray-100">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Orders</p>
                      <p className="text-sm font-bold text-gray-800">{customer.totalOrders}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Spent</p>
                      <p className="text-sm font-bold text-green-600">Rs.{customer.totalSpent}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Reviews</p>
                      <p className="text-sm font-bold text-yellow-600">{customer.reviews}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-3">
                    <button className="flex-1 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs hover:bg-blue-100 flex items-center justify-center gap-1">
                      <FiEdit2 /> Edit
                    </button>
                    <button className="flex-1 py-2 bg-rose-50 text-rose-600 rounded-lg text-xs hover:bg-rose-100 flex items-center justify-center gap-1">
                      <FiTrash2 /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View - Table */}
        <div className="hidden lg:block bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-rose-100 border-b border-red-200">
                <tr className="text-left text-sm text-rose-800">
                  <th className="px-4 py-3 font-medium">Customer</th>
                  <th className="px-4 py-3 font-medium">Contact</th>
                  <th className="px-4 py-3 font-medium">Location</th>
                  <th className="px-4 py-3 font-medium">Orders</th>
                  <th className="px-4 py-3 font-medium">Total Spent</th>
                  <th className="px-4 py-3 font-medium">Joined</th>
                  <th className="px-4 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {customers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <img src={customer.avatar} alt={customer.name} className="w-8 h-8 rounded-full object-cover" />
                        <span className="text-sm font-medium">{customer.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-xs">
                          <FiMail className="text-gray-400" /> {customer.email}
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <FiPhone className="text-gray-400" /> {customer.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">{customer.location}</td>
                    <td className="px-4 py-3 text-sm font-medium">{customer.totalOrders}</td>
                    <td className="px-4 py-3 text-sm font-bold text-green-600">Rs.{customer.totalSpent}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{customer.joined}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button className="p-1 hover:bg-blue-50 rounded">
                          <FiEdit2 className="text-blue-600 text-sm" />
                        </button>
                        <button className="p-1 hover:bg-red-50 rounded">
                          <FiTrash2 className="text-red-600 text-sm" />
                        </button>
                      </div>
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

export default Customers;
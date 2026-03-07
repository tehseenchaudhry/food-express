import React, { useState } from 'react';
import { FiUser, FiLock, FiBell, FiSave } from 'react-icons/fi';

const Settings = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>

      <div className="space-y-6">
        {/* Profile Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
            <FiUser className="text-rose-800" />
            <h3 className="font-semibold text-xl text-gray-800">Profile </h3>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
              <div>
                <input 
                  type="text" 
                  placeholder="Admin User" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg  focus:border-rose-800 outline-none" 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg  focus:border-rose-800 outline-none" 
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg  focus:border-rose-800 outline-none" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Super Admin" 
                  readOnly
                  className="w-full px-4 py-2  border border-gray-300 rounded-lg text-gray-600 focus:border-rose-800 outline-none" 
                />
              </div>
            </div>
            <button className="mt-4 px-6 py-2 bg-rose-800 text-white rounded-lg hover:bg-rose-900 transition flex items-center gap-2">
              <FiSave /> Save Profile Changes
            </button>
          </div>
        </div>

        {/* Password Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
            <FiLock className="text-rose-800" />
            <h3 className="font-semibold text-xl text-gray-800">Change Password</h3>
          </div>
          
          <div className="p-6">
            <div className="space-y-4 gap-5 grid grid-cols-1 lg:grid-cols-3">
              <div>
                <input 
                  type="password" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg  focus:border-rose-800 outline-none" 
                  placeholder="Enter current password"
                />
              </div>
              <div>
                <input 
                  type="password" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg  focus:border-rose-800 outline-none" 
                  placeholder="Enter new password"
                />
              </div>
              <div>
                <input 
                  type="password" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg  focus:border-rose-800 outline-none" 
                  placeholder="Confirm new password"
                />
              </div>

              <button className="w-max px-4 py-2 bg-rose-800 text-white rounded-lg">
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
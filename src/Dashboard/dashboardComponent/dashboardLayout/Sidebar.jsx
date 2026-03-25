import React, { useEffect, useState } from 'react';
import {
  FiHome,
  FiShoppingBag,
  FiTruck,
  FiSettings,
  FiLogOut,
  FiUsers,
  FiX,
} from "react-icons/fi";
import { MdRestaurantMenu } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem("signupData"));
      if (storedUser) {
        setUser(storedUser);
      }
    }, []);
  const handleLogout = () => {
    localStorage.removeItem("signupData");
    setUser(null);
     setSidebarOpen(false); 
    navigate("/");
  };

  const menuItems = [
    { icon: FiHome, label: "Dashboard", path: "/dashboard", end: true },
    { icon: MdRestaurantMenu, label: "Menu", path: "/dashboard/menu" },
    { icon: FiShoppingBag, label: "Orders", path: "/dashboard/orders" },
    { icon: FiUsers, label: "Customers", path: "/dashboard/customers" },
    { icon: FiTruck, label: "Delivery", path: "/dashboard/delivery" },
    { icon: FiSettings, label: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 shadow-xl transform transition-transform duration-300
          bg-rose-950 text-white
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0`}
      >
        {/* Logo & Cross (for mobile) */}
        <div className="flex items-center justify-between px-4 bg-white/10  border-b border-rose-700">
          <Link to="/" className="flex items-center ">
            <img
              src="/logo2.png"
              alt="Food Express Logo"
              className="h-12 sm:h w-auto object-contain"
            />
          </Link>
          {/* Cross icon only for mobile */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX />
          </button>
        </div>

        {/* Menu */}
        <nav className="p-3 space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.end}
               onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm font-medium
                ${isActive ? "bg-white/30 text-white" : "hover:bg-white/20"}`
              }
            >
              <item.icon className="text-xl flex-shrink-0" />
              <span className="flex-1">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-white/10  border-t border-rose-700">
          <button
            onClick={handleLogout}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-rose-100 hover:bg-white/30 w-full`}
          >
            <span className="text-sm font-medium">Logout</span>
              <FiLogOut className="text-xl flex-shrink-0" />
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
import React from "react";
import { FiMenu } from "react-icons/fi";

const Header = ({ setSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-30 bg-white border-b px-4 py-3 flex items-center gap-20">
      <button
        className="lg:hidden "
        onClick={() => setSidebarOpen(true)}
      >
        <FiMenu size={22} />
      </button>

      <h1 className="text-rose-800  font-medium">Admin Panel</h1>
    </header>
  );
};


export default Header;
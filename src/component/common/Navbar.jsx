import React, { useState, useEffect } from "react"; // NEW useEffect
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";


const navItems = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const cartCount = useSelector((state) => state.cart.count);

  // NEW: get user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("signupData"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // NEW logout
  const handleLogout = () => {
    localStorage.removeItem("signupData");
    setUser(null);
  };

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Food Express Logo" className="h-12 sm:h-14 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 text-black font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative py-2 transition-colors duration-200 ${isActive
                  ? "bg-rose-800 text-white px-3 rounded-lg"
                  : "hover:bg-rose-50 px-3 rounded-lg hover:text-rose-800"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* Mobile Cart */}
          <Link to="/addcart" className="relative flex md:hidden hover:text-rose-800">
            <FaShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="absolute -top-2 -right-2 bg-rose-800 text-white text-[10px] sm:text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
              {cartCount || 0}
            </span>
          </Link>

          {/* Desktop Cart */}
          <Link to="/addcart" className="relative hidden md:flex hover:text-rose-800">
            <FaShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-rose-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount || 0}
            </span>
          </Link>

          {/* Desktop Auth/Profile */}
          <div className="hidden md:flex items-center gap-3">

            {user ? (
              <div className="relative group">

                {/* Profile Button */}
                <div className="group flex items-center gap-1 px-3 py-2 bg-rose-100 rounded-lg text-sm font-medium text-rose-800 cursor-pointer hover:bg-rose-800 hover:text-white transition">
                  <FaUser className="w-4 h-4 " />
                  <span>Account</span>
                </div>

                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-40 bg-white border border-rose-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm text-gray-900 rounded-lg hover:bg-rose-50 hover:text-rose-800"
                  >
                    Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm rounded-lg text-gray-900 hover:bg-rose-50 hover:text-rose-800"
                  >
                    Logout
                  </button>

                </div>

              </div>
            ) : (
              <>
                {/* Login */}
                <Link
                  to="/login"
                  className="px-3 py-1 text-rose-800 font-medium border-2  border-rose-800 rounded hover:bg-rose-800 hover:text-white transition-colors text-sm lg:text-base"
                >
                  Log in
                </Link>

                {/* Signup */}
                <Link
                  to="/signup"
                  className="px-3 py-1 bg-rose-800 text-white font-medium rounded hover:bg-rose-900 transition-colors shadow-md hover:shadow-lg border-2 border-rose-800 text-sm lg:text-base"
                >
                  Sign up
                </Link>
              </>
            )}

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <FaBars className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu */}
          <div className="md:hidden fixed top-0 right-0 w-[280px] sm:w-[320px] h-full bg-white shadow-2xl z-50">

            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-bold text-lg text-gray-800">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <FaTimes className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-6">

              {/* Navigation */}
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `py-3 px-4 rounded-lg ${isActive
                        ? "bg-rose-800 text-white"
                        : "text-gray-700 hover:bg-rose-50 hover:text-rose-800"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              {/* Account Section */}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Account
                </span>

                {user ? (
                  <>
                    <div className="text-center py-2 font-medium text-gray-700">
                      {user.name}
                    </div>

                    <button
                      onClick={handleLogout}
                      className="w-full py-3 border-2 border-rose-800 text-rose-800 rounded-lg hover:bg-rose-50 transition"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setMenuOpen(false)}
                      className="w-full py-3 text-center text-rose-800 font-medium border-2 border-rose-800 rounded-lg hover:bg-rose-50"
                    >
                      Log in
                    </Link>

                    <Link
                      to="/signup"
                      onClick={() => setMenuOpen(false)}
                      className="w-full py-3 text-center bg-rose-800 text-white font-medium rounded-lg hover:bg-rose-900 border-2 border-rose-800"
                    >
                      Sign up
                    </Link>
                  </>
                )}

              </div>

            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
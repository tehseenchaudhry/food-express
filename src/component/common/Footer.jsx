import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

         {/* BRAND */}
<div className="flex flex-col justify-start">
  <Link to="/" className="flex items-center gap-3 mb-3">
    <img src="/logo.png" alt="FoodExpress" className="h-12 w-24 object-contain" />
  </Link>
  
  <p className="text-gray-600 text-sm leading-relaxed mb-4">
    Fast, fresh & reliable food delivery from your favorite restaurants.
  </p>


  {/* Trust Badges */}
  <div className="flex flex-wrap gap-2">
    <span className="px-2 py-1 bg-rose-100 text-rose-800 text-xs rounded"> Free Delivery</span>
    <span className="px-2 py-1 bg-rose-100 text-rose-800 text-xs rounded"> 30 Min Delivery</span>
    <span className="px-2 py-1 bg-rose-100 text-rose-800 text-xs rounded"> Secure Payment</span>
  </div>
</div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-black font-bold text-lg mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-rose-800"></span>
            </h3>
           <ul className="list-disc pl-5 space-y-2 text-sm marker:text-rose-800">
  {[
    ["Home", "/"],
    ["Menu", "/menu"],
    ["How It Works", "/"],
    ["About Us", "/about"],
    ["Contact", "/contact"],
  ].map(([label, path]) => (
    <li key={label}>
      <Link 
        to={path} 
        className="text-gray-600 hover:text-rose-800 transition"
      >
        {label}
      </Link>
    </li>
  ))}
</ul>
          </div>

          {/* POPULAR CATEGORIES */}
          <div>
            <h3 className="text-black font-bold text-lg mb-4 relative inline-block">
            Customer Support
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-rose-800"></span>
            </h3>
            
            <ul className="space-y-3 mt-4 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <FaPhone className="text-rose-800" /> +92 300 1234567
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-rose-800" /> support@foodexpress.com
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-rose-800 mt-0.5" />
                DHA Phase 5, Main Boulevard, Karachi, Pakistan
              </li>
            </ul>
          </div>

          {/* SOCIAL & NEWSLETTER */}
          <div>
            <h3 className="text-black font-bold text-lg mb-4 relative inline-block">
              Connect with Us
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-rose-800"></span>
            </h3>

            <div className="flex gap-3 mb-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-rose-800 text-white hover:bg-black transition transform hover:scale-110"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-gray-700 font-medium text-sm mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none text-sm"
                />
                <button className="px-4 py-2 bg-rose-800 text-white rounded-r-md hover:bg-rose-900 transition text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-200 mt-8 pt-4 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} FoodExpress. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-rose-800 transition">Privacy</Link>
            <Link to="/terms" className="hover:text-rose-800 transition">Terms</Link>
            <Link to="/sitemap" className="hover:text-rose-800 transition">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
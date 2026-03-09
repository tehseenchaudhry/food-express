import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      className="bg-white border-t border-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* BRAND */}
          <motion.div 
            className="flex flex-col justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center gap-3 mb-3">
              <motion.img 
                src="/logo.png" 
                alt="FoodExpress" 
                className="h-12 w-24 object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Fast, fresh & reliable food delivery from your favorite restaurants.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              {["Free Delivery", "30 Min Delivery", "Secure Payment"].map((badge, index) => (
                <motion.span
                  key={badge}
                  className="px-2 py-1 bg-rose-100 text-rose-800 text-xs rounded"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, backgroundColor: "#fecaca" }}
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-black font-bold text-lg mb-4 relative inline-block">
              Quick Links
              <motion.span 
                className="absolute -bottom-2 left-0 w-10 h-0.5 bg-rose-800"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              ></motion.span>
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm marker:text-rose-800">
              {[
                ["Home", "/"],
                ["Menu", "/menu"],
                ["How It Works", "/"],
                ["About Us", "/about"],
                ["Contact", "/contact"],
              ].map(([label, path], index) => (
                <motion.li 
                  key={label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={path} 
                    className="text-gray-600 hover:text-rose-800 transition"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CUSTOMER SUPPORT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-black font-bold text-lg mb-4 relative inline-block">
              Customer Support
              <motion.span 
                className="absolute -bottom-2 left-0 w-10 h-0.5 bg-rose-800"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              ></motion.span>
            </h3>
            
            <ul className="space-y-3 mt-4 text-gray-600 text-sm">
              {[
                { icon: FaPhone, text: "+92 300 1234567" },
                { icon: FaEnvelope, text: "support@foodexpress.com" },
                { icon: FaMapMarkerAlt, text: "DHA Phase 5, Main Boulevard, Karachi, Pakistan" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <item.icon className="text-rose-800" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* SOCIAL & NEWSLETTER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-black font-bold text-lg mb-4 relative inline-block">
              Connect with Us
              <motion.span 
                className="absolute -bottom-2 left-0 w-10 h-0.5 bg-rose-800"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              ></motion.span>
            </h3>

            <div className="flex gap-3 mb-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-rose-800 text-white hover:bg-black transition"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon className="text-sm" />
                </motion.a>
              ))}
            </div>

            <div>
              <h4 className="text-gray-700 font-medium text-sm mb-2">Newsletter</h4>
              <div className="flex">
                <motion.input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none text-sm"
                  whileFocus={{ scale: 1.02, borderColor: "#9f1239" }}
                />
                <motion.button 
                  className="px-4 py-2 bg-rose-800 text-white rounded-r-md hover:bg-rose-900 transition text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM BAR */}
        <motion.div 
          className="border-t border-gray-200 mt-8 pt-4 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} FoodExpress. All rights reserved.</p>
          <div className="flex gap-4">
            {["Privacy", "Terms", "Sitemap"].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={`/${item.toLowerCase()}`} className="hover:text-rose-800 transition">
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
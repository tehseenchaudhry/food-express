import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { motion } from 'framer-motion';

const TeamSection = () => {
  const team = [
    {
      id: 1,
      name: "Ali Raza",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      bio: "Former chef with a passion for technology and food",
    },
    {
      id: 2,
      name: "Fatima Khan",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      bio: "Ensuring every order reaches you on time",
    },
    {
      id: 3,
      name: "Usman Malik",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      bio: "Building technology that makes food delivery seamless",
    },
    {
      id: 4,
      name: "Sarah Ahmed",
      role: "Customer Experience Head",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      bio: "Making sure our customers are always happy",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-rose-50 via-white to-rose-100 overflow-hidden lg:px-8">

      {/* blur shapes */}
      <motion.div 
        className="absolute top-0 left-0 w-72 h-72 bg-rose-200 rounded-full blur-3xl opacity-30"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-0 right-0 w-72 h-72 bg-rose-300 rounded-full blur-3xl opacity-30"
        animate={{ 
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 relative">

        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4"
          >
            Meet The Team
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-black mb-4"
          >
            The People Behind <span className="text-rose-800">FoodExpress</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Dedicated professionals working tirelessly to bring you the best food experience
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500"
            >

              {/* Image */}
              <motion.div 
                className="relative w-32 h-32 mx-auto mb-5"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-md group-hover:border-rose-800"
                />
              </motion.div>

              {/* Info */}
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-rose-800 text-sm font-medium">{member.role}</p>
              <p className="text-gray-500 text-sm mt-2">{member.bio}</p>

              {/* Social icons */}
              <motion.div 
                className="flex justify-center gap-3 mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope].map((Icon, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.2, backgroundColor: "#f3f4f6" }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 flex items-center justify-center border border-rose-800 group-hover:bg-rose-100 text-rose-800 rounded-full transition cursor-pointer"
                  >
                    <Icon size={14} />
                  </motion.span>
                ))}
              </motion.div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
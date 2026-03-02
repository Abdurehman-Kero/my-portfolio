import React from "react";
import { motion } from "framer-motion";

const Card = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative bg-gradient-to-br from-[#1e2024] to-[#23272b] p-6 rounded-xl border border-gray-800 hover:border-designColor/50 transition-all duration-300 hover:shadow-xl hover:shadow-designColor/10"
    >
      {/* Icon Container */}
      <div className="w-16 h-16 mb-5 rounded-lg bg-gradient-to-br from-designColor/10 to-transparent flex items-center justify-center text-designColor group-hover:scale-110 transition-transform duration-300">
        {item.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-designColor transition-colors duration-300">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">{item.des}</p>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-[2px] bg-gradient-to-r from-transparent via-designColor to-transparent transition-all duration-500" />
    </motion.div>
  );
};

export default Card;

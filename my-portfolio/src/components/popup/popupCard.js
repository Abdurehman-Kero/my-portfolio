import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGift, FaCalendarAlt, FaTimes } from "react-icons/fa";

const PopupCard = ({ message, date }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Auto-hide after 8 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 left-0 right-0 mx-auto z-[100] w-[92%] sm:w-[85%] max-w-3xl"
        >
          <div className="relative bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-xl shadow-2xl border border-gray-800 overflow-hidden group">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9f55ff] via-[#ff014f] to-[#7000ff]" />

            <div className="relative z-10 px-4 py-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              {/* Left section with icon and message */}
              <div className="flex items-start sm:items-center gap-3 flex-1 w-full">
                <div className="w-8 h-8 mt-1 sm:mt-0 rounded-full bg-gradient-to-r from-[#9f55ff] to-[#7000ff] flex items-center justify-center flex-shrink-0">
                  <FaGift className="text-white text-sm" />
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-snug w-full">
                  {message}
                </p>
              </div>

              {/* Right section with date and close button */}
              <div className="flex items-center justify-end w-full sm:w-auto gap-4 flex-shrink-0">
                <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                  <FaCalendarAlt className="text-[#ff014f]" />
                  <span>{date}</span>
                </div>
                
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff014f] hover:to-[#ff6b9d] hover:bg-clip-text transition-all duration-300"
                  aria-label="Close"
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>
            </div>

            {/* Progress bar for auto-hide */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 8, ease: "linear" }}
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#9f55ff] via-[#ff014f] to-[#7000ff]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupCard;
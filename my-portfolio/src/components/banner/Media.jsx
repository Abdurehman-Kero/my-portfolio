import React from "react";
import {
  FaLinkedinIn,
  FaDownload,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Media = () => {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1n1oK-sHLQeFEa5mBJ71dm7zVpK5M6WYp/view?usp=sharing",
      "_blank",
    );
  };

  return (
    <div className="flex flex-col  xl:flex-row gap-8 lgl:gap-12 justify-between items-start lgl:items-center">
      {/* Social Links Section */}
      <div className="w-full lgl:w-auto">
        <h2 className="text-sm uppercase font-titleFont mb-4 text-gray-400 tracking-wider">
          Let's Talk
        </h2>
        <div className="flex gap-3">
          <a
            href="https://t.me/moti_kr"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-black bg-opacity-30 flex items-center justify-center text-xl text-gray-300 hover:text-designColor hover:bg-opacity-50 hover:-translate-y-1 transition-all duration-300 border border-gray-700 hover:border-designColor"
            aria-label="Telegram"
          >
            <FaTelegramPlane />
          </a>

          <a
            href="https://wa.me/+251982310974"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-black bg-opacity-30 flex items-center justify-center text-xl text-gray-300 hover:text-designColor hover:bg-opacity-50 hover:-translate-y-1 transition-all duration-300 border border-gray-700 hover:border-designColor"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.linkedin.com/in/abdukr"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-black bg-opacity-30 flex items-center justify-center text-xl text-gray-300 hover:text-designColor hover:bg-opacity-50 hover:-translate-y-1 transition-all duration-300 border border-gray-700 hover:border-designColor"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://leetcode.com/u/Abdurehman-kr/"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-black bg-opacity-30 flex items-center justify-center text-xl text-gray-300 hover:text-designColor hover:bg-opacity-50 hover:-translate-y-1 transition-all duration-300 border border-gray-700 hover:border-designColor"
            aria-label="LeetCode"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>

      {/* Download CV Section */}
      <div className="mb-4 pt-12 w-full lgl:w-auto">
        <button
          onClick={handleDownload}
          className="group relative overflow-hidden px-6 py-3 bg-gradient-to-r from-designColor/20 to-transparent border border-designColor/30 rounded-lg hover:border-designColor transition-all duration-300 hover:shadow-lg hover:shadow-designColor/20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-designColor/0 via-designColor/10 to-designColor/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

          <div className="relative flex items-center gap-3">
            <span className="text-gray-200 font-medium tracking-wide">
              Download CV
            </span>
            <span className="text-designColor group-hover:translate-y-1 transition-transform duration-300">
              <FaDownload />
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Media;

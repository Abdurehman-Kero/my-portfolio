import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-br from-[#1e2024] to-[#23272b] p-6 lgl:p-8 rounded-2xl shadow-shadowOne border border-gray-800/50 relative overflow-hidden group">
      {/* Gradient border on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-[#9f55ff] via-[#ff014f] to-[#7000ff] rounded-2xl blur-md" />
        <div className="absolute inset-[1px] bg-gradient-to-br from-[#1e2024] to-[#23272b] rounded-2xl" />
      </div>

      <div className="relative z-10">
        {/* Profile Image with Gradient Glow */}
        <div className="relative w-full h-64 mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-[#9f55ff] to-[#7000ff] rounded-lg blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          <img
            className="w-full h-full object-cover rounded-lg border-2 border-transparent group-hover:border-[#ff014f] transition-all duration-300 relative"
            src={contactImg}
            alt="contactImg"
          />

          {/* Decorative corner accents */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#ff014f] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#ff014f] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Profile Info */}
        <div className="flex flex-col gap-3 mb-6">
          <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ff014f] group-hover:to-[#ff6b9d] group-hover:bg-clip-text transition-all duration-300">
            Abdurehman Kero
          </h3>
          <p className="text-lg font-normal text-[#ff014f]">
            MERN Stack Developer
          </p>
          <p className="text-base text-gray-400 leading-relaxed">
            I design experiences that are both functional and exciting, making
            every interaction feel smooth and memorable.
          </p>
        </div>

        {/* Contact Details with Icons */}
        <div className="space-y-4 mb-6">
          {/* Location */}
          <div className="flex items-center gap-3 group/item">
            <div className="w-10 h-10 bg-[#141518] rounded-lg flex items-center justify-center group-hover/item:bg-gradient-to-r group-hover/item:from-[#9f55ff] group-hover/item:to-[#7000ff] transition-all duration-300">
              <FaMapMarkerAlt className="text-[#ff014f] group-hover/item:text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Location</p>
              <p className="text-sm text-gray-300">Addis Ababa, Ethiopia</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 group/item">
            <div className="w-10 h-10 bg-[#141518] rounded-lg flex items-center justify-center group-hover/item:bg-gradient-to-r group-hover/item:from-[#9f55ff] group-hover/item:to-[#7000ff] transition-all duration-300">
              <FaPhoneAlt className="text-[#ff014f] group-hover/item:text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <p className="text-sm text-gray-300">+251 982 310 974</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 group/item">
            <div className="w-10 h-10 bg-[#141518] rounded-lg flex items-center justify-center group-hover/item:bg-gradient-to-r group-hover/item:from-[#9f55ff] group-hover/item:to-[#7000ff] transition-all duration-300">
              <FaEnvelope className="text-[#ff014f] group-hover/item:text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm text-gray-300">keroabdurehman@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Social Connect Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#ff014f] to-[#ff6b9d]" />
            <h2 className="text-base uppercase font-titleFont text-gray-300 tracking-wide">
              Let's Connect
            </h2>
          </div>

          <div className="flex gap-3">
            {/* Telegram */}
            <a
              href="https://t.me/moti_kr"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-[#141518] flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-[#9f55ff] hover:to-[#7000ff] hover:text-white transition-all duration-300 border border-gray-800 hover:border-transparent group/social"
            >
              <FaTelegramPlane className="text-xl" />
              <span className="absolute -top-8 scale-0 group-hover/social:scale-100 transition-transform bg-[#ff014f] text-white text-xs px-2 py-1 rounded">
                Telegram
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/+251982310974"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-[#141518] flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-[#ff014f] hover:to-[#ff6b9d] hover:text-white transition-all duration-300 border border-gray-800 hover:border-transparent group/social"
            >
              <FaWhatsapp className="text-xl" />
              <span className="absolute -top-8 scale-0 group-hover/social:scale-100 transition-transform bg-[#ff014f] text-white text-xs px-2 py-1 rounded">
                WhatsApp
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/abdukr"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-[#141518] flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-[#9f55ff] hover:to-[#7000ff] hover:text-white transition-all duration-300 border border-gray-800 hover:border-transparent group/social"
            >
              <FaLinkedinIn className="text-xl" />
              <span className="absolute -top-8 scale-0 group-hover/social:scale-100 transition-transform bg-[#ff014f] text-white text-xs px-2 py-1 rounded">
                LinkedIn
              </span>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/Abdurehman-kr/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-[#141518] flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-[#ff014f] hover:to-[#ff6b9d] hover:text-white transition-all duration-300 border border-gray-800 hover:border-transparent group/social"
            >
              <SiLeetcode className="text-xl" />
              <span className="absolute -top-8 scale-0 group-hover/social:scale-100 transition-transform bg-[#ff014f] text-white text-xs px-2 py-1 rounded">
                LeetCode
              </span>
            </a>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-16 h-[2px] bg-gradient-to-r from-transparent via-[#ff014f] to-transparent transition-all duration-500" />
      </div>
    </div>
  );
};

export default ContactLeft;

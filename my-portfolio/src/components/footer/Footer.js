import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="w-full py-20 border-t-[1px] border-t-gray-800 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-[#9f55ff]/10 to-[#7000ff]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-[#ff014f]/10 to-[#ff6b9d]/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-screen-xl mx-auto px-4">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Section - Social */}
          <div className="flex flex-col items-center md:items-start gap-6">
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://t.me/moti_kr"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[#141518] flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-[#9f55ff] hover:to-[#7000ff] hover:text-white transition-all duration-300 border border-gray-800 hover:border-transparent"
              >
                <FaTelegramPlane className="text-xl" />
              </a>

              <a
                href="https://wa.me/+251982310974"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[#141518] flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-[#ff014f] hover:to-[#ff6b9d] hover:text-white transition-all duration-300 border border-gray-800 hover:border-transparent"
              >
                <FaWhatsapp className="text-xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/abdukr"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[#141518] flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-[#9f55ff] hover:to-[#7000ff] hover:text-white transition-all duration-300 border border-gray-800 hover:border-transparent"
              >
                <FaLinkedinIn className="text-xl" />
              </a>

              <a
                href="https://leetcode.com/u/Abdurehman-kr/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-[#141518] flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-[#ff014f] hover:to-[#ff6b9d] hover:text-white transition-all duration-300 border border-gray-800 hover:border-transparent"
              >
                <SiLeetcode className="text-xl" />
              </a>
            </div>
          </div>

          {/* Right Section - Quick Links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <ul className="flex flex-wrap justify-center md:justify-end gap-6">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff014f] hover:to-[#ff6b9d] hover:bg-clip-text transition-all duration-300 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="features"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-[#9f55ff] hover:to-[#7000ff] hover:bg-clip-text transition-all duration-300 cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff014f] hover:to-[#ff6b9d] hover:bg-clip-text transition-all duration-300 cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="resume"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-[#9f55ff] hover:to-[#7000ff] hover:bg-clip-text transition-all duration-300 cursor-pointer"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff014f] hover:to-[#ff6b9d] hover:bg-clip-text transition-all duration-300 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Admin Link */}
            <a
              href="/admin"
              className="text-xs text-gray-600 hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff014f] hover:to-[#ff6b9d] hover:bg-clip-text transition-all duration-300"
            >
              ⚙️ Admin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

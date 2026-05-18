import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiSun, FiMoon } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { navLinksdata } from "../../constants";
import { SiLeetcode } from "react-icons/si";
import PopUp from "../popup/popup";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    setIsLight(!isLight);
    document.body.classList.toggle('light-theme');
  };

  return (
    <div className="sticky top-0 z-50">
      <PopUp />
      <div className="w-full h-22 py-2 bg-bodyColor/90 backdrop-blur-lg mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 relative">
        <div>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {/* Logo or home link if needed */}
          </Link>
        </div>

        <div>
          <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
            {navLinksdata.map(({ _id, title, link }) => (
              <li key={_id}>
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="relative px-2 py-1 text-lightText hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff014f] hover:to-[#ff6b9d] hover:bg-clip-text transition-all duration-300 cursor-pointer"
                  activeStyle={{
                    background: "linear-gradient(90deg, #ff014f, #ff6b9d)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  {title}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#ff014f] to-[#ff6b9d] group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggler */}
          <span
            onClick={toggleTheme}
            className="text-xl w-10 h-10 inline-flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-800 transition-all duration-300 ml-4 md:ml-8 theme-toggler"
            style={{ color: isLight ? "#c4cfde" : "#ff014f" }}
            title="Toggle Light/Dark Mode"
          >
            {isLight ? <FiMoon /> : <FiSun />}
          </span>

          {/* Mobile Menu Button */}
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-[#ff014f] cursor-pointer hover:bg-gradient-to-r hover:from-[#ff014f] hover:to-[#ff6b9d] hover:text-white transition-all duration-300 ml-2"
          >
            <FiMenu />
          </span>

          {/* Mobile Menu */}
          {showMenu && (
            <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-[#212428] p-4 scrollbar-hide border-r border-gray-800">
              <div className="flex flex-col gap-8 py-2 relative">
                {/* Profile Section */}
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-[#ff014f] to-[#ff6b9d] bg-clip-text text-transparent">
                    Abdurehman Kero
                  </h2>
                  <p className="text-sm text-gray-400 mt-2">
                    I design experiences that are both functional and exciting,
                    making every interaction feel smooth and memorable.
                  </p>
                </div>

                {/* Mobile Navigation Links */}
                <ul className="flex flex-col gap-4">
                  {navLinksdata.map((item) => (
                    <li
                      key={item._id}
                      className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff014f] hover:to-[#ff6b9d] hover:bg-clip-text transition-all duration-300"
                    >
                      <Link
                        onClick={() => setShowMenu(false)}
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Social Connect Section */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-gradient-to-r from-[#ff014f] to-[#ff6b9d]" />
                    <h2 className="text-base uppercase font-titleFont text-gray-300">
                      Let's Connect
                    </h2>
                  </div>

                  <div className="flex gap-3">
                    {/* Telegram */}
                    <a
                      href="https://t.me/moti_kr"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-[#141518] flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-[#ff014f] hover:to-[#ff6b9d] hover:text-white transition-all duration-300 border border-gray-800 hover:border-transparent"
                    >
                      <FaTelegramPlane />
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/+251982310974"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-[#141518] flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-[#ff014f] hover:to-[#ff6b9d] hover:text-white transition-all duration-300 border border-gray-800 hover:border-transparent"
                    >
                      <FaWhatsapp />
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/abdukr"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-[#141518] flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-[#ff014f] hover:to-[#ff6b9d] hover:text-white transition-all duration-300 border border-gray-800 hover:border-transparent"
                    >
                      <FaLinkedinIn />
                    </a>

                    {/* LeetCode */}
                    <a
                      href="https://leetcode.com/u/Abdurehman-kr/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-[#141518] flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-[#ff014f] hover:to-[#ff6b9d] hover:text-white transition-all duration-300 border border-gray-800 hover:border-transparent"
                    >
                      <SiLeetcode />
                    </a>
                  </div>
                </div>

                {/* Close Button */}
                <span
                  onClick={() => setShowMenu(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff014f] hover:to-[#ff6b9d] hover:bg-clip-text transition-all duration-300 text-2xl cursor-pointer"
                >
                  <MdClose />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

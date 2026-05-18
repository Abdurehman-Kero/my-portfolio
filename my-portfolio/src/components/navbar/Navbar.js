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
            <div className="fixed inset-0 z-[100] bg-bodyColor/95 backdrop-blur-xl p-6 sm:p-10 scrollbar-hide flex flex-col justify-center border-l border-gray-800 shadow-2xl transition-all duration-300">
              
              {/* Close Button */}
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#ff014f] transition-all duration-300 text-2xl cursor-pointer shadow-lg"
              >
                <MdClose />
              </span>

              <div className="flex flex-col gap-10 max-w-sm mx-auto w-full">
                {/* Profile Section */}
                <div className="text-center">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-[#9f55ff] via-[#ff014f] to-[#ff6b9d] bg-clip-text text-transparent mb-3">
                    Abdurehman Kero
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed px-4">
                    I design experiences that are both functional and exciting,
                    making every interaction feel smooth and memorable.
                  </p>
                </div>

                {/* Mobile Navigation Links */}
                <ul className="flex flex-col gap-5 text-center">
                  {navLinksdata.map((item) => (
                    <li key={item._id} className="group">
                      <Link
                        onClick={() => setShowMenu(false)}
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-xl font-medium text-gray-300 tracking-wide cursor-pointer group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ff014f] group-hover:to-[#ff6b9d] group-hover:bg-clip-text transition-all duration-300"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Social Connect Section */}
                <div className="flex flex-col items-center gap-5 mt-4">
                  <h2 className="text-sm uppercase tracking-widest font-titleFont text-gray-500">
                    Let's Connect
                  </h2>
                  <div className="flex gap-4">
                    <a
                      href="https://t.me/moti_kr"
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-900/80 flex items-center justify-center text-gray-400 hover:bg-[#ff014f] hover:text-white hover:-translate-y-1 transition-all duration-300 border border-gray-800"
                    >
                      <FaTelegramPlane size={20} />
                    </a>
                    <a
                      href="https://wa.me/+251982310974"
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-900/80 flex items-center justify-center text-gray-400 hover:bg-[#ff014f] hover:text-white hover:-translate-y-1 transition-all duration-300 border border-gray-800"
                    >
                      <FaWhatsapp size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/abdukr"
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-900/80 flex items-center justify-center text-gray-400 hover:bg-[#ff014f] hover:text-white hover:-translate-y-1 transition-all duration-300 border border-gray-800"
                    >
                      <FaLinkedinIn size={20} />
                    </a>
                    <a
                      href="https://leetcode.com/u/Abdurehman-kr/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-900/80 flex items-center justify-center text-gray-400 hover:bg-[#ff014f] hover:text-white hover:-translate-y-1 transition-all duration-300 border border-gray-800"
                    >
                      <SiLeetcode size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

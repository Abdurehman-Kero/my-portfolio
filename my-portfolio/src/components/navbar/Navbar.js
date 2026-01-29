import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import { navLinksdata } from "../../constants";
import { SiLeetcode } from "react-icons/si";
import PopUp from "../popup/popup";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="sticky top-0 z-50">
      <PopUp />
      <div className="w-full h-22 py-2 bg-bodyColor/90 backdrop-blur-lg mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
        <div>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >    
          </Link>
        </div>
        <div>
          <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="text-base font-normal text-lightText tracking-wide cursor-pointer hover:text-designColor on duration-300"
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
          >
            <FiMenu />
          </span>
          {showMenu && (
            <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-[#212428] p-4 scrollbar-hide">
              <div className="flex flex-col gap-8 py-2 relative">
                <div>
                  
                  <p className="text-sm text-gray-400 mt-2">
                    I design experiences that are both functional and exciting,
                    making every interaction feel smooth and memorable.
                  </p>
                </div>
                <ul className="flex flex-col gap-4">
                  {navLinksdata.map((item) => (
                    <li
                      key={item._id}
                      className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
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
                <div className="flex flex-col gap-4">
                  <h2 className="text-base uppercase font-titleFont mb-4">
                    Let's Connect
                  </h2>
                  <div className="flex gap-4">
                    <span className="bannerIcon">
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaInstagram />
                      </a>
                    </span>
                    <span className="bannerIcon">
                      <a href="https://x.com/" target="_blank" rel="noreferrer">
                        <FaTwitter />
                      </a>
                    </span>
                    <span className="bannerIcon">
                      <a
                        href="https://www.linkedin.com/in/abdukr"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedinIn />
                      </a>
                    </span>
                    <span className="bannerIcon">
                      <a
                        href="https://leetcode.com/Fraol27/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <SiLeetcode />
                      </a>
                    </span>
                  </div>
                </div>
                <span
                  onClick={() => setShowMenu(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
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

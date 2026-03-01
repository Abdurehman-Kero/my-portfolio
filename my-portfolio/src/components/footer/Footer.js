import React from "react";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-scroll";
// import { navLinksdata } from "../../constants";
   import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black flex flex-col md:flex-row justify-between gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <div className=""></div>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://t.me/moti_kr" target="_blank" rel="noreferrer">
              <FaTelegramPlane />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://wa.me/+251982310974"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
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
              href="https://leetcode.com/u/Abdurehman-kr/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLeetcode />
            </a>
          </span>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex gap-16 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                About
                <div className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </span>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="features"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Services
                <div className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </span>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Portfolio
                <div className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </span>
            </Link>
          </li>
          {/* <li>
            <Link
              activeClass="active"
              to="testimonial"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Testimonial
                <div className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </span>
            </Link>
          </li> */}
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Contact
                <div className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </span>
            </Link>
          </li>
          {/* Hidden admin link - click 5 times on logo or something */}
          <div
            onClick={() => {
              let count = localStorage.getItem("adminClick") || 0;
              count++;
              localStorage.setItem("adminClick", count);
              if (count >= 5) {
                window.location.href = "/admin";
                localStorage.setItem("adminClick", 0);
              }
            }}
          >
            {/* Your logo or element here */}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

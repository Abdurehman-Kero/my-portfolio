import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedinIn, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Media = () => {
  const handleDownload = () => {
    window.location.href =
      "https://drive.google.com/file/d/1n1oK-sHLQeFEa5mBJ71dm7zVpK5M6WYp/view?usp=sharing";
  };
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Let's Connect
        </h2>
        <div className="flex gap-4">
       
<span className="bannerIcon">
  <a
    href="https://t.me/moti_kr"
    target="_blank"
    rel="noreferrer"
  >
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
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Here’s My Story in a PDF
        </h2>
        <button
          className="
              border-2 border-rounded border-designColor h-16 bg-black bg-opacity-25 
              text-gray-200 text-xl inline-flex items-center justify-center rounded-md 
              shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all 
              hover:text-designColor cursor-pointer duration-300 p-4 space-x-2"
          onClick={handleDownload}
        >
          <span>Download CV</span>
          <span className="items-center">
            <FaDownload />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Media
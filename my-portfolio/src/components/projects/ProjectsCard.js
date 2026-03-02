import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, link1, link2, onImageClick }) => {
  // Default click handler if onImageClick prop is not provided
  const handleImageClick = () => {
    if (onImageClick) {
      onImageClick();
    } else if (link2) {
      window.open(link2, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-all duration-500 relative overflow-hidden">
      {/* Gradient border effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-[#9f55ff] via-[#ff014f] to-[#7000ff] rounded-lg blur-md" />
        <div className="absolute inset-[1px] bg-gradient-to-r from-bodyColor to-[#202327] rounded-lg" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Clickable Image Section */}
        <div
          className="w-full h-[80%] overflow-hidden rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-[#9f55ff] group-hover:to-[#7000ff] cursor-pointer group/image relative"
          onClick={handleImageClick}
          onKeyDown={(e) => e.key === "Enter" && handleImageClick()}
          role="button"
          tabIndex={0}
          aria-label={`View live demo of ${title}`}
        >
          {/* Image with hover effect */}
          <img
            className="w-full h-60 object-cover group-hover:scale-110 duration-500"
            src={src}
            alt={title}
          />

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#9f55ff]/80 to-[#7000ff]/80 opacity-0 group-hover:opacity-80 transition-all duration-500 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-semibold transform translate-y-4 group-hover:translate-y-0">
              View Live Demo →
            </div>
          </div>
        </div>

        <div className="w-full mt-5 flex flex-col gap-6">
          <div>
            <div className="flex items-center justify-between">
              {/* Title with gradient */}
              <h3 className="text-base uppercase bg-gradient-to-r from-[#ff014f] to-[#ff6b9d] bg-clip-text text-transparent font-normal">
                {title}
              </h3>
              <div className="flex gap-2">
                {/* GitHub Link */}
                <a
                  href={link1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:bg-gradient-to-r hover:from-[#9f55ff] hover:to-[#7000ff] hover:text-white duration-300 cursor-pointer hover:scale-110 transition-all border border-gray-800 hover:border-transparent"
                  aria-label={`View ${title} on GitHub`}
                >
                  <BsGithub />
                </a>

                {/* Live Demo Link */}
                <a
                  href={link2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:bg-gradient-to-r hover:from-[#ff014f] hover:to-[#ff6b9d] hover:text-white duration-300 cursor-pointer hover:scale-110 transition-all border border-gray-800 hover:border-transparent"
                  aria-label={`View live demo of ${title}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGlobe />
                </a>
              </div>
            </div>
            {/* Description */}
            <p className="text-sm tracking-wide mt-3 text-gray-400 group-hover:text-gray-300 duration-300">
              {des}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;

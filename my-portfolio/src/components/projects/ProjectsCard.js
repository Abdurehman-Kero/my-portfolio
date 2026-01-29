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
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000">
      {/* Clickable Image Section */}
      <div
        className="w-full h-[80%] overflow-hidden rounded-lg border-2 border-designColor cursor-pointer group relative"
        onClick={handleImageClick}
        onKeyDown={(e) => e.key === "Enter" && handleImageClick()}
        role="button"
        tabIndex={0}
        aria-label={`View live demo of ${title}`}
      >
        {/* Image with hover effect */}
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300"
          src={src}
          alt={title}
        />

        {/* Overlay effect on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-semibold">
            View Live Demo →
          </div>
        </div>
      </div>

      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              {/* GitHub Link */}
              <a
                href={link1}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer hover:scale-110 transition-transform"
                aria-label={`View ${title} on GitHub`}
              >
                <BsGithub />
              </a>

              {/* Live Demo Link */}
              <a
                href={link2}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer hover:scale-110 transition-transform"
                aria-label={`View live demo of ${title}`}
                onClick={(e) => e.stopPropagation()} // Prevent triggering image click
              >
                <FaGlobe />
              </a>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;

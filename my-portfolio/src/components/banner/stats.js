import React, { useRef, useEffect, useState } from "react";
import { FaCalendarAlt, FaRocket, FaCogs, FaCode } from "react-icons/fa";
import nextLogo from "../../assets/images/nextLogo.png";
import nestLogo from "../../assets/images/nestLogo.png";
import pytorchLogo from "../../assets/images/pytorchLogo.png";
import tensorFlowLogo from "../../assets/images/tensorFlowLogo.png";

const Sidebar = () => {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  // Stats data
  const stats = [
    { number: "3", label: "Years of experience", icon: <FaCalendarAlt /> },
    { number: "15", label: "Projects completed", icon: <FaRocket /> },
    { number: "14", label: "Technologies Mastered", icon: <FaCogs /> },
    { number: "450", label: "Code commits", icon: <FaCode /> },
  ];

  // Full tech stack
  const techStack = [
    {
      src: "https://img.icons8.com/?size=100&id=122637&format=png&color=d4af37",
      name: "React",
    },
    { src: nextLogo, name: "Next.js" },
    {
      src: "https://img.icons8.com/?size=100&id=23027&format=png&color=d4af37",
      name: "HTML",
    },
    {
      src: "https://img.icons8.com/?size=100&id=42769&format=png&color=d4af37",
      name: "JavaScript",
    },
    {
      src: "https://img.icons8.com/?size=100&id=FQlr_bFSqEdG&format=png&color=d4af37",
      name: "Node.js",
    },
    {
      src: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=d4af37",
      name: "Express",
    },
    { src: nestLogo, name: "NestJS" },
    {
      src: "https://img.icons8.com/?size=100&id=39858&format=png&color=d4af37",
      name: "MySQL",
    },
    {
      src: "https://img.icons8.com/?size=100&id=25010&format=png&color=d4af37",
      name: "PostgreSQL",
    },
    {
      src: "https://img.icons8.com/?size=100&id=OdTjgPoHJeaK&format=png&color=d4af37",
      name: "MongoDB",
    },
    {
      src: "https://img.icons8.com/?size=100&id=12584&format=png&color=d4af37",
      name: "Python",
    },
    { src: tensorFlowLogo, name: "TensorFlow" },
    { src: pytorchLogo, name: "PyTorch" },
    {
      src: "https://img.icons8.com/?size=100&id=20909&format=png&color=d4af37",
      name: "Trello",
    },
  ];

  // Duplicate for seamless scroll
  const duplicatedStack = [...techStack, ...techStack];

  // Auto-scroll animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      if (!isPaused) {
        position += speed;

        if (position >= track.scrollWidth / 2) {
          position = 0;
        }

        track.style.transform = `translateX(-${position}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  return (
    <div className="w-full space-y-8">
      {/* Stats Section */}
      <div className="bg-gray-900/30 rounded-xl p-5 border border-gray-700/20">
        <h2 className="text-base uppercase font-titleFont mb-4 text-gray-300">
          My Journey in Numbers
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800/20 p-3 rounded-lg hover:bg-gray-800/30 transition-colors duration-200"
            >
              <div className="flex items-center gap-2">
                <div className="text-designColor text-lg">{stat.icon}</div>
                <div>
                  <div className="flex items-baseline">
                    <span className="text-xl font-bold text-white">
                      {stat.number}
                    </span>
                    <span className="text-designColor font-bold ml-1">+</span>
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Section with Auto-scroll */}
      <div className="bg-gray-900/30 rounded-xl p-5 border border-gray-700/20">
        <h2 className="text-base uppercase font-titleFont mb-4 text-gray-300">
          Tech Stack
        </h2>

        <div
          className="relative overflow-hidden py-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Scrollable track */}
          <div
            ref={trackRef}
            className="flex gap-4"
            style={{ willChange: "transform", width: "fit-content" }}
          >
            {duplicatedStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-shrink-0 group"
                style={{ width: "70px" }}
              >
                <div className="w-12 h-12 mb-1 p-2 rounded-lg bg-gray-800/20 group-hover:bg-gray-800/40 transition-colors">
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100"
                  />
                </div>
                <span className="text-xs text-gray-400 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-gray-900/30 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-gray-900/30 to-transparent" />
        </div>

        {/* Scroll indicator */}
        <div className="mt-3 text-center">
          <span className="text-xs text-gray-500">
            {isPaused ? "⏸️ Hover to pause" : "▶️ Auto-scrolling"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

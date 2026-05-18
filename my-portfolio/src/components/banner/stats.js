import React from "react";
import { FaCalendarAlt, FaRocket, FaCogs, FaCode } from "react-icons/fa";
import Counter from "./Counter";
import StackLogos from "../skills/teckStackLogos";

const Sidebar = () => {
  // Stats data with target numbers
  const stats = [
    {
      number: 3,
      label: "Years of experience",
      icon: <FaCalendarAlt />,
      suffix: "+",
      duration: 2,
    },
    {
      number: 15,
      label: "Projects completed",
      icon: <FaRocket />,
      suffix: "+",
      duration: 2.5,
    },
    {
      number: 14,
      label: "Technologies Mastered",
      icon: <FaCogs />,
      suffix: "+",
      duration: 2,
    },
    {
      number: 450,
      label: "Code commits",
      icon: <FaCode />,
      suffix: "+",
      duration: 3,
    },
  ];

  return (
    <div className="w-full space-y-8">
      {/* Stats Section */}
      <div className="bg-gradient-to-br from-gray-900/40 to-gray-900/20 rounded-2xl p-6 md:p-8 border border-gray-800/50 backdrop-blur-sm">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-8 bg-gradient-to-b from-designColor to-purple-500 rounded-full" />
          <h2 className="text-base md:text-lg font-semibold text-gray-200 tracking-wide">
            My Journey in Numbers
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/30 p-4 md:p-5 rounded-xl hover:bg-gray-800/50 transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-lg hover:shadow-designColor/10 border border-gray-700/30 hover:border-designColor/30"
            >
              {/* Icon with glow effect */}
              <div className="relative inline-block mb-3">
                <div className="absolute inset-0 bg-designColor/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative text-designColor text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>

              {/* Counter */}
              <div className="flex items-baseline gap-1">
                <span className="text-xl md:text-2xl font-bold text-white">
                  <Counter
                    end={stat.number}
                    suffix={stat.suffix}
                    duration={stat.duration}
                  />
                </span>
              </div>

              {/* Label */}
              <div className="text-xs md:text-sm text-gray-400 mt-1.5 group-hover:text-gray-300 transition-colors font-medium">
                {stat.label}
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-8 md:group-hover:w-10 h-0.5 md:h-[3px] bg-gradient-to-r from-transparent via-designColor to-transparent transition-all duration-500 rounded-full" />

              {/* Corner accents */}
              <div className="absolute top-2 right-2 w-1 h-1 border-t border-r border-designColor/0 group-hover:border-designColor/30 transition-all duration-500" />
              <div className="absolute bottom-2 left-2 w-1 h-1 border-b border-l border-designColor/0 group-hover:border-designColor/30 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="bg-gradient-to-br from-gray-900/40 to-gray-900/20 rounded-2xl p-6 md:p-8 border border-gray-800/50 backdrop-blur-sm">
        {/* Section Header */}

        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-8 bg-gradient-to-b from-designColor to-blue-500 rounded-full" />
          <h2 className="text-base md:text-lg font-semibold text-gray-200 tracking-wide">
            Technologies I Work With
          </h2>
        </div>

        {/* Tech Stack Logos */}
        <div className="mt-2">
          <StackLogos />
        </div>

        {/* Subtle decorative element */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-designColor/5 to-transparent rounded-full blur-2xl pointer-events-none" />
      </div>
    </div>
  );
};

export default Sidebar;

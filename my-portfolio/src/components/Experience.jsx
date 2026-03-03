import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/experiences");
      const data = await response.json();
      // Sort by displayOrder
      const sorted = data.sort(
        (a, b) => (a.displayOrder || 0) - (b.displayOrder || 0),
      );
      setExperiences(sorted);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching experiences:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-3 h-3 bg-gradient-to-r from-[#9f55ff] to-[#7000ff] rounded-full animate-bounce" />
        <div className="w-3 h-3 bg-gradient-to-r from-[#ff014f] to-[#ff6b9d] rounded-full animate-bounce delay-100 mx-1" />
        <div className="w-3 h-3 bg-gradient-to-r from-[#9f55ff] to-[#7000ff] rounded-full animate-bounce delay-200" />
      </div>
    );
  }

  return (
    <div className="w-full py-12">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="w-8 h-[2px] bg-gradient-to-r from-[#ff014f] to-[#ff6b9d]" />
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#9f55ff] to-[#7000ff] bg-clip-text text-transparent">
          Work Experience
        </h2>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 border-l-2 border-gray-700 group hover:border-[#ff014f] transition-all"
          >
            {/* Timeline dot with year */}
            <div className="absolute -left-4 top-0 w-8 h-8 bg-gradient-to-r from-[#9f55ff] to-[#7000ff] rounded-full flex items-center justify-center text-white text-xs font-bold">
              {exp.year.slice(-2)}
            </div>

            {/* Year - Large */}
            <div className="text-6xl font-bold text-gray-800 mb-2">
              {exp.year}
            </div>

            {/* Separator line */}
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#ff014f] to-[#ff6b9d] mb-4"></div>

            {/* Quarter if exists */}
            {exp.quarter && (
              <div className="text-2xl font-bold text-white mb-2">
                {exp.quarter}
              </div>
            )}

            {/* Title and Company */}
            <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ff014f] group-hover:to-[#ff6b9d] group-hover:bg-clip-text transition-all">
              {exp.title}
            </h3>
            {exp.company && (
              <p className="text-[#ff014f] text-sm mb-3">{exp.company}</p>
            )}

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
              {exp.description}
            </p>

            {/* Technologies */}
            {exp.technologies && (
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.technologies.split(",").map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            )}

            {/* Achievements */}
            {exp.achievements && (
              <div className="mt-3 text-sm text-gray-500">
                <span className="text-[#ff014f]">✓</span> {exp.achievements}
              </div>
            )}

            {/* Current Position Badge */}
            {exp.currentPosition && (
              <div className="absolute top-0 right-0 bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">
                Current
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

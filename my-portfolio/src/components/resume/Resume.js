import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  return (
    <section
      id="resume"
      className="w-full py-16 border-b-[1px] border-b-gray-800 relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-[#9f55ff]/10 to-[#7000ff]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-[#ff014f]/10 to-[#ff6b9d]/10 rounded-full blur-3xl -z-10" />

      <div className="relative z-10">
        <div className="flex justify-center items-center text-center mb-12">
          <Title title="3+ YEARS OF EXPERIENCE" des="My Resume" />
        </div>

        {/* Gradient line separator */}
        <div className="w-24 h-1 mx-auto mb-12 bg-gradient-to-r from-[#9f55ff] via-[#ff014f] to-[#7000ff] rounded-full" />

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <ul className="flex flex-wrap justify-center gap-2 md:gap-4 p-1 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/50">
            {/* Education Tab */}
            <li
              onClick={() => {
                setEducationData(true);
                setSkillData(false);
                setExperienceData(false);
                setAchievementData(false);
              }}
              className={`px-6 py-3 rounded-xl font-medium cursor-pointer transition-all duration-300 ${
                educationData
                  ? "bg-gradient-to-r from-[#9f55ff] to-[#7000ff] text-white shadow-lg shadow-[#9f55ff]/30"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              Education
            </li>

            {/* Professional Skills Tab */}
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(true);
                setExperienceData(false);
                setAchievementData(false);
              }}
              className={`px-6 py-3 rounded-xl font-medium cursor-pointer transition-all duration-300 ${
                skillData
                  ? "bg-gradient-to-r from-[#ff014f] to-[#ff6b9d] text-white shadow-lg shadow-[#ff014f]/30"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              Professional Skills
            </li>

            {/* Experience Tab - Commented but styled */}
            {/* <li
              onClick={() => {
                setEducationData(false);
                setSkillData(false);
                setExperienceData(true);
                setAchievementData(false);
              }}
              className={`px-6 py-3 rounded-xl font-medium cursor-pointer transition-all duration-300 ${
                experienceData
                  ? 'bg-gradient-to-r from-[#9f55ff] to-[#7000ff] text-white shadow-lg shadow-[#9f55ff]/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              Experience
            </li> */}

            {/* Achievements Tab - Commented but styled */}
            {/* <li
              onClick={() => {
                setEducationData(false);
                setSkillData(false);
                setExperienceData(false);
                setAchievementData(true);
              }}
              className={`px-6 py-3 rounded-xl font-medium cursor-pointer transition-all duration-300 ${
                achievementData
                  ? 'bg-gradient-to-r from-[#ff014f] to-[#ff6b9d] text-white shadow-lg shadow-[#ff014f]/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              Achievements
            </li> */}
          </ul>
        </div>

        {/* Content Sections with fade animation */}
        <div className="mt-8">
          {educationData && (
            <div className="animate-fadeIn">
              <Education />
            </div>
          )}
          {skillData && (
            <div className="animate-fadeIn">
              <Skills />
            </div>
          )}
          {achievementData && (
            <div className="animate-fadeIn">
              <Achievement />
            </div>
          )}
          {experienceData && (
            <div className="animate-fadeIn">
              <Experience />
            </div>
          )}
        </div>

        {/* Decorative element */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-[#ff014f]/30 to-transparent blur-sm" />
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Resume;

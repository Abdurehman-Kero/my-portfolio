import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Left Column - Education */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            2012 - 2027
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Electrical & Computer Engineering (Computer Stream)"
            subTitle="Addis Ababa University | 2023 - 2027"
            result="Ongoing"
            des="Coursework: DSA, OOP, Database Systems, Operating Systems, Computer Architecture, Web Development, AI/ML, and Networking."
          />

          <ResumeCard
            title="BSc in Computer Science"
            subTitle="CPU Business and IT College | 2023 - 2027"
            result="Ongoing"
            des="Pursuing alongside Electrical and Computer Engineering. Coursework: Algorithms, Software Development, Programming Paradigms, and System Design."
          />

          <ResumeCard
            title="High School Education"
            subTitle="Selam Primary and Secondary School | 2018 - 2022"
            result="95/100"
            des="Graduated with distinction. Focus on Mathematics, Physics, and Computer Science fundamentals."
          />

          <ResumeCard
            title="Middle School Education"
            subTitle="Selam Primary and Secondary School | 2012 - 2017"
            result="94.5/100"
            des="Strong foundation in Mathematics, General Science, and Social Studies."
          />
        </div>

        {/* Languages Section */}
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Languages
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Linguistic Skills</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6">
          <ResumeCard
            title="English"
            subTitle="Professional Working Proficiency"
            result="Professional"
            des=""
          />
          <ResumeCard
            title="Amharic"
            subTitle="Native Speaker"
            result="Native"
            des=""
          />
          <ResumeCard
            title="Afan Oromo"
            subTitle="Native Speaker"
            result="Native"
            des=""
          />
        </div>
      </div>

      {/* Right Column - Certifications & Experience */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            2023 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6">
          <ResumeCard
            title="Full Stack Web Development (MERN) Program"
            subTitle="Evangadi Tech | 2025 - 2026"
            result="Credential"
            credentialLink="https://d3v4ckszie160z.cloudfront.net/assets/images/certificates/FullstackWebApplicationDevelopment/2026/02/Abdurehman-1770815787253.jpg"
            des="Completed a 6-month intensive program in full-stack web development using the MERN stack (MySQL, Express.js, React.js, Node.js). Built and deployed real-world projects, strengthened problem-solving skills, and mastered industry best practices."
          />

          <ResumeCard
            title="AI Career Essentials"
            subTitle="ALX Africa | 2024"
            result="Credential"
            credentialLink="https://savanna.alxafrica.com/certificates/53cR8CTfz9"
            des="Comprehensive training in AI fundamentals, machine learning concepts, and ethical AI principles. Applied AI frameworks to enhance full-stack applications."
          />

          <ResumeCard
            title="Frontend Developer Nanodegree"
            subTitle="Udacity | 2024"
            result="Credential"
            credentialLink="https://www.udacity.com/certificate/e/9c8ad520-49da-11ef-b05a-871f6d8fd05d"
            des="Advanced frontend development with focus on React optimization, scalable component architecture, and responsive design patterns."
          />
        </div>

        {/* Experience Section */}
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6">
          <ResumeCard
            title="Full Stack Web Development Intern"
            subTitle="Future Interns · Remote | 2026 "
            result="3 mos"
            des="Selected for remote internship program. Building real-world web applications using React, Node.js, Express, and modern development workflows with Git and GitHub."
          />

          <ResumeCard
            title="Full-Stack Development Trainee"
            subTitle="INSA Summer Camp | Jul 2024 - 2025"
            result="9 mos"
            des="Comprehensive training in modern web technologies. Led a capstone project implementing full-stack solutions with React and Node.js."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
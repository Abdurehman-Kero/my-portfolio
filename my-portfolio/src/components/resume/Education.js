import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2009 - present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Formal Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Electrical and  Computer Engineering (Computer Stream)"
            subTitle="Addis Ababa University (2023 - 2028)"
            result="On going"
            des="Relevant Coursework: DSA, OOP, Database Systems, Operating Systems, Computer Architecture and Organization, Web
                 Development, AI and Machine Learning, Robotics, Networking, Social Network Analysis within 5 years of education."
          />
          <ResumeCard
            title="Highschool Education"
            subTitle="Selam Primary and Secondary School (2018 - 2022)"
            result="95/100"
            des="Relevant Coursework: Mathematics, Physics, Chemistry, Biology, Geography, History, Civics and Ethical Studies, Languages, Technology."
          />
          <ResumeCard
            title="Middle-school Education"
            subTitle="Selam Primary and Secondary School (2012 - 2017)"
            result="94.5/100"
            des="Relevant Coursework: Mathematics, General Science, Environmental Science, Social Studies."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2023 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Organizational Education
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack (MERN) Development"
            subTitle="Evangadi (2024 - 2025/26)"
            result="Done"
            des="A 6-month MERN Stack Bootcamp, an intensive, hands-on training program designed to teach the fundamentals and advanced concepts of web development using the MERN stack (MongoDB, Express.js, React.js, and Node.js)."
          />
       
          <ResumeCard
            title="Ai Career Essentials Full Course"
            subTitle="ALX (2024)"
            result="Done"
            des="Completed ALX's AI Essentials certification, mastering fundamental ML concepts (neural networks, NLP) and ethical AI principles - now applying these frameworks to optimize full-stack applications with AI-powered features."
          />
          <ResumeCard
            title="Udacity Frontend Developer Nanodegree"
            subTitle="Udacity (2024)"
            result="Done"
            des="The Udacity curriculum forced me to think like a senior developer -particularly their code review process where I learned to: Write self-documenting component names, structure scalable prop types, optize re-renders with useMemo"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education
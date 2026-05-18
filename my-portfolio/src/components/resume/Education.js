import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await fetch("https://porfoliobe.abdurehman.com/api/experiences");
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 relative"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-[#9f55ff]/10 to-[#7000ff]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-[#ff014f]/10 to-[#ff6b9d]/10 rounded-full blur-3xl -z-10" />

      {/* Left Column - Education */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#ff014f] to-[#ff6b9d]" />
            <p className="text-sm text-gray-400 tracking-[4px] uppercase">
              2012 - 2027
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#9f55ff] to-[#7000ff] bg-clip-text text-transparent">
            Education
          </h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-gradient-to-b from-[#9f55ff] via-[#ff014f] to-[#7000ff] border-opacity-30 flex flex-col gap-10 pl-6">
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
            title="Middle and High School Education"
            subTitle="Selam Primary and Secondary School | 2014 - 2022"
            result="95/100"
            des="These were some of the years that shaped my teenage years and befriended some of my life long friends. It is also where I discovered basic on Mathematics, Physics, and Computer Science fundamentals."
          />
        </div>

        {/* Languages Section */}
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#ff014f] to-[#ff6b9d]" />
            <p className="text-sm text-gray-400 tracking-[4px] uppercase">
              Languages
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#9f55ff] to-[#7000ff] bg-clip-text text-transparent">
            Linguistic Skills
          </h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-gradient-to-b from-[#9f55ff] via-[#ff014f] to-[#7000ff] border-opacity-30 flex flex-col gap-6 pl-6">
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

      {/* Right Column - Certifications & Dynamic Experience */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#ff014f] to-[#ff6b9d]" />
            <p className="text-sm text-gray-400 tracking-[4px] uppercase">
              2023 - Present
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#9f55ff] to-[#7000ff] bg-clip-text text-transparent">
            Certifications
          </h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-gradient-to-b from-[#9f55ff] via-[#ff014f] to-[#7000ff] border-opacity-30 flex flex-col gap-6 pl-6">
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

        {/* Dynamic Experience Section - Now fetches from API */}
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#ff014f] to-[#ff6b9d]" />
            <p className="text-sm text-gray-400 tracking-[4px] uppercase">
              Experience
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#9f55ff] to-[#7000ff] bg-clip-text text-transparent">
            A quick recap of the journey so far.
          </h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-gradient-to-b from-[#9f55ff] via-[#ff014f] to-[#7000ff] border-opacity-30 flex flex-col gap-6 pl-6">
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <div className="w-3 h-3 bg-gradient-to-r from-[#9f55ff] to-[#7000ff] rounded-full animate-bounce" />
              <div className="w-3 h-3 bg-gradient-to-r from-[#ff014f] to-[#ff6b9d] rounded-full animate-bounce delay-100 mx-1" />
              <div className="w-3 h-3 bg-gradient-to-r from-[#9f55ff] to-[#7000ff] rounded-full animate-bounce delay-200" />
            </div>
          ) : (
            <>
              {/* Added as requested by user */}
              <ResumeCard
                title="Backend Developer"
                subTitle="Zulu Tech"
                result="Developer"
                des="Building and optimizing scalable backend architectures, writing robust APIs, and collaborating on modern web application deployment."
              />
              
              {experiences.map((exp) => (
                <ResumeCard
                  key={exp.id}
                  title={exp.title}
                  subTitle={`${exp.company || ""}`}
                  result={exp.currentPosition ? "Current" : ""}
                  des={exp.description}
                />
              ))}
              
              {experiences.length === 0 && (
                <>
                  <ResumeCard
                    title="Full Stack Web Development Intern"
                    subTitle="Future Interns · Remote"
                    result="Intern"
                    des="Selected for remote internship program. Building real-world web applications using React, Node.js, Express, and modern development workflows with Git and GitHub."
                  />
                  <ResumeCard
                    title="Full-Stack Development Trainee"
                    subTitle="INSA Summer Camp"
                    result="Trainee"
                    des="Comprehensive training in modern web technologies. Led a capstone project implementing full-stack solutions with React and Node.js."
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;

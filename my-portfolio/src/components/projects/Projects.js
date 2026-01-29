import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectEight, projectNine } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-12 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="🌱 Amazon Clone"
          des="Modern Amazon clone with React , Node.js & Firebase authentication."
          src={projectOne}
          link1="https://github.com/Abdurehman-Kero/amazon-Clone-2025"
          link2="https://694a555d36119e00084337f5--amazoncloneabdu.netlify.app/
"
        />

        <ProjectsCard
          title="🌱 Evangadi Forum"
          des="⭐A collaborative, developer-centric platform designed to facilitate question-and-answer discussions and foster continuous learning🤝"
          src={projectFour}
          link1="https://github.com/mikretadesse/evangadi-forum-G3"
          link2="https://forum.abdurehman.com/how-it-works"
        />
        <ProjectsCard
          title="🌱 Netflix Clone"
          des="A Netflix clone created with React.js and Firebase Authentication, featuring seamless user authentication and a responsive, immersive UI. "
          src={projectTwo}
          link1="https://github.com/Abdurehman-Kero/Netflix-Clone-2025
"
          link2="https://abdurehman-kero.github.io/Netflix-Clone-2025/
"
        />
        <ProjectsCard
          title="🌱 Apple.com Clone"
          des="⭐A modern Apple.com clone built with React.js and Bootstrap, replicating the latest design, layout, and responsive user experience."
          src={projectThree}
          link1="https://github.com/Abdurehman-Kero/Netflix-Clone-2025
"
          link2="https://github.com/Abdurehman-Kero/apple-full-stack
"
        />
        <ProjectsCard
          title="🌱 Evangadi Menu"
          des="A digital menu website featuring a variety of authentic Ethiopian foods, built to showcase culture, flavor, and accessibility"
          src={projectFive}
          link1="https://github.com/Abdurehman-Kero/EvangadiMenu"
          link2="https://abdu.abdurehman.com/"
        />
        <ProjectsCard
          title="🌱 BrightRoot Academy Platform"
          des="BrightRoot Academy is an AI-powered learning platform that blends an interactive frontend, a secure backend, and AI-driven services to deliver a modern, personalized education experience for students and instructors."
          src={projectSix}
          link1="https://github.com/Miftah-Ebrahim/INSA_Group6_BrightRoot_Academy"
          link2="https://github.com/Miftah-Ebrahim/INSA_Group6_BrightRoot_Academy"
        />
      </div>
    </section>
  );
}

export default Projects
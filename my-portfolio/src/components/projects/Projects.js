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
          title="Amazon Clone"
          des="⭐ Modern Amazon clone with React , Node.js & Firebase authentication."
          src={projectOne}
          link1="https://github.com/Abdurehman-Kero/amazon-Clone-2025"
          link2="https://694a555d36119e00084337f5--amazoncloneabdu.netlify.app/
"
        />
        <ProjectsCard
          title="Netflix Clone"
          des="⭐ Netflix clone with react.js & firebase authentication.🏞️✨ The app provides a seamless . . . "
          src={projectTwo}
          link1=""
          link2=""
        />
        <ProjectsCard
          title="Apple.com Clone"
          des="⭐Latest Apple.com Clone with react.js and Bootstrap."
          src={projectThree}
          link1="https://github.com/Abdurehman-Kero/Netflix-Clone-2025
"
          link2="https://abdurehman-kero.github.io/Netflix-Clone-2025/
"
        />
        <ProjectsCard
          title="Evangadi Forum"
          des="⭐A community-driven platform to ask, answer, and grow together.🤝❤️🌍 . . ."
          src={projectFour}
          link1="https://github.com/mikretadesse/evangadi-forum-G3"
          link2="https://forum.abdurehman.com/how-it-works"
        />
         
      </div>
    </section>
  );
}

export default Projects
import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Software Engineer.", "Full Stack Developer.", "Competitive Programmer."],
      loop: true,
      typeSpeed: 90,
      deleteSpeed: 40,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Abdu kr.</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="designColor"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          As a Full-stack Web Dev, I design and build innovative software
          solutions, solve complex problems, and ensure systems are scalable and
          user-friendly. From creating web apps to optimizing backend systems, I
          bridge the gap between technology and user needs.
        </p>
      </div>
      <Media />
    </div>
  );
}

export default LeftBanner
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import Counter from "./Counter"; // Make sure this import is added

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "build scalable web apps",
      "solve complex problems",
      "engineer clean solutions",
      "create seamless experiences",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 40,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-8 relative text-center lgl:text-left">
      {/* Static background gradient */}
      <div className="absolute -left-20 -top-20 w-64 h-64 bg-gradient-to-r from-[#9f55ff]/10 to-[#7000ff]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -right-20 bottom-0 w-64 h-64 bg-gradient-to-r from-[#ff014f]/10 to-[#ff6b9d]/10 rounded-full blur-3xl -z-10" />

      <div className="flex flex-col gap-5 items-center lgl:items-start relative z-10">
        {/* Hello with pink gradient */}
        <div className="flex items-center gap-3">
          <span className="w-8 h-[2px] bg-gradient-to-r from-[#ff014f] to-[#ff6b9d] hidden lgl:block" />
          <span className="bg-gradient-to-r from-[#ff014f] to-[#ff6b9d] bg-clip-text text-transparent text-xs font-medium tracking-[0.2em] uppercase">
            Hello
          </span>
        </div>

        {/* Name with purple gradient */}
        <h1 className="text-4xl md:text-5xl lgl:text-6xl font-bold text-white">
          I'm{" "}
          <span className="bg-gradient-to-r from-[#9f55ff] to-[#7000ff] bg-clip-text text-transparent">
            Abdurehman
          </span>
        </h1>

        {/* Role with pink gradient */}
        <div className="flex items-center gap-2 flex-wrap justify-center lgl:justify-start">
          <span className="text-xl md:text-2xl text-gray-300">I</span>
          <span className="text-xl md:text-2xl font-medium bg-gradient-to-r from-[#ff014f] to-[#ff6b9d] bg-clip-text text-transparent">
            {text}
          </span>
          <Cursor cursorColor="#ff014f" />
        </div>

        {/* Description */}
        <div className="max-w-xl mx-auto lgl:mx-0">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Full-stack developer with a dual degree in Computer Engineering and
            Computer Science. I build scalable web applications that solve
            real-world problems.
          </p>
        </div>

        {/* Stats - Counting from 0 to target values */}
        <div className="flex gap-8 mt-4 justify-center lgl:justify-start">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              <Counter end={3} suffix="+" duration={2} />
            </h3>
            <p className="text-xs text-gray-500 mt-1">Years Experience</p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              <Counter end={15} suffix="+" duration={2.5} />
            </h3>
            <p className="text-xs text-gray-500 mt-1">Projects Completed</p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              <Counter end={8} suffix="+" duration={2} />
            </h3>
            <p className="text-xs text-gray-500 mt-1">Technologies</p>
          </div>
        </div>

        {/* Social */}
        <div className="mt-4">
          <Media />
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;

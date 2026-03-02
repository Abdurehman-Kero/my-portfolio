import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Media from "./Media";
import Counter from "./Counter"; // Import the counter

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Computer Engineer.",
      "Full Stack Web Developer.",
      "Competitive Programmer.",
      "UI/UX Designer.",
      "Problem Solver.",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 40,
    delaySpeed: 2000,
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full lgl:w-1/2 flex flex-col gap-10 md:gap-20 relative text-center lgl:text-left"
    >
      {/* Background gradient */}
      <div className="absolute -left-20 -top-20 w-64 h-64 bg-designColor/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute -right-20 bottom-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse animation-delay-2000" />

      <div className="flex flex-col gap-5 items-center lgl:items-start">
        {/* Animated greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 justify-center lgl:justify-start"
        >
          <span className="w-10 h-[2px] bg-designColor animate-pulse hidden lgl:block"></span>
          <span className="text-designColor text-lg font-medium tracking-wide">
            WELCOME TO MY WORLD
          </span>
        </motion.div>

        {/* Main title with gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl lgl:text-6xl font-bold text-white leading-tight"
        >
          Hi, I'm{" "}
          <motion.span
            className="text-designColor capitalize inline-block"
            animate={{
              scale: [1, 1.05, 1],
              textShadow: [
                "0 0 0 rgba(255,215,0,0)",
                "0 0 20px rgba(255,215,0,0.5)",
                "0 0 0 rgba(255,215,0,0)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Abdu kr.
          </motion.span>
        </motion.h1>

        {/* Animated role with typewriter */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl lgl:text-4xl font-bold text-white flex flex-wrap items-center gap-2 justify-center lgl:justify-start"
        >
          <span>a</span>
          <span className="relative">
            <span className="text-designColor bg-gradient-to-r from-designColor to-purple-500 bg-clip-text text-transparent animate-gradient-x">
              {text}
            </span>
            <Cursor
              cursorBlinking="true"
              cursorStyle="|"
              cursorColor="#FFD700"
            />
          </span>
        </motion.h2>

        {/* Description with fade-in */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-base font-bodyFont leading-7 tracking-wide text-gray-300 max-w-xl mx-auto lgl:mx-0"
        >
          As a Full-stack Web Dev, I design and build innovative software
          solutions, solve complex problems, and ensure systems are scalable and
          user-friendly. From creating web apps to optimizing backend systems, I
          bridge the gap between technology and user needs.
        </motion.p>

        {/* Dynamic Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-6 mt-4 justify-center lgl:justify-start"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-designColor">
              <Counter end={2} suffix="+" duration={2} />
            </h3>
            <p className="text-gray-400 text-sm">Years Experience</p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-designColor">
              <Counter end={15} suffix="+" duration={2.5} />
            </h3>
            <p className="text-gray-400 text-sm">Projects Done</p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-designColor">
              <Counter end={8} suffix="+" duration={2} />
            </h3>
            <p className="text-gray-400 text-sm">Happy Clients</p>
          </div>
        </motion.div>
      </div>

      {/* Social media section with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex justify-center lgl:justify-start"
      >
        <Media />
      </motion.div>
    </motion.div>
  );
};

export default LeftBanner;

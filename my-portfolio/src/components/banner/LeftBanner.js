import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import waveImage from "../../assets/images/image.png"; // Import the local image

const LeftBanner = () => {
  const [wave, setWave] = useState(false);

  useEffect(() => {
    setWave(true);
    const timer = setTimeout(() => {
      setWave(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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
      <div className="absolute left-0 -top-20 w-64 h-64 bg-gradient-to-r from-[#9f55ff]/10 to-[#7000ff]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-r from-[#ff014f]/10 to-[#ff6b9d]/10 rounded-full blur-3xl -z-10" />

      <div className="flex flex-col gap-5 items-center lgl:items-start relative z-10">
        {/* Hello with LARGER pink gradient text and CUSTOM waving hand image */}
        <div className="flex items-center gap-3">
          <span className="w-8 h-[2px] bg-gradient-to-r from-[#ff014f] to-[#ff6b9d] hidden lgl:block" />
          <div className="flex items-center gap-3">
            <span className="bg-gradient-to-r from-[#ff014f] to-[#ff6b9d] bg-clip-text text-transparent text-2xl md:text-5xl font-bold tracking-[0.3em] ">
              Hello
            </span>
            <img
              src={waveImage}
              alt="waving hand"
              className={`waving-hand-img w-12 h-11 md:w-17 md:h-11 inline-block object-contain ${wave ? "animate-wave-rapid" : ""}`}
              style={{ transformOrigin: "40% 100%" }}
            />
          </div>
        </div>

        {/* Name with purple gradient - LARGER */}
        <h1 className="text-5xl md:text-6xl lgl:text-7xl font-bold text-white">
          I'm{" "}
          <span className="bg-gradient-to-r from-[#9f55ff] to-[#7000ff] bg-clip-text text-transparent">
            Abdurehman
          </span>
        </h1>

        {/* Role with pink gradient - LARGER */}
        <div className="flex items-center gap-2 flex-wrap justify-center lgl:justify-start">
          <span className="text-2xl md:text-3xl text-gray-300">I</span>
          <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#ff014f] to-[#ff6b9d] bg-clip-text text-transparent">
            {text}
          </span>
          <Cursor cursorColor="#ff014f" />
        </div>

        {/* Social */}
        <div className="mt-4">
          <Media />
        </div>
      </div>

      {/* Animation keyframes (unchanged) */}
      <style jsx>{`
        @keyframes wave-rapid {
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(30deg);
          }
          20% {
            transform: rotate(-25deg);
          }
          30% {
            transform: rotate(30deg);
          }
          40% {
            transform: rotate(-25deg);
          }
          50% {
            transform: rotate(30deg);
          }
          60% {
            transform: rotate(-20deg);
          }
          70% {
            transform: rotate(25deg);
          }
          80% {
            transform: rotate(-15deg);
          }
          90% {
            transform: rotate(20deg);
          }
          95% {
            transform: rotate(-10deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .animate-wave-rapid {
          animation: wave-rapid 3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default LeftBanner;

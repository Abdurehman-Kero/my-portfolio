import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, 
  SiExpress, SiNestjs, SiMysql, SiPostgresql, SiMongodb, SiPython, 
  SiBootstrap, SiGit, SiGithub, SiVisualstudiocode, SiFigma, 
  SiTailwindcss, SiPostman, SiTrello 
} from "react-icons/si";

const StackLogos = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const trackRef = useRef(null);

  const logos = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
    { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
    { icon: SiCss3, name: "CSS3", color: "#1572B6" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiExpress, name: "Express", color: "#FFFFFF" },
    { icon: SiNestjs, name: "NestJS", color: "#E0234E" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiMysql, name: "MySQL", color: "#4479A1" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiGit, name: "Git", color: "#F05032" },
    { icon: SiGithub, name: "GitHub", color: "#FFFFFF" },
    { icon: SiVisualstudiocode, name: "VS Code", color: "#007ACC" },
    { icon: SiFigma, name: "Figma", color: "#F24E1E" },
    { icon: SiPostman, name: "Postman", color: "#FF6C37" },
    { icon: SiTrello, name: "Trello", color: "#0052CC" },
    { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
  ];

  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      if (!isPaused) {
        position += speed;
        if (position >= track.scrollWidth / 2) {
          position = 0;
        }
        track.style.transform = `translateX(-${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <div className="relative w-full py-6 my-2">
      <div
        className="relative w-full overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex gap-6 py-6"
          style={{ willChange: "transform", width: "fit-content" }}
        >
          {duplicatedLogos.map((LogoItem, index) => (
            <motion.div
              key={`${LogoItem.name}-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center cursor-pointer"
              style={{ width: "95px" }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Glass container for icon */}
              <div
                className={`
                  relative w-16 h-16 mb-4 rounded-2xl flex items-center justify-center
                  transition-all duration-300 backdrop-blur-md border
                  ${
                    hoveredIndex === index
                      ? "bg-[#1e2229] border-gray-600/50"
                      : "bg-[#111317]/80 border-gray-800/80"
                  }
                `}
                style={{
                  boxShadow: hoveredIndex === index ? `0 10px 25px -5px ${LogoItem.color}40` : "none"
                }}
              >
                {/* Glow ring */}
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="glowRing"
                    className="absolute inset-0 rounded-2xl -z-10"
                    style={{ background: `radial-gradient(circle, ${LogoItem.color}25 0%, transparent 80%)` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                
                <LogoItem.icon 
                  className="text-3xl transition-all duration-300"
                  style={{ 
                    color: hoveredIndex === index ? LogoItem.color : "#9ca3af",
                    filter: hoveredIndex === index ? `drop-shadow(0 0 10px ${LogoItem.color}80)` : "none"
                  }} 
                />
              </div>

              <span
                className={`
                  text-sm font-semibold tracking-wide transition-all duration-300
                  ${hoveredIndex === index ? "opacity-100 scale-105" : "text-gray-500 opacity-60"}
                `}
                style={{ color: hoveredIndex === index ? "#e2e8f0" : "" }}
              >
                {LogoItem.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Cinematic edge gradients to fade out the logos cleanly */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
};

export default StackLogos;

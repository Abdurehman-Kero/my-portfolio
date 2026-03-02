import React, { useRef, useEffect, useState } from "react";
import nextLogo from "../../assets/images/nextLogo.png";
import nestLogo from "../../assets/images/nestLogo.png";
import pytorchLogo from "../../assets/images/pytorchLogo.png";
import tensorFlowLogo from "../../assets/images/tensorFlowLogo.png";
import { motion, AnimatePresence } from "framer-motion";

const StackLogos = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const trackRef = useRef(null);

  const logos = [
    {
      src: "https://img.icons8.com/?size=100&id=122637&format=png&color=d4af37",
      alt: "React",
      name: "React",
    },
    { src: nextLogo, alt: "NextJS", name: "Next.js" },
    {
      src: "https://img.icons8.com/?size=100&id=23027&format=png&color=d4af37",
      alt: "HTML",
      name: "HTML",
    },
    {
      src: "https://img.icons8.com/?size=100&id=42769&format=png&color=d4af37",
      alt: "JavaScript",
      name: "JavaScript",
    },
    {
      src: "https://img.icons8.com/?size=100&id=FQlr_bFSqEdG&format=png&color=d4af37",
      alt: "Node.js",
      name: "Node.js",
    },
    {
      src: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=d4af37",
      alt: "Express",
      name: "Express",
    },
    { src: nestLogo, alt: "NestJS", name: "NestJS" },
    {
      src: "https://img.icons8.com/?size=100&id=39858&format=png&color=d4af37",
      alt: "MySQL",
      name: "MySQL",
    },
    {
      src: "https://img.icons8.com/?size=100&id=25010&format=png&color=d4af37",
      alt: "PostgreSQL",
      name: "PostgreSQL",
    },
    {
      src: "https://img.icons8.com/?size=100&id=OdTjgPoHJeaK&format=png&color=d4af37",
      alt: "MongoDB",
      name: "MongoDB",
    },
    {
      src: "https://img.icons8.com/?size=100&id=12584&format=png&color=d4af37",
      alt: "Python",
      name: "Python",
    },
    
    

  
    {
      src: "https://img.icons8.com/?size=100&id=OODqBWCdRF8o&format=png&color=d4af37",
      alt: "Bootstrap",
      name: "Bootstrap",
    },
    {
      src: "https://img.icons8.com/?size=100&id=38388&format=png&color=d4af37",
      alt: "Git",
      name: "Git",
    },
    {
      src: "https://img.icons8.com/?size=100&id=fmFqQmR0UdsR&format=png&color=d4af37",
      alt: "GitHub",
      name: "GitHub",
    },
    {
      src: "https://img.icons8.com/?size=100&id=h67b5xF2blsK&format=png&color=d4af37",
      alt: "VS Code",
      name: "VS Code",
    },
    {
      src: "https://img.icons8.com/?size=100&id=GflC6KLkdd0Y&format=png&color=d4af37",
      alt: "Figma",
      name: "Figma",
    },
    {
      src: "https://img.icons8.com/?size=100&id=38273&format=png&color=d4af37",
      alt: "CSS",
      name: "CSS",
    },
    {
      src: "https://img.icons8.com/?size=100&id=qOFWMoaAQIdR&format=png&color=d4af37",
      alt: "Tailwind CSS",
      name: "Tailwind",
    },
    {
      src: "https://img.icons8.com/?size=100&id=KIcFwp9MNQL5&format=png&color=d4af37",
      alt: "Postman",
      name: "Postman",
    },
    {
      src: "https://img.icons8.com/?size=100&id=20909&format=png&color=d4af37",
      alt: "Trello",
      name: "Trello",
    },
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
    <div className="relative w-full py-12 my-4">
      {/* Section Header */}
    
      {/* Carousel Container */}
      <div
        className="relative w-full overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
    

        {/* Scrolling Track */}
        <div
          ref={trackRef}
          className="flex gap-8 py-4"
          style={{ willChange: "transform", width: "fit-content" }}
        >
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center"
              style={{ width: "90px" }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Logo Container with Glass Effect */}
              <div
                className={`
                relative w-16 h-16 mb-2 rounded-xl flex items-center justify-center
                transition-all duration-300
                ${
                  hoveredIndex === index
                    ? "bg-designColor/20 border-designColor/50"
                    : "bg-gray-800/30 border-gray-700/50"
                }
                border backdrop-blur-sm
              `}
              >
                {/* Glow Effect on Hover */}
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="glow"
                    className="absolute inset-0 rounded-xl bg-designColor/20 blur-md -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}

                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-10 h-10 object-contain transition-all duration-300"
                  style={{
                    filter:
                      hoveredIndex === index
                        ? "brightness(1.2) drop-shadow(0 0 8px rgba(255,215,0,0.5))"
                        : "brightness(0.9)",
                  }}
                />
              </div>

              {/* Logo Name */}
              <span
                className={`
                text-xs font-medium transition-all duration-300
                ${
                  hoveredIndex === index
                    ? "text-designColor scale-105"
                    : "text-gray-400"
                }
              `}
              >
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-900 via-gray-900/90 to-transparent z-10 pointer-events-none" />

        {/* Top and Bottom Borders */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-designColor/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-designColor/30 to-transparent" />
      </div>

    
    </div>
  );
};

export default StackLogos;

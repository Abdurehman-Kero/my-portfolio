import React, { useRef, useEffect, useState } from "react";
import nextLogo from "../../assets/images/nextLogo.png";
import nestLogo from "../../assets/images/nestLogo.png";
import pytorchLogo from "../../assets/images/pytorchLogo.png";
import tensorFlowLogo from "../../assets/images/tensorFlowLogo.png";

const StackLogos = () => {
  const [isPaused, setIsPaused] = useState(false);
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
    { src: tensorFlowLogo, alt: "TensorFlow", name: "TensorFlow" },
    { src: pytorchLogo, alt: "PyTorch", name: "PyTorch" },
    {
      src: "https://img.icons8.com/?size=100&id=lx6cJkVf1gg7&format=png&color=d4af37",
      alt: "GraphQL",
      name: "GraphQL",
    },
    {
      src: "https://img.icons8.com/?size=100&id=PwDLBrxvWI3V&format=png&color=d4af37",
      alt: "Chakra UI",
      name: "Chakra UI",
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
    // ADDED TRELLO HERE
    {
      src: "https://img.icons8.com/?size=100&id=20909&format=png&color=d4af37",
      alt: "Trello",
      name: "Trello",
    },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  // Auto-scroll animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId;
    let position = 0;
    const speed = 0.7;

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

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  return (
    <div
      className="relative w-full overflow-hidden py-10 my-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Pause indicator */}
      <div className="absolute top-2 right-4 text-xs text-gray-500 z-20">
        {isPaused ? "⏸️ Paused" : "▶️ Auto-scrolling"}
      </div>

      {/* Slideshow track */}
      <div
        ref={trackRef}
        className="flex gap-12"
        style={{
          willChange: "transform",
          width: "fit-content",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 group"
            style={{ width: "85px" }}
          >
            {/* Logo container */}
            <div className="w-16 h-16 mb-2 p-2 rounded-lg bg-gray-800/30 group-hover:bg-gray-800/50 transition-all duration-300">
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Name below */}
            <span className="text-xs text-gray-400 font-medium mt-1 group-hover:text-gray-300 transition-colors duration-300 whitespace-nowrap">
              {logo.name}
            </span>
          </div>
        ))}
      </div>

      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 via-gray-900/90 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default StackLogos;

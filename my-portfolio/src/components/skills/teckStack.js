import React from 'react';

const TechStack = ({ logos }) => {
  return (
    <div className="text-center my-5">
      <div className="flex flex-wrap justify-center gap-8 my-10">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="w-12 h-12 object-contain transition-transform transform hover:scale-110 filter hue-rotate-60 saturate-300 brightness-120"
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;

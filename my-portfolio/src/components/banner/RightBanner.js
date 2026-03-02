import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      {/* Image with reduced opacity border */}
      <img
        className="w-[180px] h-[180px] md:w-[280px] md:h-[280px] rounded-full object-cover border-4 border-designColor/30 shadow-2xl"
        src={bannerImg}
        alt="bannerImg"
      />
    </div>
  );
};

export default RightBanner;

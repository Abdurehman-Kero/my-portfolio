import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[auto] h-[auto] border-none z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute w-[0] h-[0] md:w-[446px] md:h-[446px] bg-gradient-to-r from-designColor to-[#1e2024] shadow-shadowOne flex justify-center items-center  rounded-full" />
   </div>
  );
}

export default RightBanner
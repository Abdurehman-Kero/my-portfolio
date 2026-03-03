import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="herosection mt-14 w-full pt-8 pb-24 flex flex-col-reverse lgl:flex-row items-center justify-center gap-10 xl:gap-0 font-titleFont border-b-[1px] border-b-black"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;

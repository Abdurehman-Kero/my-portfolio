import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="mt-14 w-full pt-8 pb-16 md:pb-20 lgl:pb-24 flex flex-col-reverse lgl:flex-row items-center justify-center gap-6 md:gap-8 lgl:gap-10 xl:gap-0 font-titleFont border-b-[1px] border-b-gray-800"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;

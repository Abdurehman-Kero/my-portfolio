import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";
import StackLogos from "../skills/teckStackLogos";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-16 border-b-[1px] border-b-black"
    >
      {/* Section Title */}
      <div className="mb-12">
        <Title title="Features" des="What I Do" />
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>

     
    </section>
  );
};

export default Features;

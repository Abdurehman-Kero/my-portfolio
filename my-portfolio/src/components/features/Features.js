import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";
import StackLogos from "../skills/teckStackLogos";
const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-12 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-16">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <StackLogos />
    </section>
  );
};

export default Features;

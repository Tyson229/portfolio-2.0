import React from "react";
import SectionHeader from "../section_header/SectionHeader";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full">
      <SectionHeader title="about" />
      <div></div>
      <div className="grid">
        <div className="col-span-2 items-center text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
          doloribus delectus accusamus? Eos incidunt aspernatur ullam ipsam
          quaerat eum veniam eaque? Illum nobis debitis fugit unde ab
          temporibus, numquam et!
        </div>
      </div>
    </section>
  );
};

export default About;

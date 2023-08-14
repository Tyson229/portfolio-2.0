import React from "react";
import SectionHeader from "../section_header/SectionHeader";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full mt-10">
      <SectionHeader title="About" />
      <div className="grid md:grid-cols-3">
        <div className="square w-[calc(2rem*10)] bg-black">

        </div>
        <div className="text-justify opacity-70 text-stone-500 col-span-2">
          I graduated my ICT degree in 2019 and started my journey as a software
          engineer as well as web developer since then. I got my opportunities
          to work in different types of projects: eShop, Calculator, Morse Code
          translator, Fake Windows 98... Id
        d</div>
      </div>
    </div>
  );
};

export default About;

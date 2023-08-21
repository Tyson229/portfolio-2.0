import React from "react";
import SectionHeader from "../section_header/SectionHeader";
import AboutDescription from "./AboutDescription";
import AboutEducation from "./AboutEducation";
import AboutAchievements from "./about_achievements/AboutAchievements";
import BreakLine from "../breakLine/BreakLine";

const About = () => {
  return (
    <section className="flex flex-col w-full gap-4">
      <SectionHeader title="About" />
      <AboutDescription />
      <AboutEducation />
      <AboutAchievements />
      <BreakLine/>
    </section>
  );
};

export default About;

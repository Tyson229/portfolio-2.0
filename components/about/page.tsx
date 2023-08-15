import React from "react";
import SectionHeader from "../section_header/SectionHeader";
import AboutDescription from "./AboutDescription";
import AboutEducation from "./AboutEducation";
import AboutHobbiesSkills from "./AboutHobbiesSkills";

const About = () => {
  return (
    <section className="flex flex-col w-full gap-4">
      <SectionHeader title="About" />
      <AboutDescription/>
      <AboutEducation/>
      <AboutHobbiesSkills/>
    </section>
  );
};

export default About;

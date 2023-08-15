import React from "react";
import SectionHeader from "../section_header/SectionHeader";
import ProjectList from "./ProjectList";
import Tech from "../tech/page";

import ProjectDescription from "./ProjectDescription";
import BreakLine from "../breakLine/BreakLine";

const Projects = () => {
  return (
    <section className="flex flex-col gap-2 w-full justify-center">
      <SectionHeader title="projects" />
      <ProjectDescription />
      <Tech />
      <ProjectList />
      <BreakLine/>
    </section>
  );
};

export default Projects;

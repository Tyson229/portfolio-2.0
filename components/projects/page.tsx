import React from "react";
import SectionHeader from "../section_header/SectionHeader";
import ProjectList from "./ProjectList";
import Tech from "../tech/page";

import ProjectDescription from "./ProjectDescription";

const Projects = () => {
  return (
    <section className="flex flex-col gap-2 w-full justify-center items-center">
      <SectionHeader title="projects" />
      <ProjectDescription />
      <Tech />
      <ProjectList />
    </section>
  );
};

export default Projects;

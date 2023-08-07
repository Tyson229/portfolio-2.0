import React from "react";
import SectionHeader from "../section_header/SectionHeader";
import ProjectList from "./ProjectList";
import Tech from "../tech/page";

import ProjectDescription from "./ProjectDescription";

const Projects = () => {
  return (
    <section className="flex flex-col gap-2 w-full justify-center p-4 max-w-screen-xl">
      <SectionHeader title="projects"/>
      <ProjectDescription />
      <Tech />
      <ProjectList />
    </section>
  );
};

export default Projects;

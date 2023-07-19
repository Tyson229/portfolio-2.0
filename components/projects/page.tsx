import React from "react";
import SectionHeader from "../section_header/SectionHeader";
import ProjectList from "./ProjectList";

const Projects = () => {
  return (
    <section className="flex flex-col gap-2 w-full ">
      <SectionHeader title="projects" />
      <ProjectList />
    </section>
  );
};

export default Projects;

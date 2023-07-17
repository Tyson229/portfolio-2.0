import React from "react";
import SectionHeader from "../section_header/SectionHeader";
import ProjectList from "./ProjectList";

const Projects = () => {
  return (
    <section
      className="flex flex-col xl:grid xl:grid-cols-3 gap-2 "
      id="project"
    >
      <SectionHeader title="projects" />
      <ProjectList />
    </section>
  );
};

export default Projects;

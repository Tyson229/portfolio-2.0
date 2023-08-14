"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../lib/data";

import "react-multi-carousel/lib/styles.css";

const ProjectList = () => {
  return (
    <div
      className={`w-full lg:max-w-[calc(100%-10rem)] flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 items-center`}
    >
      {PROJECTS.map((project, index) => (
        <ProjectCard project={project} key={index} index={index} />
      ))}
    </div>
  );
};

export default ProjectList;

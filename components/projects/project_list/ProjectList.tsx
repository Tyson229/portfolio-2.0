import React from "react";
import ProjectCard from "../project_card/ProjectCard";
import { PROJECTS } from "../../../lib/data";

const ProjectList = () => {
  return (
    <div className="flex flex-col md:grid grid-cols-3 gap-4 justify-center">
       {PROJECTS.map((project, index) => (
        <ProjectCard project={project} key={index} index={index}/>
      ))}
    </div>
  );
};

export default ProjectList;

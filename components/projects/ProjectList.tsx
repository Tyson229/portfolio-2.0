import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../lib/data";

const ProjectList = () => {
  return (
    <div className="col-span-2 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-2 justify-center ">
       {PROJECTS.map((project, index) => (
        <ProjectCard project={project} key={index} index={index}/>
      ))}
    </div>
  );
};

export default ProjectList;

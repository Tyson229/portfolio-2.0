import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  project: {
    title: string;
    tech: string[];
    description: string;
    links: {
      github: string;
      url: string;
    };
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div className="w-full bg-zinc-700 text-stone-100 p-4 rounded-md flex flex-col gap-2 shadow-lg shadow-zinc-700/50">
      <div className="flex w-full gap-2">
        <div className="text-center w-12 h-12 flex justify-center items-center p-2 text-2xl font-semibold">{++index}</div>
        <div className="grow">
          <div className="font-semibold">{project.title}</div>
          <div>
            {project.tech.map((t, i) => {
              return (
                <span className="text-sm italic">
                  {i < project.tech.length - 1 ? t.concat("-") : t}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="text-sm text-justify">{project.description}</div>

      <div className="flex mt-3">
        <div className="bg-white"></div>
        <Link
          href={project.links.github}
          className="w-1/4 text-center text-sm font-semibold p-2 rounded-lg bg-stone-100 text-zinc-700 hover:scale-110 transform-transition duration-200 ease-in-out mr-3"
        >
          GitHub
        </Link>
        {project.links.url !== '' ? 
        <Link
          href={project.links.url}
          className="w-1/4 text-center text-sm font-semibold p-2 rounded-lg bg-stone-100 text-zinc-700 hover:scale-110 transform-transition duration-200 ease-in-out mr-3"
        >
          Visit
        </Link> : ''}
      </div>
    </div>
  );
};

export default ProjectCard;
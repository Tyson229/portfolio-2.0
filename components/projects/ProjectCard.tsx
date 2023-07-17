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
    <div className="flex flex-col sm:square h-auto gap-2 p-4 bg-black/50 rounded-md text-white drop-shadow-lg">
      {/* <div className="absolute w-0 h-0 border-r-[50px] border-b-[50px] border-stone-100 bottom-0 right-0 "></div> */}
      <div className="flex w-full gap-2"> 
        <div className="text-center w-12 h-12 flex justify-center items-center p-2 text-3xl font-semibold  text-white">
          {++index}
        </div>
        <div className="">
          <div className="font-semibold text-white">{project.title}</div>
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

      <div className="text-sm text-justify grow ">{project.description}</div>

      <div className="flex mt-3">
        <div className="bg-white"></div>
        <Link
          href={project.links.github}
          className="rec text-center text-sm font-semibold p-2 rounded-lg bg-stone-100 text-zinc-700 hover:scale-110 hover:bg-sky-400 hover:text-stone-100 transform-transition duration-200 ease-in-out mr-3 "
        >
          GitHub
        </Link>
        {project.links.url !== "" ? (
          <Link
            href={project.links.url}
            className="rec text-center text-sm font-semibold p-2 rounded-lg bg-stone-100 text-zinc-700 hover:scale-110 hover:bg-sky-400 hover:text-stone-100 transform-transition duration-200 ease-in-out mr-3"
          >
            Visit
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

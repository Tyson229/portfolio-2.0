import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";

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
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "-50px",
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={` h-[calc(25rem-30px)] w-full flex flex-col gap-2 p-4 rounded-tr-2xl rounded-bl-2xl text-white relative ${
        index % 2 == 0 ? "bg-stone-900" : "bg-slate-700"
      } ${
        inView
          ? "animate-in fade-in slide-in-from-bottom-10 duration-300 ease-linear"
          : "opacity-0"
      }`}
    >
      <div className="text-center w-12 h-12 flex justify-center items-center text-3xl font-semibold relative top-0 left-0 ">
        {++index}
      </div>
      <div className="flex w-full gap-2">
        <div className="">
          <div className="font-semibold text-4xl">{project.title}</div>
          <div>
            {project.tech.map((t, i) => {
              return (
                <span className="text-sm italic" key={i}>
                  {i < project.tech.length - 1 ? t.concat("-") : t}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="text-sm text-justify grow">{project.description}</div>

      <div className="flex mt-3 p-2">
        <div className="bg-white"></div>
        <Link
          href={project.links.github}
          className="rec text-center text-sm font-semibold p-2 rounded-lg border border-stone-100 text-white hover:scale-110 hover:bg-pink-600 hover:border-none transform-transition duration-200 ease-in-out mr-3 "
        >
          GitHub
        </Link>
        {project.links.url !== "" ? (
          <Link
            href={project.links.url}
            className="rec text-center text-sm font-semibold p-2 rounded-lg bg-stone-100 text-zinc-700 hover:scale-110 hover:bg-pink-600 hover:text-stone-100 transform-transition duration-200 ease-in-out mr-3"
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

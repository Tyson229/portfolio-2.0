"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const ProjectDescription = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "-100px",
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`w-full text-justify ${
        inView ? "animate-in fade-in slide-in-from-top-4 duration-1000" : "opacity-0"
      }`}
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus illo
      suscipit possimus eveniet odit, neque veniam temporibus quisquam officiis
      libero delectus, similique, aliquid iure placeat dolore magni consequatur
      nemo voluptatum.
    </div>
  );
};

export default ProjectDescription;

"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../lib/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const ProjectList = () => {
  return (
    // <Carousel
    //   swipeable={true}
    //   arrows={true}
    //   showDots={true}
    //   responsive={responsive}
    //   ssr={true}
    //   removeArrowOnDeviceType={["tablet", "mobile"]}
    //   className="pb-6 box-border w-full"
    // >
    //   {PROJECTS.map((project, index) => (
    //     <ProjectCard project={project} key={index} index={index} />
    //   ))}
      
    // </Carousel>
    <div className="w-full flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {PROJECTS.map((project, index) => (
        <ProjectCard project={project} key={index} index={index} />
      ))}
    </div>
  );
};

export default ProjectList;

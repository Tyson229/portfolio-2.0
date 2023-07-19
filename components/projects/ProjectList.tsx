"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../lib/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProjectList = () => {
  return (
    <Carousel
      swipeable={true}
      arrows={true}
      showDots={true}
      responsive={responsive}
      ssr={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      className="pb-6 box-border"
    >
      {PROJECTS.map((project, index) => (
        <ProjectCard project={project} key={index} index={index} />
      ))}
    </Carousel>
  );
};

export default ProjectList;

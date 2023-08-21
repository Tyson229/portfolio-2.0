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
      className={`w-full lg:w-2/3 text-justify ${
        inView
          ? "animate-in fade-in slide-in-from-top-4 duration-1000"
          : "opacity-0"
      }`}
    >
      I have completed a range of projects utilizing HTML, CSS, JavaScript, and
      React. Notably, I developed a Sneaker eShop for seamless online shopping
      and a web-based Minesweeper game for classic entertainment. Leveraging the
      Google Books API, I crafted an app enabling easy book exploration.
      Additionally, I designed a Morse Code translator for efficient
      communication and a Fake Windows 98 interface for nostalgic fun. Lastly, I
      created a sleek blog website, highlighting my expertise in web development
      and interactive design.
    </div>
  );
};

export default ProjectDescription;

"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const AboutDescription = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "-50px",
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`text-justify w-full lg:w-2/3 mb-8 ${
        inView
          ? "animate-in fade-in slide-in-from-left-20 duration-500 "
          : "opacity-0"
      }`}
    >
      I graduated my ICT degree in 2019 and started my journey as a software
      engineer as well as web developer since then. I got my opportunities to
      work in different types of projects: eShop, Calculator, Morse Code
      translator, Fake Windows 98...
    </div>
  );
};

export default AboutDescription;

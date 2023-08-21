"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const BreakLine = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "0px",
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`h-0.5 bg-slate-800/40 rounded-xl flex justify-center items-center my-12 ${
        inView ? "transition-full duration-200 ease-linear w-full" : "w-0"
      }`}
    ></div>
  );
};

export default BreakLine;

"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const SectionHeader = ({ title }: { title: string }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "-100px",
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`w-full flex flex-col font-bold text-2xl md:text-4xl text-stone-800 ${
        inView
          ? "animate-in fade-in slide-in-from-left-20 duration-500 "
          : "opacity-0"
      }`}
    >
      {title.toUpperCase()}
    </div>
  );
};

export default SectionHeader;

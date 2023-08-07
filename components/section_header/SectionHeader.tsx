"use client";
import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

const SectionHeader = ({ title }: { title: string }) => {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  return (
    <div
      ref={ref}
      className={`flex flex-col font-bold text-2xl mt-8 p-2 w-full text-green-600 ${
        inView ? "animate-in slide-in-from-top duration-1000" : "animate-out fade-out opacity-0"
      }`}
    >
      <AiOutlineProject size={50} />
      <span className="">{title.toUpperCase()}</span>
    </div>
  );
};

export default SectionHeader;

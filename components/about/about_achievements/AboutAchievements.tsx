"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const AboutAchievements = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "-50px",
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`flex flex-col gap-2 ${
        inView
          ? "animate-in fade-in slide-in-from-left-20 duration-500 "
          : "opacity-0"
      }`}
    >
      <div className="font-semibold text-xl text-blue-400">ACHIEVEMENTS</div>
      <div className="flex gap-2 flex-wrap items-center">
        <div className=" bg-stone-800 text-white p-4 rounded-xl flex flex-col items-center w-full md:max-w-fit">
          <span className="text-[1.2rem] font-semibold">PTE</span>
          <span className="text-[2rem] bg-gradient-to-tr  from-blue-400 to-blue-200 bg-clip-text text-transparent font-bold">
            74/90
          </span>
          <span className="italic opacity-80">(2021)</span>
          <div className="flex gap-2 mt-2">
            <div className="flex flex-col text-center">
              <span>Listening</span>
              <span>78</span>
            </div>
            <div className="flex flex-col text-center">
              <span>Reading</span>
              <span>72</span>
            </div>
            <div className="flex flex-col text-center">
              <span>Speaking</span>
              <span>89</span>
            </div>
            <div className="flex flex-col text-center">
              <span>Writing</span>
              <span>71</span>
            </div>
          </div>
        </div>
        <div className=" bg-stone-800 text-white p-4 rounded-xl flex flex-col items-center w-full md:max-w-fit">
          <span className="text-[1.2rem] font-semibold">IELTS</span>
          <span className="text-[2rem] bg-gradient-to-tr  from-blue-400 to-blue-200 bg-clip-text text-transparent font-bold">
            7.0/9.0
          </span>
          <span className="italic opacity-80">(2017)</span>
          <div className="flex gap-2 mt-2">
            <div className="flex flex-col text-center">
              <span>Listening</span>
              <span>7.5</span>
            </div>
            <div className="flex flex-col text-center">
              <span>Reading</span>
              <span>8.0</span>
            </div>
            <div className="flex flex-col text-center">
              <span>Speaking</span>
              <span>6.5</span>
            </div>
            <div className="flex flex-col text-center">
              <span>Writing</span>
              <span>6.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAchievements;

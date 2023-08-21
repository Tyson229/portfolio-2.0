'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer';

const AboutEducation = () => {
   const { ref, inView } = useInView({
     threshold: 0.5,
     rootMargin: "-50px",
     triggerOnce: true,
   });
  return (
    <div
      ref={ref}
      className={`flex flex-col gap-2 mb-8 ${
        inView
          ? "animate-in fade-in slide-in-from-left-20 duration-500 "
          : "opacity-0"
      }`}
    >
      <div className="font-semibold text-xl text-blue-400">EDUCATION</div>
      <div className="flex flex-col gap-2 bg-slate-700 p-4 text-white rounded-xl w-full md:max-w-fit">
        <span className="font-semibold">
          Bachelor of Information Communications and Technology
        </span>
        <span className="font-semibold">
          with{" "}
          <span className="text-[1.2rem] bg-gradient-to-tr  from-blue-400 to-blue-200 bg-clip-text text-transparent">
            Distinction
          </span>
        </span>
        <span className="italic opacity-80 text-[0.9rem]">2019-2022</span>
        <span className="font-semibold">at Western Sydney University</span>
      </div>
    </div>
  );
}

export default AboutEducation
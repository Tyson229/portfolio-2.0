"use client";

import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3, TbBrandNextjs } from "react-icons/tb";
import { BiLogoPhp, BiLogoTailwindCss, BiLogoReact } from "react-icons/bi";
import { SiJavascript, SiTypescript, SiVite, SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiSass } from "react-icons/di";
import { useInView } from "react-intersection-observer";

const Tech = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "-100px",
    triggerOnce: true,
  });
  const itemClass = "text-[3em] md:text-[3em] text-gray-700";
  const LOGOS = [
    <AiOutlineHtml5 className={`${itemClass}`} key={0} />,
    <TbBrandCss3 className={`${itemClass}`} key={1} />,
    <SiJavascript className={`${itemClass}`} key={2} />,
    <SiTypescript className={`${itemClass}`} key={3} />,
    <FaJava className={`${itemClass}`} key={4} />,
    <BiLogoPhp className={`${itemClass}`} key={5} />,
    <DiSass className={`${itemClass}`} key={6} />,
    <BiLogoTailwindCss className={`${itemClass}`} key={7} />,
    <BiLogoReact className={`${itemClass}`} key={8} />,
    <TbBrandNextjs className={`${itemClass}`} key={9} />,
    <SiVite className={`${itemClass}`} key={10} />,
    <SiMysql className={`${itemClass}`} key={11} />,
  ];
  return (
    <div
      ref={ref}
      className={`my-4 w-full overflow-hidden bg-white ${inView ? 'animate-in fade-in slide-in-from-bottom-20 duration-200 ease-linear' : 'opacity-0'}`}
    >
      <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[80px] md:w-[100px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[80px] md:w-[100px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;

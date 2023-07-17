import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3, TbBrandNextjs } from "react-icons/tb";
import { BiLogoPhp, BiLogoTailwindCss, BiLogoReact } from "react-icons/bi";
import { SiJavascript, SiTypescript, SiVite, SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiSass } from "react-icons/di";
import SectionHeader from "../section_header/SectionHeader";
const Tech = () => {
  return (
    <section className="w-full">
      <SectionHeader title="Tech" />

      <div className="mt-4 w-full grid grid-cols-6 place-items-center md:flex gap-8 justify-center">
        <AiOutlineHtml5 size={"auto"} className=" text-sky-500"/>
        <TbBrandCss3 size={"auto"} className=" text-sky-500"/>
        <SiJavascript size={"auto"} className=" text-sky-500"/>
        <SiTypescript size={"auto"} className=" text-sky-500"/>
        <FaJava size={"auto"} className=" text-sky-500"/>
        <BiLogoPhp size={"auto"} className=" text-sky-500"/>
        <DiSass size={"auto"} className=" text-sky-500"/>
        <BiLogoTailwindCss size={"auto"} className=" text-sky-500"/>
        <BiLogoReact size={"auto"} className=" text-sky-500"/>
        <TbBrandNextjs size={"auto"} className=" text-sky-500"/>
        <SiVite size={"auto"} className=" text-sky-500"/>
        <SiMysql size={"auto"} className=" text-sky-500"/>
      </div>
    </section>
  );
};

export default Tech;

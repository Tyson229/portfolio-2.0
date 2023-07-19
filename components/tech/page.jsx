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
    <section className="w-full flex flex-col gap-2">
      <SectionHeader title="Tech" />

      <div className="w-full grid grid-cols-6 place-items-center md:flex gap-8 justify-center">
        <AiOutlineHtml5 size={"auto"} />
        <TbBrandCss3 size={"auto"} />
        <SiJavascript size={"auto"} />
        <SiTypescript size={"auto"} />
        <FaJava size={"auto"} />
        <BiLogoPhp size={"auto"} />
        <DiSass size={"auto"} />
        <BiLogoTailwindCss size={"auto"} />
        <BiLogoReact size={"auto"} />
        <TbBrandNextjs size={"auto"} />
        <SiVite size={"auto"} />
        <SiMysql size={"auto"} />
      </div>
    </section>
  );
};

export default Tech;

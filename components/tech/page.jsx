import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3, TbBrandNextjs } from "react-icons/tb";
import { BiLogoPhp, BiLogoTailwindCss, BiLogoReact } from "react-icons/bi";
import { SiJavascript, SiTypescript, SiVite, SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiSass } from "react-icons/di";
const Tech = () => {
  return (
    <div className="grid grid-cols-6 place-items-center md:flex md:flex-row gap-8 opacity-80 p-2">
      <AiOutlineHtml5 size={"30"} />
      <TbBrandCss3 size={"30"} />
      <SiJavascript size={"30"} />
      <SiTypescript size={"30"} />
      <FaJava size={"30"} />
      <BiLogoPhp size={"30"} />
      <DiSass size={"30"} />
      <BiLogoTailwindCss size={"30"} />
      <BiLogoReact size={"30"} />
      <TbBrandNextjs size={"30"} />
      <SiVite size={"30"} />
      <SiMysql size={"30"} />
    </div>
  );
};

export default Tech;

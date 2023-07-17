import React from "react";
import { PiLinkedinLogoLight, PiGithubLogoLight } from "react-icons/pi";
import HeroBackground from "./HeroBackground";
import Image from "next/image";

const HeroIntroduction = () => {
  return (
    <section className="w-full flex flex-col justify-center z-10  ">
      
      <div className="w-full z-10 relative">
        <div className="text-lg">Hi, you've just met</div>
        <div className="text-4xl md:text-5xl font-bold">
          TIEN KHOA NGUYEN
        </div>
        <div className="flex font-light gap-3 mt-1 mb-3 relative">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full border border-zinc-400"></span>
            <span>Design</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full border border-zinc-400"></span>
            <span>Develop</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full border border-zinc-400"></span>
            <span>Deploy</span>
          </div>
        </div>
        </div>
    </section>
  );
};

export default HeroIntroduction;

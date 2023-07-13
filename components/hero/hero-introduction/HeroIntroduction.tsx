import React from "react";
import {
  PiLinkedinLogoLight,
  PiGithubLogoLight,
} from "react-icons/pi";
import HeroBackground from "../hero-background/HeroBackground";

const HeroIntroduction = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center relative">
      {/* <HeroBackground/> */}
      <div className="text-md relative z-10">Hi, you've just met</div>
      <div className="text-4xl font-bold text-sky-600 relative z-10">
        TIEN KHOA NGUYEN
      </div>

      <div className="flex text-sm font-light gap-2 mt-1 mb-4 relative">
        I build and deploy full-stack web application
      </div>

      <div className="flex gap-2">
        <PiGithubLogoLight size={28} className="opacity-70"/>
        <PiLinkedinLogoLight size={28} className="opacity-70"/>
      </div>
    </div>
  );
};

export default HeroIntroduction;

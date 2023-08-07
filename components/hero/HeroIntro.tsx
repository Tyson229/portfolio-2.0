"use client";
import React, { useContext, useEffect, useState } from "react";
import HeroSocials from "./HeroSocials";
import { FULL_NAME, TITLE } from "@/lib/data";
import AnimationContext from "./_AnimationContext";

const HeroIntro: React.FC = () => {
  const isAnimationStarted = useContext(AnimationContext);

  return (
    <div className="w-full flex flex-col grow justify-center gap-2  bg-cover">
      <div
        className={`text-3xl md:text-6xl animate-in fade-in slide-in-from-top-4 duration-1000`}
      >
        Hi,
      </div>

      <div
        className={`text-3xl md:text-6xl animate-in fade-in slide-in-from-top-4 duration-1000`}
      >
        you've just met
      </div>
      <div
        className={`text-7xl sm:text-7xl md:text-8xl font-extrabold animate-in fade-in slide-in-from-top-4 duration-1000`}
      >
        {FULL_NAME.toUpperCase()}
      </div>
      <div
        className={`text-md md:text-xl animate-in fade-in slide-in-from-top-4 duration-1000`}
      >
        {TITLE}
      </div>

      <HeroSocials
        properties={
          "flex md:hidden animate-in fade-in slide-in-from-top-4 duration-1000"
        }
      />
    </div>
  );
};

export default HeroIntro;

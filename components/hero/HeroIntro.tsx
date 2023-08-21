"use client";
import React, { useContext, useEffect, useState } from "react";
import HeroSocials from "./HeroSocials";
import { FULL_NAME, TITLE } from "@/lib/data";
import AnimationContext from "./_AnimationContext";

const HeroIntro: React.FC = () => {
  const isAnimationStarted = useContext(AnimationContext);

  return (
    <div className="w-full max-w-screen-xl flex flex-col grow justify-center gap-2">
      <div
        className={`text-2xl md:text-3xl animate-in fade-in slide-in-from-top-4 duration-500 text-stone-500`}
      >
        HI,
      </div>

      <div
        className={`text-2xl md:text-3xl animate-in fade-in slide-in-from-top-4 duration-500 text-stone-500`}
      >
        YOU'VE JUST MET
      </div>

      <div
        className={`text-7xl md:text-[6rem] w-full font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500  relative`}
      >
        {/* First Layer */}
        <div
          className={`h-full flex bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500 animate-in fade-in slide-in-from-top-4 absolute z-50 ${
            isAnimationStarted
              ? "w-0 transition-all delay-200 duration-200 ease-linear"
              : "w-full"
          }`}
        >
          <span
            className={`text-white ${
              isAnimationStarted
                ? "opacity-0 transition-all duration-200 ease-linear hidden"
                : "opacity-100"
            }`}
          >
            {FULL_NAME.toUpperCase()}
          </span>
        </div>
        {/* Second Layer */}
        <div
          className={`bg-gray-600 h-full animate-in fade-in slide-in-from-top-4 absolute z-40 ${
            isAnimationStarted
              ? "w-0 transition-all delay-300 duration-200 ease-linear"
              : "w-full"
          }`}
        ></div>
        {/* Third Layer */}
        <div
          className={`bg-gray-500 h-full animate-in fade-in slide-in-from-top-4 absolute z-30 ${
            isAnimationStarted
              ? "w-0 transition-all delay-500 duration-200 ease-linear"
              : "w-full"
          }`}
        ></div>

        {FULL_NAME.toUpperCase()}
      </div>

      <div
        className={`text-md md:text-xl animate-in fade-in slide-in-from-top-4 duration-1000 text-stone-500`}
      >
        {TITLE.toUpperCase()}
      </div>

      <HeroSocials
        properties={"flex animate-in fade-in slide-in-from-top-4 duration-1000"}
      />
    </div>
  );
};

export default HeroIntro;

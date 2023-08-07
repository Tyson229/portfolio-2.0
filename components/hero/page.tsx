"use client";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import HeroTitle from "./HeroTitle";
import HeroWrapper from "./HeroWrapper";
import HeroArrow from "./HeroArrow";
import HeroAbout from "./HeroAbout";
import HeroIntro from "./HeroIntro";
import AnimationContext from "./_AnimationContext";

const Hero = () => {
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimationStarted(() => true);
    }, 500);
  });
  return (
    <AnimationContext.Provider value={isAnimationStarted}>
      <HeroWrapper>
        <HeroTitle />
        <HeroIntro />
        <HeroAbout />
        <HeroArrow />
      </HeroWrapper>
    </AnimationContext.Provider>
  );
};

export default Hero;

import React from "react";
import HeroWrapper from "./hero-wrapper/HeroWrapper";
import HeroBackground from "./hero-background/HeroBackground";
import HeroIntroduction from "./hero-introduction/HeroIntroduction";

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroBackground/>
      <HeroIntroduction/>
      {/* <HeroPosition/> */}
    </HeroWrapper>
  );
};

export default Hero;

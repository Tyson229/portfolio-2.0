import React from "react";
import HeroWrapper from "./HeroWrapper";
import HeroBackground from "./HeroBackground";
import HeroIntroduction from "./HeroIntroduction";

const Hero = () => {
  return (
    <HeroWrapper>
      {/* <HeroBackground/> */}
      <HeroIntroduction/>
      {/* <HeroPosition/> */}
    </HeroWrapper>
  );
};

export default Hero;

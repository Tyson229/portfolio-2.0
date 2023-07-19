import React from "react";
import HeroWrapper from "./HeroWrapper";
import HeroBackground from "./HeroBackground";
import HeroIntroduction from "./HeroIntroduction";
import Header from "../header/page";

const Hero = () => {
  return (
    <HeroWrapper>
      {/* <Header/> */}
      {/* <HeroBackground/> */}
      <HeroIntroduction/>
      {/* <HeroPosition/> */}
    </HeroWrapper>
  );
};

export default Hero;

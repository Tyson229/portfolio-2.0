import React, { useContext } from "react";
import HeroSocials from "./HeroSocials";
import AnimationContext from "./_AnimationContext";

const HeroAbout = () => {
  const isAnimationStarted = useContext(AnimationContext);

  return (
    <div
      className={`md:grid grid-cols-2 items-end ${
        isAnimationStarted ? "animate-in fade-in duration-1000" : "opacity-0"
      }`}
    >
      <HeroSocials properties={"hidden md:flex shrink"} />
      <div className="">
        <div className="font-semibold text-stone-500">About</div>
        <div className="text-justify opacity-70 text-stone-500">
          I graduated my ICT degree in 2019 and started my journey as a software
          engineer as well as web developer since then. I got my opportunities
          to work in different types of projects: eShop, Calculator, Morse Code
          translator, Fake Windows 98...
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;

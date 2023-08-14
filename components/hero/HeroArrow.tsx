import React, { useContext } from "react";
import { AiOutlineDown } from "react-icons/ai";
import AnimationContext from "./_AnimationContext";

const HeroArrow = () => {
  const isAnimationStarted = useContext(AnimationContext);

  return (
    <div
      className={`w-full justify-end items-center flex ${
        isAnimationStarted ? "animate-bounce" : "opacity-0"
      }`}
    >
      <AiOutlineDown size={20} />
    </div>
  );
};

export default HeroArrow;

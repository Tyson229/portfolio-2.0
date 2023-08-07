import React, { RefObject, useContext, useEffect, useRef } from "react";
import Link from "next/link";
import { BsCodeSlash } from "react-icons/bs";
import { USERNAME } from "@/lib/data";
import AnimationContext from "./_AnimationContext";

const HeroTitle = () => {
  const isAnimationStarted = useContext(AnimationContext);

  return (
    <Link
      href={"/"}
      className={`flex items-center gap-2 ${
        isAnimationStarted ? "animate-in fade-in duration-1000" : "opacity-0"
      }`}
    >
      <BsCodeSlash size={25} />
      <span>{USERNAME}</span>
    </Link>
  );
};

export default HeroTitle;

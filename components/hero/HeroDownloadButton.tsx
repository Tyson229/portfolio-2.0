import React, { useContext } from "react";
import AnimationContext from "./_AnimationContext";
import Link from "next/link";

const HeroDownloadButton = () => {
  const isAnimationStarted = useContext(AnimationContext);
  return (
    <Link
      href={`/Khoa's Resume.pdf`}
      target="_blank"
      className={`mt-8 text-stone-100 font-semibold bg-slate-600 p-4 max-w-fit rounded-xl  ${
        isAnimationStarted ? "animate-in fade-in duration-200" : "opacity-0"
      }`}
    >
      DOWNLOAD CV
    </Link>
  );
};

export default HeroDownloadButton;

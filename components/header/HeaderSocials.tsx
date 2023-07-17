"use client";
import React from "react";
import Link from "next/link";
import {
  PiLinkedinLogoLight,
  PiGithubLogoLight,
  PiGithubLogoFill,
  PiLinkedinLogoFill,
} from "react-icons/pi";
import useHover from "./_utils/_useHover";

const HeaderSocials = ({ size, style }: { size: number; style?: string }) => {
  const linkHoverGitHub = useHover();
  const linkHoverLinkedin = useHover();
  return (
    <div className={`${style} justify-end items-center gap-3 mr-4 md:mr-0 `}>
      <Link
        href="#"
        onMouseEnter={linkHoverGitHub.handleMouseEnter}
        onMouseLeave={linkHoverGitHub.handleMouseLeave}
      >
        {linkHoverGitHub.isHovered ? (
          <PiGithubLogoFill size={size} />
        ) : (
          <PiGithubLogoLight size={size} />
        )}
      </Link>
      <Link
        href="#"
        onMouseEnter={linkHoverLinkedin.handleMouseEnter}
        onMouseLeave={linkHoverLinkedin.handleMouseLeave}
      >
        {linkHoverLinkedin.isHovered ? (
          <PiLinkedinLogoFill size={size} />
        ) : (
          <PiLinkedinLogoLight size={size} />
        )}
      </Link>
    </div>
  );
};

export default HeaderSocials;

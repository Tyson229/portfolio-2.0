"use client";
import React from "react";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const HeroSocials = ({ properties }: { properties: String }) => {
  return (
    <div className={`${properties} gap-4`}>
      <Link href="#" className=" opacity-70 hover:opacity-100">
        <AiFillGithub size={30} />
      </Link>
      <Link href="#" className=" opacity-70 hover:opacity-100">
        <AiFillLinkedin size={30} />
      </Link>
    </div>
  );
};

export default HeroSocials;

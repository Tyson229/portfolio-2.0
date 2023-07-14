"use client";
import Link from "next/link";
import React from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

interface HeaderLinksListProps {
  linksList: {
    url: String;
    title: String;
  }[];
  handleSidebar: () => void;
}

const HeaderLinksList: React.FC<HeaderLinksListProps> = ({
  linksList,

  handleSidebar,
}) => {
  return (
    <>
      <div className="md:hidden flex items-center justify-end grow">
        <button onClick={handleSidebar} className="flex flex-col gap-1 group ">
          <HiOutlineMenuAlt4 size={20} />  
        </button>
      </div>
      <div className="hidden md:flex gap-4 justify-end items-center grow">
        {linksList.map(({ url, title }, index) => (
          <Link className="group" key={index} href={url.toString()}>
            <span className=" group-hover:text-black">{title}</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-stone-500"></span>
          </Link>
        ))}
      </div>
      <div className="hidden md:block w-px bg-zinc-300 mx-4"></div>
    </>
  );
};

export default HeaderLinksList;

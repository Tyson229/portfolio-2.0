import { GITHUB_LINK, LINKEDIN_LINK } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="w-full max-w-screen-screen mt-8 grid grid-cols-2 p-8 bg-pattern bg-cover bg-slate-800 text-white">
      <div className="flex flex-col">
        <div className="text-lg">Tien Khoa Nguyen</div>
        <div className='text-sm'>ngyntienkhoa22999@gmail.com</div>  
        <div className='text-sm'>+84 339 015 545</div>  
        <div className='text-sm'>+61 401 345 564</div>  
      </div>
      <div className="flex gap-4 justify-end items-center">
        <Link href={GITHUB_LINK}>
          <AiFillGithub size={30} />
        </Link>
        <Link href={LINKEDIN_LINK}>
          <AiFillLinkedin size={30} />
        </Link>
        
      </div>
    </section>
  );
};

export default Footer;

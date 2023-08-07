import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="w-full max-w-screen-2xl mt-8 bg-black grid grid-cols-2 p-4">
      <div className="flex flex-col">
        <div className="text-lg">Tien Khoa Nguyen</div>
        <div className='text-sm'>ngyntienkhoa22999@gmail.com</div>  
        <div className='text-sm'>+84 339 015 545</div>  
        <div className='text-sm'>+61 401 345 564</div>  
      </div>
      <div className="flex gap-4 justify-end items-center">
        <Link href={"#"}>
          <AiFillGithub size={30} />
        </Link>
        <Link href={"#"}>
          <AiFillLinkedin size={30} />
        </Link>
        
      </div>
    </section>
  );
};

export default Footer;

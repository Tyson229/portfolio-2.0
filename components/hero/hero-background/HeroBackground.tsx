import Image from "next/image";
import React from "react";

const HeroBackground = () => {
  return (
    // <Image
    //   src={"/profile.jpg"}
    //   width={300}
    //   height={300}
    //   unoptimized
    //   alt="profile picture"
    //   className=" w-56"
    // />
    <div className="z-0">
      <div className="w-32 h-48 rounded-full bottom-0 bg-orange-500 absolute mix-blend-multiply"></div>
      {/* <div className="mix-blend-multiple w-48 h-48 bg-[#FF8F61] absolute rounded-full top-0 z-10 mix-blend-multiply blur-2xl"></div>
      <div className="mix-blend-multiple w-64 h-64 bg-[#FF5C35] absolute rounded-full bottom-0 right-3 z-0 mix-blend-multiply blur-2xl"></div> */}
      {/* <div className="mix-blend-multiple w-48 h-48 bg-red-500 absolute blur-lg rounded-full "></div>
      <div className="mix-blend-multiple w-48 h-48 bg-yellow-300 absolute blur-lg rounded-full top-0 right-2"></div> */}
    </div>
  );
};

export default HeroBackground;

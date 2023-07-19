import React from "react";
import HeaderWrapper from "./HeaderWrapper";
import HeaderTitle from "./HeaderTitle";
import HeaderLinksList from "./HeaderLinksList";
import HeaderSocials from "./HeaderSocials";
import { BsArrowDown } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiOutlineDown } from "react-icons/ai";
import Link from "next/link";

interface HeaderProps {
  title: string;
  linksList: { url: string; title: string }[];
  handleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, linksList, handleSidebar }) => {
  return (
    // <HeaderWrapper>
    //   <HeaderTitle title={title} />
    //   <HeaderLinksList linksList={linksList} handleSidebar={handleSidebar} />
    //   <HeaderSocials size={27} style="hidden md:flex" />
    // </HeaderWrapper>
    <section className="flex flex-col w-full max-w-screen-2xl p-4 h-screen lg:p-8 gap-8">
      <div className="flex opacity-70">
        <HeaderTitle title={"khoangyn"} />
        <div className="flex flex-col ">
          <div className="text-xs">web developer</div>
          <div className="text-xs">19-22</div>
        </div>
      </div>
      <div className="w-full flex flex-col grow justify-center gap-2  bg-cover">
        <div className="text-3xl md:text-6xl">Hi,</div>
        <div className="text-3xl md:text-6xl">you've just met</div>
        <div className="text-7xl sm:text-8xl md:text-9xl font-extrabold bg-clip-text bg-gradient-to-r text-transparent from-sky-400 via-slate-300 to-purple-300">
          TIEN KHOA NGUYEN
        </div>
        <div className="text-md md:text-xl">
          Full-stack Developer / Front-end Designer
        </div>
        <div className="flex gap-4 md:hidden">
          <Link href="#" className=" opacity-70 hover:opacity-100">
            <AiFillGithub size={30} />
          </Link>
          <Link href="#" className=" opacity-70 hover:opacity-100">
            <AiFillLinkedin size={30} />
          </Link>
        </div>
 
      </div>
      <div className="md:grid grid-cols-2 items-end">
        <div className="gap-4 hidden md:flex shrink">
          <Link href="#" className=" opacity-70 hover:opacity-100">
            <AiFillGithub size={30} />
          </Link>
          <Link href="#" className=" opacity-70 hover:opacity-100">
            <AiFillLinkedin size={30} />
          </Link>
        </div>
        <div className="">
          <div className="font-semibold">About</div>
          <div className="text-justify opacity-70 text-sm">
            I graduated my ICT degree in 2019 and started my journey as a
            software engineer as well as web developer since then. I got my
            opportunities to work in different types of projects: eShop,
            Calculator, Morse Code translator, Fake Windows 98...
          </div>
        </div>
      </div>

      <div className="animate-bounce self-end">
        <AiOutlineDown size={20} />
      </div>
    </section>
  );
};

export default Header;

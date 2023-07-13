import React from "react";
import Link from "next/link";
import { BsCodeSlash } from "react-icons/bs";

interface HeaderTitleProps {
  title: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title }) => {
  return (
    <Link href={'/'} className="flex items-center gap-2">
      <BsCodeSlash size={25} />
      <span className="font-semibold">{title}</span>
    </Link>
  );
};

export default HeaderTitle;

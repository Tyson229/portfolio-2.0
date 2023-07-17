import React from "react";
import HeaderWrapper from "./HeaderWrapper";
import HeaderTitle from "./HeaderTitle";
import HeaderLinksList from "./HeaderLinksList";
import HeaderSocials from "./HeaderSocials";

interface HeaderProps {
  title: string;
  linksList: { url: string; title: string }[];
  handleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  linksList,
  handleSidebar,
}) => {
  return (
    <HeaderWrapper>
      <HeaderTitle title={title} />
      <HeaderLinksList linksList={linksList} handleSidebar={handleSidebar} />
      <HeaderSocials size={27} style="hidden md:flex" />
    </HeaderWrapper>
  );
};

export default Header;

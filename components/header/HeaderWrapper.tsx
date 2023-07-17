import React, { ReactNode } from "react";

interface HeaderWrapperProps {
  children: ReactNode;
}

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children }) => {
  return (
    <header className="flex w-full p-4 md:p-8 fixed top-0 z-20">
      {children}
    </header>
  );
};

export default HeaderWrapper;

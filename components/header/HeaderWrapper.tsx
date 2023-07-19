import React, { ReactNode } from "react";

interface HeaderWrapperProps {
  children: ReactNode;
}

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children }) => {
  return (
    <header className="flex w-full max-w-screen-2xl p-4 md:p-8">
      {children}
    </header>
  );
};

export default HeaderWrapper;

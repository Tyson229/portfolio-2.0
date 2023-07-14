import React, { ReactNode } from "react";

interface HeroWrapperProps {
  children: ReactNode;
}

const HeroWrapper: React.FC<HeroWrapperProps> = ({ children }) => {
  return <div className="w-full h-full flex flex-col">{children}</div>;
};

export default HeroWrapper;

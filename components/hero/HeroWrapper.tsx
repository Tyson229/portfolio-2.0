import React, { ReactNode } from "react";

interface HeroWrapperProps {
  children: ReactNode;
}

const HeroWrapper: React.FC<HeroWrapperProps> = ({ children }) => {
  return <div className="w-full h-[85vh] md:h-[40vh] flex justify-center flex-col relative">{children}</div>;
};

export default HeroWrapper;

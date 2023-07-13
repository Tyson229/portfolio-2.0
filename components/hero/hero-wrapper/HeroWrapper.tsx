import React, { ReactNode } from "react";

interface HeroWrapperProps {
  children: ReactNode;
}

const HeroWrapper:React.FC<HeroWrapperProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center w-full max-w-screen-2xl h-[60vh] relative">
      {children}
    </div>
  );
};

export default HeroWrapper;

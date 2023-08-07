import React, { ReactNode } from "react";

interface HeroWrapperProps {
  children: ReactNode;
}

const HeroWrapper: React.FC<HeroWrapperProps> = ({ children }) => {
  return (
    <section className="flex flex-col w-full max-w-screen-xl h-screen p-4 lg:p-8 gap-8">
      {children}
    </section>
  );
};

export default HeroWrapper;

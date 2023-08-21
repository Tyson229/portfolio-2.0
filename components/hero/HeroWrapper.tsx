import React, { ReactNode } from "react";

interface HeroWrapperProps {
  children: ReactNode;
}

const HeroWrapper: React.FC<HeroWrapperProps> = ({ children }) => {
  return (
    <section className="flex flex-col w-full min-h-screen items-center p-4 md:p-12 bg-pattern bg-no-repeat bg-center bg-cover">
      {children}
    </section>
  );
};

export default HeroWrapper;

import React, { ReactNode } from "react";

interface HeroWrapperProps {
  children: ReactNode;
}

const HeroWrapper: React.FC<HeroWrapperProps> = ({ children }) => {
  return (
    <section className="flex flex-col w-full min-h-screen max-w-screen-2xl p-4 md:p-12">
      {children}
    </section>
  );
};

export default HeroWrapper;

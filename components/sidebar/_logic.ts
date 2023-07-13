import { useEffect, useRef } from "react";

export const sidebarClass = (isOpen: boolean) => {
  const sidebarStyles = `w-1/2 fixed bg-zinc-200 h-screen flex flex-col md:hidden right-0 z-50 text-zinc-700 transition-transform transform duration-500 ease-in-out p-4 ${
    isOpen ? "translate-x-0" : "translate-x-full "
  }`;
  return sidebarStyles;
};


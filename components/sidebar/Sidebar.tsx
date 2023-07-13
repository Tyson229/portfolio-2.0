'use client'

import Link from "next/link";
import React, {Dispatch, SetStateAction, useEffect, useRef} from "react";
import { AiOutlineClose } from "react-icons/ai";
import { sidebarClass } from "./_logic";

interface HeaderWrapperProps {
  isOpen: boolean,
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
  linksList: {url: string, title: string}[],
  
}

const Sidebar:React.FC<HeaderWrapperProps> = ({ isOpen, setIsSidebarOpen, linksList }) => {

  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node))
        setIsSidebarOpen(false);
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <aside
      ref={sidebarRef}
      className={sidebarClass(isOpen)}
    >
      <div className="flex w-full justify-end align-middlej mb-2">
        <button onClick={()=>setIsSidebarOpen(false)}>
          <AiOutlineClose size={22} />
        </button>
      </div>

      <div className="flex flex-col gap-3 text-md p-2">
        {linksList.map(({ url, title }, index) => (
          <Link className="hover:font-semibold " key={index} href={url} onClick={()=>setIsSidebarOpen(false)}>
            {title}
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-3 text-md">
          
      </div>
    </aside>
  );
};

export default Sidebar;

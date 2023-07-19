"use client";

import { Montserrat } from "next/font/google";
import "./global.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/Footer";
import Sidebar from "@/components/sidebar/Sidebar";
import { useState } from "react";
import { LINKS_LIST, SIDEBAR_LINKS, TITLE } from "@/lib/data";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Tyson Nguyen",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="en">
      {/* <body className={`${montserrat.className} bg-zinc-800 text-stone-200 flex flex-col items-center `}>
        
        <Sidebar
          isOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          linksList={SIDEBAR_LINKS}
        />
        <div className={`${isSidebarOpen ? "blur-sm opacity-25 " : ""} z-0 md:blur-0 md:opacity-100 transition ease-in-out duration-300 relative flex flex-col items-center w-full`}>
        <Header
          title={TITLE}
          linksList={LINKS_LIST}
          handleSidebar={handleSidebar}
        />
          {children}
          <Footer />
        </div>
      </body> */}
      <body className={`${montserrat.className} bg-zinc-800 text-stone-200 flex flex-col justify-center items-center bg-pattern bg-no-repeat bg-center bg-cover overflow-x-hidden`}>
        <Header
          title={TITLE}
          linksList={LINKS_LIST}
          handleSidebar={handleSidebar}
        />
        {children}
      </body>
    </html>
  );
}

import React from "react";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-2 my-2">
      <div className="w-5 h-5 bg-gradient-to-br from-yellow-500 via-orange-400 to-red-600 rounded-full"></div>
      <div className="font-semibold text-lg md:text-xl bg-gradient-to-br from-yellow-500 via-orange-400 to-red-600 text-transparent bg-clip-text">{title.toUpperCase()}</div>
    </div>
  );
};

export default SectionHeader;

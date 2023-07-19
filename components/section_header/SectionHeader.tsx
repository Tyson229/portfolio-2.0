import React from "react";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex font-bold text-2xl mt-4 lg:mt-0 items-center ">{title.toUpperCase()}</div>
  );
};

export default SectionHeader;

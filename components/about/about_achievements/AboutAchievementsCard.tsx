import React from "react";

const AboutAchievementsCard = ({ title }: { title: String }) => {
  return (
    <div className="square border-2 flex flex-col">
      <div>{title}</div>
      <div>7.0</div>
      <div className="flex">
        <div>Speaking</div>
        <div>Listening</div>
        <div>Reading</div>
        <div>Writing</div>
      </div>
    </div>
  );
};

export default AboutAchievementsCard;

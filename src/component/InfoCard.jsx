// InfoCard.jsx
import React from "react";

const InfoCard = ({ icon, title, description, iconBg = "#D6E9FF" }) => {
  return (
    <div className="bg-white flex flex-col py-6  px-3 rounded-lg shadow-lg space-y-4">
      <div
        className="rounded-full w-16 h-16 flex items-center justify-center"
        style={{ backgroundColor: iconBg }}
      >
        <img src={icon} alt="icon" className="w-10 h-8" />
      </div>

      <h1 className="font-sora font-semibold text-[18px] leading-[33px] tracking-[-1px] ">
        {title}
      </h1>

      <p className="font-sora font-normal text-[12px] leading-[20px] tracking-[0] ">
        {description}
      </p>
    </div>
  );
};

export default InfoCard;

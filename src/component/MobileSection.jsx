import React, { useState } from "react";
import { Link } from "react-router-dom"; // or just use <a> if you're not using routing


import Gocar from "../assets/Gocar.png";
import Layer from "../assets/layer.png";
import food from "../assets/food.png";
import bill from "../assets/bill.png";




const mobileContent = [
  {
    icon: Gocar,
    heading: "Book a Ride",
    description:
      "Get safe and reliable rides at affordable rates.",
    link: "#goride",
  },
  {
    icon: food,
    heading: "Order Food",
    description:
      "Skip the kitchen, savor the moment with freshly delivered meals.",
    link: "#goeat",
  },
  {
    icon: Layer,
    heading: "Send a package",
    description:
      "Send and receive items quickly without any hassle.",
    link: "#godelivery",
  },
  {
    icon: bill,
    heading: "Pay Bills",
    description:
      "Make transactions safely without glitches",
    link: "#golaundry",
  },
];

const MobileSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = mobileContent[activeIndex];

  return (
    <div className="block md:hidden space-y-6 ">
      {/* Top Content */}
      <div className="rounded-sm shadow-sm bg-white p-4 space-y-4">
        <div className="rounded-full w-[86px] h-[86px] flex items-center justify-center bg-[#B3D6FF]">
          <img src={activeItem.icon} alt="icon" className="w-[50px] h-[50px]" />
        </div>
        <h1 className="text-[30px] font-sora text-[#000000] font-extrabold  w-full">
          {activeItem.heading}
        </h1>
        <p className="text-[#605E5C] text-[12px] font-manrope">
          {activeItem.description}
        </p>
        <Link
          to={activeItem.link}
          className="text-[#F1BC00] font-manrope underline text-[14px]"
        >
          Learn More
        </Link>
      </div>

      {/* Clickable Icons */}
      <div className="flex justify-between">
        {mobileContent.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`rounded-full w-16 h-16 flex items-center justify-center border transition ${
              index === activeIndex ? "bg-[#F5FAFF] border-[#0176FF]" : "bg-white"
            }`}
          >
            <img src={item.icon} alt={`icon-${index}`} className="w-10 h-8" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileSection;

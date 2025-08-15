import React from "react";
import RoundedButton from "../component/RoundedButton";
import { IoMdCheckmarkCircle } from "react-icons/io";
import Girl from "../assets/girlbill.png";
import Object from "../assets/Object.png";
import Frame from "../assets/Frame 281346.png";
import White from "../assets/white.png";
import Black from "../assets/black.png";

const Satisfying = () => {
  return (
    <div className="flex flex-col justify-end my-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center  sm:px-6 lg:px-8 py-8">
        {/* Left Section */}
        <div className="space-y-6 bg-white border-2 rounded-3xl m-4 shadow-md px-4 py-6 md:px-8 md:py-8 h-auto md:h-[643px]">
          <h1 className="font-bold text-[32px] sm:text-[36px] md:text-[42px] leading-tight md:leading-[46px] tracking-[-0.04em] font-sora">
            <strong className="text-[#0176FF]">Satisfying</strong> every <br /> craving.
          </h1>
          <p className="font-normal text-[14px] sm:text-[16px] md:text-[16px] leading-[22px] md:leading-[24px] font-manrope">
            Skip the kitchen, savor the moment with freshly delivered meals. Hungry for something awesome?
          </p>
          <div>
            <RoundedButton
              to="/about"
              text="Start Ordering"
              variant="primary"
              className="transition-colors duration-300 w-48 sm:w-48 flex items-center "
            />
          </div>

          {/* Desktop badges & images */}
          <div className="hidden md:flex items-baseline gap-3 justify-between relative top-[70px]">
            <img src={Object} alt="cutlery" className="" />
            <img src={Frame} alt="Frame" className="" />
          </div>

          {/* Mobile simplified image */}
          <div className="block md:hidden mt-6">
            <img src={White} alt="White visual" className="w-full object-contain" />
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6 bg-black text-white border-2 rounded-3xl m-4 shadow-md px-3 py-6 md:px-8 md:py-8 h-auto md:h-[643px] relative">
          <h1 className="font-bold text-[30px] sm:text-[36px] md:text-[42px] leading-tight md:leading-[46px] tracking-[-0.04em] font-sora">
            <strong className="text-[#DAAB00]">Bills?</strong> Conquer them with one click
          </h1>
          <p className="font-normal text-[12px] sm:text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] font-manrope">
            Wave goodbye to bill woes. One click, zero stress. Ready to take control?
          </p>
          <div className="space-y-6">
            <RoundedButton
              to="/about"
              text="Start Ordering"
              variant="secondary"
              className="transition-colors duration-300 w-40 flex items-center justify-center sm:w-40"
            />
          </div>

          {/* Desktop badges + positioned image */}
          <div className="rounded-xl relative ml-0 bottom-0 p-2 hidden md:block md:ml-[12.5rem] md:bottom-[-52px]">
            <div className="space-y-3 top-[9rem] left-0 absolute">
              {["Fund Receive", "Fund Transferred", "Bill Paid"].map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white text-gray-600 rounded-full px-3 py-2 shadow w-fit text-sm"
                >
                  <IoMdCheckmarkCircle className="text-green-500" />
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <div className="w-[220px] h-[320px] top-[-13px] left-[6rem] absolute flex items-center justify-center">
              <img
                src={Girl}
                alt="Delicious food"
                className="w-full h-[20rem] object-contain"
              />
            </div>
          </div>

          <div>

          </div>
          {/* Mobile simplified image */}
          <div className="block md:hidden mt-6">
            <img src={Black} alt="Black visual" className="w-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Satisfying;

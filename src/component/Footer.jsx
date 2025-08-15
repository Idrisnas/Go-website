import React from "react";
import backgroundImage from "../assets/BG.png";
import Gasp from "./Gasp";
import CarImage from "../assets/Car.png";
import Google from "../assets/Google.png";
import Apple from "../assets/Apple.png";
import couple from "../assets/couple.png";
import { Link } from "react-router-dom";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
<div>
    
    <div className="bg-black text-white">
      <Gasp carImage={CarImage} />
      
      {/* Main Section with Background */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-[95%] sm:w-[50%] md:w-[80%] space-y-6 p-6 relative mx-auto rounded-lg bg-gray-800/50 mt-28 sm:mt-10 sm:mb-0"
      >
        {/* Couple image for small screens */}
        <div className="block md:hidden flex justify-center">
          <img src={couple} alt="Couple" className=" absolute top-[-160px] w-52 mt-8" />
        </div>

        {/* Text Section */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-2xl md:text-5xl font-bold">
            Join the Future of <br /> Everyday Living
          </h1>
          <p className="text-white text-sm md:text-base">
           Thousands are already making the switch to smarter living with GoApp. Ready to simplify your day?
          </p>
          <div className="flex gap-3 items-center justify-center md:justify-start">
            <Link>
              <img src={Apple} alt="Apple" className="w-28" />
            </Link>
            <Link>
              <img src={Google} alt="Google" className="w-28" />
            </Link>
          </div>
        </div>

        {/* Couple image for larger screens */}
        <div className="hidden md:block">
          <img
            src={couple}
            alt="Couple"
            className="absolute top-[-100px] right-0 w-48 md:w-[600px]"
          />
        </div>
      </div>

      {/* Subscribe Section */}
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "",
        }}
        className="mt-2 md:mt-36 p-4  max-w-6xl mx-auto"
      >
        <div className="border-b border-gray-50/50 pb-14 ">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center md:items-start">
            <div className="space-y-6 text-center md:text-left ">
              <h1 className="text-gray-500 font-sora font-normal text-[18px] leading-[100%] tracking-[0] ">Get Latest Updates</h1>
              <h1 className="text-white text-[20px] md:text-[32px] font-sora font-bold ">
                Subscribe to our newsletter
              </h1>
            </div>

            {/* Subscription Input */}
            <div className="w-full md:w-[600px] max-w-md mx-auto">
              <div className="relative flex p-2">
                <input
                  type="text"
                  placeholder="Enter your email..."
                  className="w-full py-2 md:py-4 pl-4 pr-20 rounded-full border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#121212] text-start text-sm sm:text-base"
                />
                <button className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-1 md:px-6 md:py-2 rounded-full hover:bg-blue-600 text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <FooterLinks />
    </div>
    </div>

  );
};

export default Footer;

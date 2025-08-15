import React from "react";
import VerticalSlider from "./VerticalSlider";
import Gohero from "../assets/Go-hero.png";
import Background from "../assets/background.png";
import Typography from "./Typography";
import RoundedButton from "./RoundedButton";

import beyond from "../assets/beyond.png";
import iconLeft from "../assets/btn-img.png";
import iconRight from "../assets/play.png";
import getStoreLink from "../component/GetStoreLink";

const HeroPage = () => {
  return (
    <div
      className="mt-10 w-full"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      <div className="px-4 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-6xl mx-auto gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-[60%] text-center lg:text-left">
            <img src={Gohero} alt="Gohero" className="mx-auto lg:mx-0" />
            <img src={beyond} alt="Beyond" className="w-48 md:w-60 lg:w-72 mt-4 mx-auto lg:mx-0" />

            <Typography variant="body" className=" font-bold mt-2">
              One App for your everyday lifestyle
            </Typography>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-4">
              <RoundedButton
                to={getStoreLink()}
                text="Download App"
                variant="black"
                iconRight={iconRight}
                iconLeft={iconLeft}
              />
            </div>
          </div>

          {/* Vertical Slider */}
          <div className="w-full lg:w-[40%] mt-10 lg:mt-0">
            <VerticalSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

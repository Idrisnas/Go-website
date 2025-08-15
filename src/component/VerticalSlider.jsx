import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import one from "../assets/one.png";
import two from "../assets/two.png";

import three from "../assets/three.png";
import four from "../assets/four.png";

import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

// Slides: Image + Caption
const slides = [
  {
    image: one,
    text: "Seemlessly book your ride",
  },
  {
    image: two,
    text: "Swift Transaction",
  },
  {
    image: three,
    text: "Your delivery in a splash",
  },
  {
    image: four,
    text: "Every order at your door step",
  },
];

// Custom arrow components


const VerticalSlider = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    // nextArrow: <CustomNextArrow />,
    // prevArrow: <CustomPrevArrow />,
    appendDots: (dots) => (
      <div className="absolute z-20" style={{ top: "30%", right: "10px" }}>
        <ul className="flex flex-col space-y-2 bg-black/20 w-5 py-2 rounded-sm ">
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3  rounded-full border border-white transition-all duration-300" />
    ),
  };

  return (
    <div className="relative w-[full]  h-[400px] mx-auto overflow-hidden rounded-xl   ">
      <div className="relative h-full">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="h-[400px] relative  ">
              <img
                src={slide.image}
                alt={`slide-${index}`}
                className="w-full h-full object-cover rounded-xl"
              />

              <div className="absolute bottom-0 left-0 w-60  text-white font-sora font-semibold text-[28px] leading-[40px] tracking-[-0.03em] mb-5 p-4 rounded-b-xl ">
                {slide.text}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VerticalSlider;

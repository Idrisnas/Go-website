import React from "react";
import Typography from "./Typography";

const FeatureSection = ({
  heading,
  subheading,
  title,
  imageSrc,
  backgroundColor = "bg-yellow-50",
}) => {
  return (
    <div
      className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 my-10 space-y-8 ${backgroundColor}`}
    >
      {/* Heading */}
      <h1
        className="font-sora font-bold text-3xl sm:text-5xl md:text-[68px] leading-tight sm:leading-[1.1] tracking-tight sm:tracking-[-0.03em] "
        dangerouslySetInnerHTML={{ __html: heading }}
      />

      {/* Subheading */}
      <Typography
        variant="subheading"
        className="mt-4 max-w-xl sm:max-w-2xl text-[#4d4c4c]"
      >
        {subheading}
      </Typography>

      <div className="flex flex-col lg:flex-row mt-8 gap-6 lg:gap-10">
        {/* Title */}
        <div className="bg-white w-full lg:w-1/3 flex   px-4 py-8">
          <h2
            className=" font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight tracking-tight text-[#E1DFDD] text-start lg:text-left"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>

        {/* Image */}
        <div className="w-full lg:w-2/3 px-4">
          <img
            src={imageSrc}
            alt="Ride visual"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

import React from "react";
import RoundedButton from "./RoundedButton";

const Beyond = ({
  imageUrl,
  heading,
  description,
  primaryButton,
  secondaryButton,
  reverse = false,
  backgroundColor = "bg-yellow-100", // default background color
}) => {
  return (
    <div className={`w-full m-0 p-0 ${backgroundColor}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-2 sm:px-6 lg:px-0 py-10">
        {/* Image Section */}
        <div className={`${reverse ? "order-1 md:order-2" : "order-1"}`}>
          <img
            src={imageUrl}
            alt="Beyond section"
            className="w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div className={`space-y-5 flex flex-col items-center md:items-start text-center md:text-start text-black ${reverse ? "order-2 md:order-1" : "order-2"}`}>
          <h2
            className="font-sora font-bold text-[26px] sm:text-[30px] md:text-[42px] leading-[110%] tracking-[-0.02em] sm:tracking-[-0.03em] md:tracking-[-0.04em]  "
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <p className="font-sora font-normal text-[14px] sm:text-[17px] md:text-[18px] leading-[26px] sm:leading-[26px] md:leading-[28px] tracking-normal">
            {description}
          </p>

          <div className="flex flex-col   gap-3 sm:gap-4">
            {primaryButton && (
              <RoundedButton
                to={primaryButton.to}
                text={primaryButton.text}
                variant="primary"
                className="w-60 flex items-center justify-center"
              />
            )}
            {secondaryButton && (
              <RoundedButton
                to={secondaryButton.to}
                text={secondaryButton.text}
                variant="outline"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beyond;

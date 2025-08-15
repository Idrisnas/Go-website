import React from "react";
import { Link } from "react-router-dom";

const RoundedButton = ({
  to,
  text,
  variant = "primary",
  iconLeft = null,
  iconRight = null,
  image = null,
  className = "",
  ...props
}) => {
  const baseClasses =
    "rounded-full transition-all duration-300 ease-in-out text-sm flex items-center ";

  const styles = {
    primary: `bg-black font-sora font-normal text-[14px] leading-[26px] tracking-[0] text-white text-center  text-white text-[14px] hover:bg-[#FDD300] hover:text-black py-[10px] px-10 ${baseClasses}`,
    outline: `bg-white text-black text-[12px] hover:bg-yellow-300 hover:text-white px-3 py-2 lg:py-[12px] lg:px-[21px]  ${baseClasses}`,
    secondary: `bg-[#FDD300]  text-black   px-3 py-2 lg:py-[12px] lg:px-[21px] ${baseClasses} `,
   black: `bg-white text-black  md:text-[14px] hover:bg-[#FDD300] hover:text-white py-2 px-2 md:py-3 md:px-6 border ${baseClasses}`,
   whiteWithIcons: `bg-black text-white text-[14px] hover:bg-[#FDD300] hover:text-black md:py-3 md:px-6 py-2 px-4 ${baseClasses}`,


  };

  const content = (
    <>
      {/* === Primary / Outline === */}
      {(variant === "primary" || variant === "outline") && (
        <>
          <span>{text}</span>
          {(iconLeft || iconRight) && (
            <div className="flex items-center gap-1 ml-2 pl-2">
              {iconLeft && (
                <span className="w-4 h-4">
                  <img
                    src={iconLeft}
                    alt="left icon"
                    className="w-full h-full object-contain"
                  />
                </span>
              )}
              {iconRight && (
                <div className="pl-2 border-l border-black">
                  <span className="w-4 h-4">
                    <img
                      src={iconRight}
                      alt="right icon"
                      className="w-full h-full object-contain"
                    />
                  </span>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* === Secondary === */}
      {variant === "secondary" && (
        <>
          <span className="font-sora font-medium text-[12px] lg:text-[16px] leading-[100%] tracking-[-0.02em]">
            {text}
          </span>
          {image && (
            <span className="ml-2 w-5 h-5">
              <img
                src={image}
                alt="icon"
                className="w-full h-full object-contain"
              />
            </span>
          )}
        </>
      )}

      {/* === Black Variant  === */}
 {variant === "black" && (
  <>
    <span className="font-sora font-medium text-[10px] md:text-[14px] leading-[26px] tracking-[0]">
      {text}
    </span>
    {(iconLeft || iconRight) && (
      <div className="flex items-center gap-2 ml-2 pl-2">
        {iconLeft && (
          <div className="md:w-8 md:h-8 rounded-full bg-black flex items-center justify-center">
            <img
              src={iconLeft}
              alt="left icon"
              className="w-6 h-6 object-contain"
            />
          </div>
        )}
        {iconRight && (
          <div className="pl-2 border-l border-black">
            <div className="md:w-8 md:h-8 rounded-full bg-black flex items-center justify-center">
              <img
                src={iconRight}
                alt="right icon"
                className="w-6 h-6 object-contain"
              />
            </div>
          </div>
        )}
      </div>
    )}
  </>
)}



{variant === "whiteWithIcons" && (
  <>
    <span className="font-sora font-medium text-[10px] md:text-[14px] leading-[26px] tracking-[0]">
      {text}
    </span>
    {(iconLeft || iconRight) && (
      <div className="flex items-center gap-2 ml-2 pl-2">
        {iconLeft && (
          <div className="md:w-8 md:h-8 w-6 h-6 rounded-full bg-white flex items-center justify-center">
            <img
              src={iconLeft}
              alt="left icon"
              className="w-4 h-4 object-contain"
            />
          </div>
        )}
        {iconRight && (
          <div className="pl-2 border-l border-black">
            <div className="md:w-8 md:h-8 w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <img
                src={iconRight}
                alt="right icon"
                className="w-4 h-4 object-contain"
              />
            </div>
          </div>
        )}
      </div>
    )}
  </>
)}


    </>
  );

  // If 'to' is an external link, render <a>
  if (
    typeof to === "string" &&
    (to.startsWith("http://") || to.startsWith("https://"))
  ) {
    return (
      <a
        href={to}
        className={`${styles[variant]} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  // Otherwise, render <Link>
  return (
    <Link to={to} className={`${styles[variant]} ${className}`} {...props}>
      {content}
    </Link>
  );
};

export default RoundedButton;

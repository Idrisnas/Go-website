import React, { useState, useEffect } from "react";
import Typography from "./Typography";
import MobileSection from "./MobileSection";


const content = [
  {
    title: "GoRide",
    heading: "Book a ride",
    description:
      "Get where you need to be, quickly and safely. Book reliable rides with just a few taps.",
    image:
      "https://framerusercontent.com/images/5KdnekvgGP9APC5GkQbRnyClgE.jpg?scale-down-to=1024",
    link: "#goride",
  },
  {
    title: "GoEat",
    heading: "Order food",
    description:
      "Discover great food around you and get it delivered fast. Whether it’s lunch at work or dinner at home, we’ve got you covered.",
    image:
      "https://framerusercontent.com/images/OAnUVItYBcqCyta04ThlRxYGks.jpg?scale-down-to=512",
    link: "#goeat",
  },
  {
    title: "GoDelivery",
    heading: "Send a package",
    description:
      "Need to send a package? Our trusted network ensures fast and secure delivery across your city.",
    image:
      "https://framerusercontent.com/images/6thT22GbZVa7HQEYw5l2KM5qGU.jpg?scale-down-to=512",
    link: "#godelivery",
  },
  {
    title: "GoLaundry",
    heading: "Do your laundry",
    description:
      "Schedule your laundry pickup and get your clothes professionally cleaned without interrupting your day.",
    image:
      "https://framerusercontent.com/images/M53QVxpYVI9XFP37MBjEnpfBg.jpg?scale-down-to=512",
    link: "#golaundry",
  },
  {
    title: "GoGrocery",
    heading: "Buy groceries",
    description:
      "Restock your essentials with ease. Fresh groceries delivered right to your doorstep.",
    image:
      "https://framerusercontent.com/images/3eWVDGnnIeCH9EfvrOEOXQwy4cU.jpg?scale-down-to=512",
    link: "#gogrocery",
  },
  {
    title: "GoPay",
    heading: "Pay bills & more",
    description:
      "Handle all your bills in one place. Pay for electricity, airtime, data, and more — securely and stress-free.",
    image:
      "https://framerusercontent.com/images/iuymvve9KCl9vls4epH2qan9U.jpg?scale-down-to=512",
    link: "#gopay",
  },
];


const MultiAccordionWithBackground = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % content.length);
        setFade(true);
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (index) => {
    if (index === activeIndex) return;
    setFade(false);
    setTimeout(() => {
      setActiveIndex(index);
      setFade(true);
    }, 500);
  };

  return (
    <div className="mt-16 md:mt-24 max-w-6xl mx-auto  px-4  md:px-4">
      {/* Heading */}
      <h1 className="font-sora font-bold text-[36px] sm:text-[48px] md:text-[68px] leading-[110%] tracking-[-0.04em] ">
        Why Use <span className="text-[#F1BC00]">Go ?</span>
      </h1>

      {/* Subheading */}
      <Typography variant="subheading" className="my-6 md:my-8 md:w-2/3">
        Skip the traffic, ditch the grocery queue. Go delivers rides, meals, and
        your way out of everyday hassles.
      </Typography>

      {/* Main content layout */}
      <div className="hidden md:flex flex-col md:flex-row gap-5 md:gap-7 my-8 md:my-10 rounded-xl overflow-hidden">
        {/* Left Section */}
        <div className="w-full md:w-[35%] bg-white p-4 md:p-6 overflow-y-auto rounded-2xl md:rounded-3xl max-h-[400px] md:max-h-none">
          {content.map((item, index) => (
            <div key={index} className="mb-3 md:mb-4">
              <button
                onClick={() => handleClick(index)}
                className="w-full text-left"
              >
                <h2
                  className={`font-sora font-semibold text-[18px] md:text-[20px] leading-[144%] tracking-[0.01em] p-3 rounded-lg transition-all ${
                    activeIndex === index
                      ? "bg-[#F5FAFF] text-black border border-[#0176FF]"
                      : "text-[#605E5C] hover:bg-yellow-50 hover:text-yellow-500"
                  }`}
                >
                  {item.title}
                </h2>
              </button>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div
          className={`w-full md:w-[65%] relative flex items-end bg-cover bg-center transition-opacity duration-[1000ms] ease-in-out rounded-2xl md:rounded-3xl min-h-[280px] md:min-h-[460px]`}
          style={{
            backgroundImage: `url(${content[activeIndex].image})`,
            opacity: fade ? 1 : 0,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10 rounded-2xl md:rounded-3xl" />

          {/* Text content */}
          <div className="w-full p-6 md:p-8 text-white relative z-20">
            <h4 className="font-sora font-extrabold text-[32px] sm:text-[40px] md:text-[60px] leading-[110%] mb-4 text-white">
              {content[activeIndex].heading}
            </h4>

            <p className="mb-4 font-sora font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] md:leading-[28px] tracking-normal text-white">
              {content[activeIndex].description}
            </p>

            <a
              href={content[activeIndex].link}
              className="font-sora font-bold text-[16px] sm:text-[17px] md:text-[18px] leading-[24px] md:leading-[28px] tracking-normal underline text-[#F1BC00] hover:text-yellow-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

   <div className="block md:hidden space-y-6">
      {/* Top Content (Changes on click) */}
    
    </div>
    <MobileSection />
    </div>
  );
};

export default MultiAccordionWithBackground;

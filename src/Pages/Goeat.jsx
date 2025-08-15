import React from "react";
import Typography from "../component/Typography";
import RoundedButton from "../component/RoundedButton";
import iconLeft from "../assets/btn-img.png";
import side1 from "../assets/side1.png";
import side2 from "../assets/side2.png";

import Phones from "../assets/phones.png";
import iconRight from "../assets/play.png";
import getStoreLink from "../component/GetStoreLink";

import credit from "../assets/credit.png";
import cook from "../assets/cook.png";
import smile from "../assets/smile.png";
import heart from "../assets/heart.png";
import Gocar from "../assets/Gocar.png";
import shop from "../assets/shop.png";
import illustrate from "../assets/illustrate.png";
import Gohand from "../assets/go-hand.png";
import Eat1 from "../assets/eat1.png";
import Eat2 from "../assets/eat2.png";
import all from "../assets/all.png";
// import suya from "../assets/suya.png";
// import shawarma from "../assets/shawarma.png";
// import amala from "../assets/amala.png";
// import smoothie from "../assets/smoothie.png";

// import bread from "../assets/bread.png";
import cookie from "../assets/cookie.png";

import InfoCard from "../component/InfoCard";
import Beyond from "../component/Beyond";
import Faq3 from "../component/Faq3";

const Goeat = () => {
  return (
    <div>
      <div className="relative bg-[#] flex flex-col items-center justify-center pt-14 md:pt-36 overflow-hidden">
        <div className="w-full  my-10 space-y-8 flex flex-col items-center">
          {/* Title */}
          <Typography variant="big" className="text-center hidden md:block">
            GoEat – You’re <span className="text-[#F1BC00]">Hungry</span> <br />{" "}
          <span className="">   Order Now.</span>
          </Typography>

            <Typography variant="big" className="text-center md:hidden block text-[39px]">
            You’re <span className="text-[#F1BC00]">Hungry</span> <br />{" "}
            <span className="flex items-center"> <img src={cookie} alt="" className="w-[40.16px] h-[43.7px]"/> rder Now.</span> 
          </Typography>

          {/* Description */}
          <Typography
            variant="body"
            className="text-center mt-4 md:w-[967px] text-[#4d4c4c]  hidden md:block"
          >
            No time to cook? We get it. Between classes, meetings, deadlines,
            and content creation, life gets hectic. That’s where GoEat comes
            in—your shortcut to the food you love, without the wait.
          </Typography>
          <Typography
            variant="body"
            className="text-center mt-4 md:w-[967px] text-[#4d4c4c]  hidden md:block"
          >
            With GoEat, you can order from your favorite restaurants, street
            food vendors, and hidden gems around your city—and get your meals
            delivered hot, fresh, and fast.
          </Typography>

          {/* Button */}
          <div className="flex flex-wrap items-center gap-4 mt-9">
            <RoundedButton
              to={getStoreLink()}
              text="Download App"
              variant="black"
              iconRight={iconRight}
              iconLeft={iconLeft}
            />
          </div>
        </div>
      </div>

     <div className="relative bg-[#FDF4D4] flex flex-col items-center justify-center pt-12 md:pt-36">


  {/* Reduced Scallops (6) */}
  <svg
    className="absolute  -top-[30px] left-0 w-full h-[60px] z-0"
    viewBox="0 0 1440 60"
    preserveAspectRatio="none"
  >
    <path
      d="
        M0,60
        Q120,0 240,60
        Q360,0 480,60
        Q600,0 720,60
        Q840,0 960,60
        Q1080,0 1200,60
        Q1320,0 1440,60
        L1440,0 L0,0 Z
      "
      fill="#ffffff"
    />
  </svg>

  {/* Side Images */}
  <img
    src={side1}
    alt=""
    className="absolute top-[-20px] md:top-[-120px] left-0 w-[60px] md:w-auto z-10"
  />
  <img
    src={side2}
    alt=""
    className="absolute top-[-20px] md:top-[-120px] right-0 w-[60px] md:w-auto z-10"
  />






        
        {/* Section Content */}
        <div className=" px-6 md:pt-16 pb-8 flex flex-col items-center z-10 ">
          <Typography variant="heading1" className="text-center mb-8">
            Discover the easy way to order delicious meals with <span className="text-[#F1BC00]">GoEat!</span>
          </Typography>
          <img src={Phones} alt="" />

          <div className="flex flex-wrap items-center gap-4 mt-9">
            <RoundedButton
              to={getStoreLink()}
              text="Download App"
              variant="whiteWithIcons"
              iconRight={iconRight}
              iconLeft={iconLeft}
            />
          </div>
        </div>
      </div>

      <div className=" bg-[#D6E9FF] py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 my-10 space-y-8 ">
          <Typography variant="big" className="text-center leading-tight">
            Why the Gen Z & Millennial Crowd Love 
            <span className="text-[#F3D248]"> GoEat! </span>
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-8">
            <InfoCard
              icon={Gocar}
              iconBg="#D6E9FF"
              title="Fast Delivery, Always On Time"
              description="We don’t play with your hunger. Whether it’s jollof, shawarma, or banana bread, we bring it to your door in minutes.

"
            />

            <InfoCard
              icon={smile}
              iconBg="#D6E9FF"
              title="Curated for Taste & Vibes"
              description="We team up with your favorite local spots and trending food brands, so your options are always delicious and on point.
"
            />
            <InfoCard
              icon={cook}
              iconBg="#D6E9FF"
              title="No Cooking, No Stress"
              description=" Hungry after work? Tired after class? Let someone else handle the kitchen while you relax or keep hustling.
"
            />
            <InfoCard
              icon={heart}
              iconBg="#D6E9FF"
              title="Built for Speed, Loved for Convenience"
              description=" From one-click reorders to smart meal recommendations, GoEat is designed for your lifestyle—quick, smart, and seamless.
"
            />
          </div>
          <InfoCard
            icon={credit}
            iconBg="#D6E9FF"
            title=" Flexible Payments"
            description=" Pay with card, wallet, or GoPay. We keep it smooth, safe, and cashless.

"
          />
          <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
            <RoundedButton
              to={getStoreLink()}
              text="Download App"
              variant="whiteWithIcons"
              iconRight={iconRight}
              iconLeft={iconLeft}
            />
          </div>
        </div>
      </div>

      <div className=" bg-[#] py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 my-10 space-y- ">
          <Typography
            variant="big"
            className="text-center leading-[100%] tracking-normal"
          >
            How it works?
          </Typography>
          <div className=" flex md:flex-row flex-col justify-around items-center gap-6 px-4 py-8 ">
            <div className=" flex flex-col items-center pt-16 relative">
              {/* #1 positioned to look like it's entering the ball */}
              <h1 className="font-sora font-extrabold text-[60px] leading-[150%] text-[#E1DFDD] z-10 relative -mb-8">
                #1
              </h1>

              {/* Ball container */}
              <div className="bg-[#D6E9FF] w-[220px] h-[220px] rounded-full flex items-center justify-center relative z-0">
                <img
                  src={Gohand}
                  alt="GoCar Icon"
                  className="w-[140px] h-[180px] object-contain"
                />
              </div>

              {/* Text content */}
              <div className=" text-center my-6 px-4 py-3 rounded-md space-y-2">
                <p className="font-extrabold text-black text-base">
                  Launch GoApp
                </p>
                <p className="text-[14px] font-medium text-black">
                  Open the GoApp and tap on “GoEat”
                </p>
              </div>
            </div>
            <div className=" flex flex-col items-center pt-16 relative">
              {/* #1 positioned to look like it's entering the ball */}
              <h1 className="font-sora font-extrabold text-[60px] leading-[150%] text-[#E1DFDD] z-10 relative -mb-8">
                #2
              </h1>

              {/* Ball container */}
              <div className="bg-[#D6E9FF] w-[220px] h-[220px] rounded-full flex items-center justify-center relative z-0">
                <img
                  src={shop}
                  alt="GoCar Icon"
                  className="w-[130px] h-[180px] object-contain"
                />
              </div>

              {/* Text content */}
              <div className=" text-center my-6 px-4 py-3 rounded-md space-y-2">
                <p className="font-extrabold text-black text-base">
                  Discover Varity
                </p>
                <p className="text-[14px] font-medium text-black">
                  Browse restaurants, dishes, or cravings
                </p>
              </div>
            </div>

            <div className=" flex flex-col items-center pt-16 relative">
              {/* #1 positioned to look like it's entering the ball */}
              <h1 className="font-sora font-extrabold text-[60px] leading-[150%] text-[#E1DFDD] z-10 relative -mb-8">
                #3
              </h1>

              {/* Ball container */}
              <div className="bg-[#D6E9FF] w-[220px] h-[220px] rounded-full flex items-center justify-center relative z-0">
                <img
                  src={illustrate}
                  alt="GoCar Icon"
                  className="w-[180px] h-[180px] object-contain"
                />
              </div>

              {/* Text content */}
              <div className=" text-center my-6 px-4 py-3 rounded-md space-y-2">
                <p className="font-extrabold text-black text-base">
                  Track Your Order
                </p>
                <p className="text-[14px] font-medium text-black">
                  Place your order & track your delivery in real-time{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#F5FAFF] py-10">
        <div className="  my-10 space-y- ">
          <Beyond
            imageUrl={Eat1}
            heading='Satisfying every .  <br> <span class="text-[#0176FF]">cravings!</span>"'
            description="Skip the kitchen, savor the moment with freshly delivered meals. Hungry for something awesome?"
            backgroundColor="b"
            primaryButton={{ to: "/order", text: "Order now" }}
          />
          <Beyond
            imageUrl={Eat2}
            heading='Shop your  <br> <span class="text-[#0176FF]">favorite groceries!</span>"'
            description="Order your best food items FRESH & HEALTHY anytime. Sourced with the greatest care from the vendor"
            primaryButton={{ to: "/order", text: "Shop now" }}
            backgroundColor="b"
            reverse={true}
          />
        </div>
      </div>

      <div className=" bg-[#] py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 my-10 space-y- ">
          <Typography
            variant="heading1"
            className="text-center leading-[100%] tracking-normal"
          >
            Popular on GoEat Right <span className="text-[#A4262C]">Now</span>{" "}
          </Typography>
          <div className="my-10">
            <img src={all} alt="" className="bg-[#FFFFFF]" />
          </div>
          <div>
            {/* <img src={suya} alt="" /> */}
            {/* <img src={suya} alt="" /> */}
            {/* <img src={suya} alt="" /> */}
            {/* <img src={suya} alt="" /> */}
            {/* <img src={group} alt="" /> */}
          </div>{" "}
        </div>
      </div>


      <Faq3 />
    </div>
  );
};

export default Goeat;

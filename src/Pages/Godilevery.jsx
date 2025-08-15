import React from "react";
import Typography from "../component/Typography";
import Road2 from "../assets/raod2.png";
import RoundedButton from "../component/RoundedButton";
import iconLeft from "../assets/btn-img.png";
import tag from "../assets/tag.png";
import layer from "../assets/layer.png";
import hand from "../assets/hand.png";
import location from "../assets/location.png";
import Card from "../assets/card.png";
import Star from "../assets/Container.png";

import iconRight from "../assets/play.png";
import Ride2 from "../assets/ride2.png";
import getStoreLink from "../component/GetStoreLink";
import InfoCard from "../component/InfoCard";
// import Faq from "../component/Faq";
import Faq from "../component/Faq2";
import FeatureSection from "../component/FeatureSection";

const Godilevery = () => {
  const sectionData = {
    heading: `Get it there, fast and easy. Deliveries made <span class='text-[#F1BC00]'>simple</span> .`,

    title: `Go Deliver <br /> Your;`,
    imageSrc: Ride2,
  };
  return (
    <div>
      <div className="relative bg-[#B3D6FF] flex flex-col items-center justify-center pt-36 overflow-hidden">
        <div className="w-full  md:my-10 md:space-y-8 flex flex-col items-center text-center">
          {/* Title */}
          <Typography variant="big">
            GoDelivery - Deliver <br /> More. Stress Less.
          </Typography>

          {/* Description */}
          <Typography
            variant="body"
            className="text-center mt-4 md:w-[967px] text-[#4d4c4c] "
          >
            Whether you're running a growing business, managing your 9–5, or
            creating something amazing on the side, GoDelivery is the smart,
            reliable, and cost-effective way to move your items across town.
            Powered by GoApp, we make everyday delivery seamless—so you can
            focus on what you do best.
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

        {/* Road Image */}
        <img
          src={Road2}
          alt="road"
          className="w-full object-cover z-10 mt-10"
        />

        {/* Faded bottom overlay */}
        <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-[#fefefd] to-transparent z-20 pointer-events-none" />
      </div>
      <div>
        <FeatureSection
          heading={sectionData.heading}
          title={sectionData.title}
          imageSrc={sectionData.imageSrc}
          backgroundColor="bg-yellow-100/20"
        />
      </div>

      <div className=" bg-[#FDF4D4] py-10">
        <div className="mx-auto max-w-6xl   px-2 sm:px-6 lg:px-8 md:my-10 space-y-8 ">
          <Typography variant="big" className="text-center ">
            Why Choose  <span className="text-[#F3D248]"> GoDelivery? </span>
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-4 md:py-8">
            <InfoCard
              icon={Card}
              iconBg="#FBEBB0"
              title="Affordable Pricing for Every Hustle"
              description="Say goodbye to overpriced logistics. GoDelivery gives you flexible, transparent pricing—so whether you're sending one item or fulfilling 100 orders, you’re always in control of your costs.

"
            />

            <InfoCard
              icon={location}
              iconBg="#FBEBB0"
              title="Same-Day Speed, Zero Excuses"
              description="In business, timing is everything. That’s why we offer fast pickups, real-time tracking, and reliable same-day delivery—ensuring your customers get what they ordered, when they expect it

"
            />
            <InfoCard
              icon={hand}
              iconBg="#D6E9FF"
              title="Trusted by Business Owners, Creators, & Professionals"
              description="From fashion brands to food vendors, working professionals to home-based entrepreneurs—GoDelivery helps move the essentials. Whether it’s a cake box or a customer’s new pair of sneakers, we deliver with care and consistency.

"
            />
            <InfoCard
              icon={tag}
              iconBg="#FBEBB0"
              title="Flexible Delivery That Grows With You"
              description=" Have daily orders or scheduled drop-offs? No problem. With GoApp, you can automate, schedule, or customize deliveries to match your workflow—perfect for scaling businesses or creators on the move.

"
            />
          </div>
          <InfoCard
            icon={layer}
            iconBg="#D6E9FF"
            title=" Reliable Riders. Exceptional Service."
            description="We work with trained, background-checked riders who treat your package as priority. You can focus on your customers, while we handle the logistics—professionally, safely, and on time.

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

      <div>
        <div className="mx-auto max-w-6xl p-4 sm:px-6 lg:p-8 my-20 space-y-6 bg-[#292F33] rounded-lg">
          {/* Section Label */}
          <p className="text-white font-sora text-sm sm:text-base tracking-tight capitalize">
            Business Spotlight
          </p>

          {/* Main Heading */}
          <h1 className="font-sora font-bold text-2xl sm:text-3xl lg:text-4xl underline underline-offset-4 decoration-[0.5px] text-white">
            Decent Sugar
          </h1>

          {/* Description */}
          <p className="font-manrope text-sm sm:text-base leading-relaxed text-[#C6CDD1]">
            Decent Sugar, a growing cake and dessert brand in Abuja known for
            its{" "}
            <span className="font-semibold">
              freshly baked banana breads and sweets
            </span>
            , relies on GoDelivery to get their products into customers' hands
            while still warm.
          </p>

          {/* Quote */}
          <h2 className="text-[#C6CDD1] font-manrope font-medium text-lg sm:text-xl leading-relaxed">
            “GoDelivery has completely changed how we operate. Our banana breads
            now reach customers across the city within the hour—fresh, fast, and
            without any damage. It’s been a game-changer for our customer
            experience and order volume.”
          </h2>

          {/* Founder Info */}
          <div>
            <p className="text-white font-sora font-semibold text-base sm:text-lg">
              Founder
            </p>
            <p className="font-manrope text-sm sm:text-base text-[#C6CDD1]">
              Decent Sugar
            </p>
          </div>

          {/* Divider */}
          <div className="border-b border-[#A19F9D]"></div>

          {/* Final Paragraph */}
          <p className="font-manrope text-sm sm:text-base leading-relaxed text-[#C6CDD1]">
            With over <span className="font-bold">300 monthly deliveries</span>{" "}
            powered by GoApp, Decent Sugar is scaling its reach while keeping
            quality and freshness at the heart of every order.
          </p>
        </div>

        <Typography variant="heading1" className="text-center md:my-10">
          What our users are saying
        </Typography>

        <div>
          <div className="mx-auto max-w-6xl md:px-4 sm:px-6 lg:px-8 my-10 space-y-8 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-8">
              <div className="bg-white p-6 rounded-lg border space-y-4">
                <img src={Star} alt="" />
                <Typography variant="subheading" className="]">
                  “As a fashion entrepreneur, I need a delivery service I can
                  trust. GoApp has never let me down—fast, friendly, and always
                  reliable.”
                </Typography>

                <div>
                  {" "}
                  <Typography variant="subheading" className="font-semibold">
                    Tolu A.,
                  </Typography>
                  <p className="font-inter-display font-medium text-[15px] leading-[150%] tracking-normal text-[#605E5C]">
                    Business Owner
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border space-y-4">
                <img src={Star} alt="" />
                <Typography variant="subheading" className="]">
                  “I work long hours and needed a simple way to send out client
                  packages. GoDelivery made it easy to schedule and track
                  everything.”
                </Typography>

                <div>
                  {" "}
                  <Typography variant="subheading" className="font-semibold">
                    Chuks I.,
                  </Typography>
                  <p className="font-inter-display font-medium text-[15px] leading-[150%] tracking-normal text-[#605E5C]">
                    Graphic Designer{" "}
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border space-y-4">
                <img src={Star} alt="" />
                <Typography variant="subheading" className="]">
                  “Fresh food, fragile boxes—GoApp delivers everything on time
                  and in perfect condition. Couldn’t ask for more.”
                </Typography>

                <div>
                  {" "}
                  <Typography variant="subheading" className="font-semibold">
                    Mariam D.,
                  </Typography>
                  <p className="font-inter-display font-medium text-[15px] leading-[150%] tracking-normal text-[#605E5C]">
                    Online Food Vendor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Faq />
      </div>
    </div>
  );
};

export default Godilevery;

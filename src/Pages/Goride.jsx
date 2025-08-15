import React from "react";
import Typography from "../component/Typography";
import Road from "../assets/Road.png";
import RoundedButton from "../component/RoundedButton";
import iconLeft from "../assets/btn-img.png";
import tag from "../assets/price.png";
import money from "../assets/money.png";
import group from "../assets/Group.png";
import Gocar from "../assets/Gocar.png";



import iconRight from "../assets/play.png";
import Ride1 from "../assets/ride1.png";
import getStoreLink from "../component/GetStoreLink";
import InfoCard from "../component/InfoCard";
import Faq from "../component/Faq";
import FeatureSection from "../component/FeatureSection";

const Goride = () => {

   const sectionData = {
    heading: `Your gateway to <span class='text-[#F1BC00]'>seamless</span> transportation experiences.`,
    subheading: `Whether you're commuting to work, heading to a social event, or exploring the city, our Riders app is designed to cater to your every journey. Discover the key features and benefits that make our ride service stand out.`,
    title: `Go Ride <br /> To;`,
    imageSrc: Ride1,
  };
  return (
    <>
      <div className="relative bg-[#FBEBB0] flex flex-col items-center justify-center pt-36 overflow-hidden">
        {/* Title */}
        <Typography variant="big">GoRide - Your WAY</Typography>

        {/* Description */}
        <Typography
          variant="body"
          className="text-center mt-4 md:w-[746px] text-[#4d4c4c]"
        >
          Whether you're commuting to work, heading out for errands, or need a
          quick city ride, GoRide combines safety, speed, and sustainability in
          every trip.
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

        {/* Road Image */}
        <img src={Road} alt="road" className="w-full object-cover z-10 mt-10" />

        {/* Faded bottom overlay */}
        <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-[#fefefd] to-transparent z-20 pointer-events-none" />
      </div>

     

      <FeatureSection
      heading={sectionData.heading}
        subheading={sectionData.subheading}
        title={sectionData.title}
        imageSrc={sectionData.imageSrc}
        backgroundColor="bg-yellow-100/20"
    />

      <div className=" bg-[#D6E9FF] py-10">
        <div className="mx-auto max-w-6xl  sm:px-6 lg:px-8 my-10 space-y-8 ">
          <Typography variant="big" className="text-center ">
            Why Ride on <span className="text-[#0176FF]">GoApp ?</span>
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-8">
            <InfoCard
              icon={Gocar}
              iconBg="#D6E9FF"
              title="Trained & Trusted Drivers"
              description="Your safety is our top priority. All GoRide drivers are professionally trained, background-checked, and equipped to deliver secure, respectful, and reliable service on every trip. rates.

"
            />
            <InfoCard
              icon={tag}
              iconBg="#D6E9FF"
              title="Affordable, Transparent Pricing"
              description="Enjoy competitive fares with no hidden charges. Our pricing is designed to give you value without compromising comfort or quality—ride more, worry less."
            />
            <InfoCard
              icon={group}
              iconBg="#D6E9FF"
              title="Schedule Rides, Stay in Control"
              description="Plan your day with ease. Book rides in advance and enjoy the flexibility of reliable pickups that fit your schedule—perfect for meetings, airport runs, or daily commutes."
            />

            <InfoCard
              icon={money}
              iconBg="#D6E9FF"
              title="Fast, Eco-Friendly Rentals"
              description=" Need a quick ride solution? GoRide offers fast vehicle rentals that are efficient and eco-conscious. Our growing fleet of low-emission and electric vehicles helps reduce your carbon footprint while keeping you on the move."
            />
          </div>

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




         <Faq />
    </>
  );
};

export default Goride;

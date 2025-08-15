import React from "react";
import Typography from "../component/Typography";
import RoundedButton from "../component/RoundedButton";
import getStoreLink from "../component/GetStoreLink";
import iconLeft from "../assets/btn-img.png";
import iconRight from "../assets/play.png";
import Default from "../assets/Default.png";
import coin1 from "../assets/coin1.png";
import coin2 from "../assets/coin2.png";
import Ride3 from "../assets/ride3.png";
import way from "../assets/way.png";
import pay from "../assets/payhand.png";
import airtime from "../assets/airtime.png";
import cert from "../assets/cert.png";

import secure from "../assets/secure.png";
import money from "../assets/moneypay.png";



import FeatureSection from "../component/FeatureSection";
import InfoCard from "../component/InfoCard";
import Faq from "../component/Faq4";

const Gopay = () => {
  const sectionData = {
    heading: `Everything Payment with our  <span class='text-[#F1BC00]'>Gopay Feature.</span> `,

    title: `Go Pay <br /> Your;`,
    imageSrc: Ride3,
  };
  return (
    <div>
      <div className="relative bg-[#000000] flex flex-col items-center justify-center pt-36 overflow-hidden mb-12">
        <div className="w-full mt-10 space-y-8 flex flex-col items-center text-[#FFFFFF]  align-baseline">
          {/* Title */}
          <Typography variant="big" className="text-center">
            GoPay – Pay Less. Get <br /> More.
          </Typography>

          {/* Description */}
          <Typography
            variant="body"
            className="text-center mt-4 w-[967px] font-manrope font-bold "
          >
            Life’s too short for long queues, failed payments, and last-minute
            panic. With GoPay, you can handle all your essential payments in one
            smooth tap—fast, secure, and rewarding.
          </Typography>
          <Typography variant="body" className="text-center mt-4 w-[967px]  ">
            From electricity bills to airtime, data subscriptions, cable TV, and
            more, GoPay is your all-in-one digital wallet built right inside
            GoApp—so your lifestyle keeps flowing, uninterrupted.
          </Typography>

          {/* Button */}
          <div className="flex flex-col items-center gap-4 mt-9">
            <RoundedButton
              to={getStoreLink()}
              text="Download App"
              variant="black"
              iconRight={iconRight}
              iconLeft={iconLeft}
            />
            <img src={Default} alt="" />
          </div>
        </div>

        {/* Positioned coins */}
        <img
          src={coin1}
          alt=""
          className="absolute left-0 bottom-0  w-24 h-24"
        />
        <img
          src={coin2}
          alt=""
          className="absolute right-0 bottom-0  w-24 h-24"
        />
      </div>

      <div className="my-24">
        <FeatureSection
          heading={sectionData.heading}
          title={sectionData.title}
          imageSrc={sectionData.imageSrc}
          backgroundColor="bg-yellow-100/20"
        />
      </div>

      <div className=" bg-[#F5FAFF] h-[882px] py-10">
        <div className="mx-auto max-w-6xl my-10 space-y-8 flex gap-4  h-full">
          <div className="space-y-6 w-[55%]  flex flex-col  justify-center">
            <h1 className="font-sora font-bold text-[120px] leading-[100%] tracking-[-0.04em]">
              Your <span className="text-[#F3D248]">Bills,</span>{" "}
            </h1>
            <h1 className="font-sora font-bold text-[120px] leading-[100%] tracking-[-0.04em]">
              Your <span className="text-[#0176FF]">Way</span>
            </h1>
            <Typography variant="subheading">
              Life’s easier when you have choices. With Gocaby, pay your bills
              using your favorite method—whether it's a quick swipe of your card
              or a seamless online payment.
            </Typography>
            <RoundedButton
              to="/paybills"
              text="Pay Bills"
              variant="whiteWithIcons"
              className="w-44 flex items-center justify-center"
            />
          </div>
          <div className="flex flex-wrap items-end  gap-4  w-[45%]">
            <img src={way} alt="" />
          </div>
        </div>
      </div>

      <div className=" bg-[#FDF4D4] py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 my-10 space-y-6 ">
          <Typography variant="big" className="text-center leading-tight">
            Why Use
            <span className="text-[#107C10]"> GoPay? </span>
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-8">
            <InfoCard
              icon={pay}
              iconBg="#FBEBB0"
              title="All Your Bills, One Tap Away"
              description=" Whether it's NEPA, DSTV, internet, or your mobile data plan, GoPay lets you pay instantly—no more running to vendors or switching between apps.
      
      "
            />

            <InfoCard
              icon={airtime}
              iconBg="#FBEBB0"
              title="Airtime & Data, Anytime"
              description="Top up for yourself or send airtime/data to friends and family. GoPay supports all major networks and processes in seconds—because you're always connected."
            />
            <InfoCard
              icon={money}
              iconBg="#FBEBB0"
              title="Cashback That Comes Back"
              description=" With every bill you pay using GoPay, you earn cashback. Yes, money back in your wallet just for paying bills you were already going to pay. Smart, right?
      "
            />
            <InfoCard
              icon={cert}
              iconBg="#FBEBB0"
              title="Loyalty That Rewards Your Flow"
              description=" From exclusive discounts to priority perks, our loyalty program gives consistent users early access to deals, partner offers, and VIP treatment on GoApp services."
            />
          </div>
          <InfoCard
            icon={secure}
            iconBg="#FBEBB0"
            title="Secure, Stress-Free Payments"
            description=" We use bank-level encryption to keep your information safe. You get instant confirmation, digital receipts, and real-time transaction history—no more guesswork.
      
      "
          />
          <div className="flex flex-wrap items-center justify-center gap-4 mt-14">
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

      <div className=" bg-[#ECECEC] py-10 text-[#]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 my-10 space-y-6 ">
          <h1 className="font-bold text-[32px] leading-[100%] tracking-[-0.04em] capitalize font-sora">
            Built for Your Everyday Life
          </h1>

          <p className="font-medium text-[24px] leading-[150%] tracking-normal font-manrope">
            Whether you're a student managing your monthly data, a content
            creator keeping the lights on (literally), or a busy professional
            balancing bills between meetings—GoPay is designed for how you live.
          </p>

          <p className="font-normal text-[15px] leading-[150%] tracking-normal font-manrope">
            It’s not just about making payments. It’s about making life easier
            and more rewarding.
          </p>
        </div>
      </div>

      <Faq />
    </div>
  );
};

export default Gopay;

import React from "react";
import HeroPage from "./HeroPage";
import Built from "./Built";
// import Question from "./Question";
import Car from "./Car";
import Beyond from "./Beyond";

import taxiImage from "../assets/taxi.png";
import taxiImage2 from "../assets/delivery.png";
import Satisfying from "./Satisfying";
import home1 from "../assets/home1.png"
import home2 from "../assets/home2.png"


const Homepage = () => {
  return (
    <div className="bg-yellow-100/20">
      <div className="pt-12 pb-10 ">
        <HeroPage />
        <Built />
        {/* <Question /> */}
      </div>

      {/* First Car + Beyond */}
      {/* First Animation + Section */}
      <div className="relative z-0 ">
        <Car carImage={taxiImage} direction="leftToRight" />
        <Beyond
          imageUrl={home1}
          heading='<span class="text-[#DAAB00]">Beyond</span> your doorstep, possibilities unfold with every ride.'
          description="Whether you're heading to work, meeting friends, or exploring a new part of town, GoApp's ride-hailing service gets you there safely, quickly, and comfortably."
          primaryButton={{ to: "/driver", text: "Become a Driver" }}
        />
      </div>

      {/* Second Animation + Section */}
      <div className="relative z-0  mt-0 top-[-50px]">
        <Car
          carImage={taxiImage2}
          direction="rightToLeft"
          lineColor="bg-[#D6E9FF]"
          dividerColor="bg-blue-300"
        />
        <Beyond
          imageUrl={home2}
          heading='Speed up your day with  <br> <span className="text-[#0176FF]">swift deliveries!</span>"'
          description="Enhance your business operations with a delivery service that prioritizes speed, reliability, and professionalism. We help you maintain trust and satisfaction with every successful drop-off."
          primaryButton={{ to: "/partner", text: "Send a package" }}
        backgroundColor="bg-blue-200"
          reverse={true}
        />
      </div>

      {/* Satisfying Section */}
      <Satisfying />
    </div>
  );
};

export default Homepage;

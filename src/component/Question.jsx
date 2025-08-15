import React from "react";
import { FaFaceSmile } from "react-icons/fa6";
import { GiFingersCrossed, GiHandOk } from "react-icons/gi";
import { CiClock2 } from "react-icons/ci";
import FeatureCard from "./FeatureCard";

const Question = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-36 py-16">
      <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-8">
        Why Use Go?
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Text Column */}
        <div className="space-y-6">
          <FeatureCard
            icon={FaFaceSmile}
            title="Convenience in One App"
            description="No need for multiple apps. GoApp brings all your daily essentials into one easy-to-use interface."
            bgColor="bg-yellow-200"
          />

          <FeatureCard
            icon={GiFingersCrossed}
            title="Trusted Services"
            description="Partnered with reliable providers to deliver consistent, quality service every time."
            bgColor="bg-blue-200"
          />
        </div>

        {/* Image/Icon Column */}
        <div className="space-y-6">
          <FeatureCard
            icon={CiClock2}
            title="Time-Saving Features"
            description="Automated systems and real-time updates keep you efficient and informed."
            bgColor="bg-green-200"
          />

          <FeatureCard
            icon={GiHandOk}
            title="Reliable & User-Friendly"
            description="Enjoy peace of mind with intuitive tools and dependable support."
            bgColor="bg-pink-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Question;

// components/FeatureCard.jsx
import React from "react";

const FeatureCard = ({ icon: Icon, title, description, bgColor = "bg-yellow-200" }) => {
  return (
    <div className="flex items-center gap-3">
      <div className={`p-5 rounded-md ${bgColor}`}>
        <Icon className="text-xl" />
      </div>
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

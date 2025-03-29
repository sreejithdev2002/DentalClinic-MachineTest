import React from "react";
import starIcon from "../images/StarIcon.png";

function ScrollTexts() {
  const data = [
    { text: "Orthodontics", icon: starIcon },
    { text: "General Dentistry", icon: starIcon },
    { text: "Cosmetic Dentistry", icon: starIcon },
    { text: "Teeth Whitening", icon: starIcon },
    { text: "Gum Treatment", icon: starIcon },
    { text: "Root Canal Treatment", icon: starIcon },
    { text: "Crowns and Bridges", icon: starIcon },
    { text: "Jaw Joint Disorder", icon: starIcon },
    { text: "Children's Dentistry", icon: starIcon },
  ];
  return (
    <div className="overflow-hidden bg-white py-4">
      {/* <div className="flex animate-marquee items-center space-x-8"> */}
      <div
        className="flex items-center space-x-8"
        style={{
          animation: `marquee ${
            window.innerWidth < 768 ? "5s" : "20s"
          } linear infinite`,
        }}
      >
        {[...data, ...data].map((item, index) => (
          <div key={index} className="flex items-center space-x-2 shrink-0">
            <img
              src={item.icon}
              alt={`${item.text} Icon`}
              className="w-6 h-6 mr-6"
            />
            <p className="text-lg font-semibold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollTexts;

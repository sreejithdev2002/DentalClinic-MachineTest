import React from "react";
import image1 from "../images/Girl_Avatar.jpeg";
import image2 from "../images/Man1_avatar.jpeg";
import image3 from "../images/Man2_avatar.jpeg";

function HomepageCard() {
  return (
    <div className="absolute bg-gray-200 w-[180px] lg:w-[15.6vw] p-5 rounded-md top-44 right-3 border-gray-100 border-2">
      <div className="mb-2 lg:mb-4">
        <h3 className="text-[#F58820] text-sm lg:text-base" id="displayFont">
          <span className="font-bold text-sm lg:text-xl">15+</span> Expert
          Doctors
        </h3>
      </div>
      <div className="flex items-center justify-start">
        <img
          loading="lazy"
          src={image2}
          alt=""
          width={50}
          className="w-[30px] lg:w-[50px] mx-1 mb-2 rounded-full"
        />
        <img
          loading="lazy"
          src={image1}
          alt=""
          width={50}
          className="w-[30px] lg:w-[50px] mx-1 mb-2 rounded-full"
        />
        <img
          loading="lazy"
          src={image3}
          alt=""
          width={50}
          className="w-[30px] lg:w-[50px] mx-1 mb-2 rounded-full"
        />
      </div>
      <div className="mt-2 lg:mt-4" id="displayFont">
        <p className="text-xs lg:text-sm leading-[15.6px] text-wrap">
          We take meticulous care of your dental needs <br /> to ensure a
          healthy, lasting smile.
        </p>
      </div>
    </div>
  );
}

export default HomepageCard;

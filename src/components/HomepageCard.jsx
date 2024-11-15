import React from "react";
import image1 from "../images/Girl_Avatar.jpeg";
import image2 from "../images/Man1_avatar.jpeg";
import image3 from "../images/Man2_avatar.jpeg";

function HomepageCard() {
  return (
    <div className="absolute bg-gray-200 w-[15.6vw] p-5 rounded-md top-44 right-10 border-gray-100 border-2">
      <div className="mb-4">
        <h3 className="text-[#F58820] text-md" id="displayFont">
          <span className="font-bold text-xl">15+</span> Expert Doctors
        </h3>
      </div>
      <div className="flex items-center justify-start">
        <img
          src={image2}
          alt=""
          width={50}
          className="mx-1 mb-2 rounded-full"
        />
        <img
          src={image1}
          alt=""
          width={50}
          className="mx-1 mb-2 rounded-full"
        />
        <img
          src={image3}
          alt=""
          width={50}
          className="mx-1 mb-2 rounded-full"
        />
      </div>
      <div className="mt-4" id="displayFont">
        <p className="text-[13px] leading-[15.6px] text-wrap">
          We take meticulous care of your dental needs <br /> to ensure a
          healthy, lasting smile.
        </p>
      </div>
    </div>
  );
}

export default HomepageCard;

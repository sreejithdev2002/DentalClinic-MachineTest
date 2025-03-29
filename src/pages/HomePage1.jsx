import React from "react";
import Navbar from "../components/Navbar";
import homepageImage from "../images/Homepage_Girl.png";
import googleImage from "../images/google.png";
import HomepageCard from "../components/HomepageCard";
import MiddleDiv from "../components/MiddleDiv";

function HomePage1() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50">
        <div className="absolute left-10 lg:left-32 lg:bottom-[15vw]">
          <h1
            className="text-2xl lg:text-7xl font-bold w-[35vw] tracking-wider"
            id="displayFont2"
          >
            Have a shining smile with our{" "}
            <span className="text-[#F58820]">modern methods!</span>
          </h1>
          <img
            src={googleImage}
            alt="Google rating card"
            // width={230}
            className="w-[150px] lg:w-[230px] mt-6  lg:mt-10 relative right-2"
          />
        </div>
        <div className="flex justify-end items-end w-screen">
          <img src={homepageImage} alt="" width={1000} className="" />
          <HomepageCard/>
        </div>
      </div>
      <MiddleDiv/>
      <div className="bg-[#011016] w-screen h-28"></div>
    </>
  );
}

export default HomePage1;

import React from "react";
import BoyBraces from "../images/BoyWithBraces.jpeg";
import GirlBraces from "../images/GirlWithBraces.jpeg";
import YoungPatient from "../images/YoungPatient.jpeg";

function AppointmentPage() {
  const appointmentData = [
    {
      image: GirlBraces,
      info: "Cleaning Polishing, Teeth Whitening and Comprehensive Consultation",
      rate: "599 AED",
      style: "scale-[115%] top-2",
      style1: "text-start w-[28vw]",
      style2: "px-16",
      features: {
        one: "Flash Tooth Whitening System for 1 Hour",
        two: "Deep Cleaning and Polishing",
        three: "Full Mouth Treatment Plan Included",
      },
    },
    {
      image: BoyBraces,
      info: "Orthodontic Braces",
      rate: "2499 AED",
      style: "scale-[100%] top-[-5px]",
      style1: "text-center",
      style2: "px-0",
      features: {
        one: "American Association of Orthodontist Member",
        two: "Align Your Complete Teeth in 6-12 Months",
        three: "Complimentary Teeth Cleaning During Orthodontic Treatment",
      },
    },
    {
      image: YoungPatient,
      info: "Premium Quality Hollywood Smile 20 Teeth",
      rate: "14000 AED",
      style: "scale-[100%] top-[-20px]",
      style1: "text-center w-[22vw]",
      style2: "px-0",
      features: {
        one: "German Quality Super Thin Veneers",
        two: "Painless and Delivered in 5 Days in 2 Sessions",
        three:
          "German Trained Cosmetic Dentist Who Delivered More than 2000 Smiles",
      },
    },
  ];

  return (
    <div className="p-20 mt-28">
      <div className="flex items-center" id="displayFont">
        <h1 className="text-5xl font-bold">
          Exclusive <br /> Monthly Dental Offers
        </h1>
        <p className="text-lg text-[#9E9E9E] ml-40 w-[28vw]">
          Unlock your smile’s potential with our exclusive dental offers for
          this month
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10 ">
        {appointmentData.map((data) => (
          <div
            className="bg-white shadow-lg rounded-sm flex flex-col items-center p-5 justify-start h-[679px] w-[433px]"
            id="displayFont"
          >
            <div className="relative overflow-hidden rounded-md min-w-[395px] min-h-[183px]">
              <img
                src={data.image}
                alt=""
                className={`absolute object-cover ${data.style}`}
              />
            </div>
            <div className="h-24 flex items-center justify-center">
              <h3
                className={`py-4 px-8 text-xl ${data.style1} font-medium text-[#011016]`}
              >
                {data.info}
              </h3>
            </div>
            <div className="h-20">
              <h1 className="text-[42px] text-[#F58820] font-semibold">
                {data.rate}
              </h1>
            </div>
            <ul className="h-52">
              <li className="border-b border-t border-gray-300 py-4 text-base text-[#9E9E9E] text-center">
                {data.features.one}
              </li>
              <li className="border-b border-gray-300 py-4 text-base text-[#9E9E9E] text-center">
                {data.features.two}
              </li>
              <li
                className={`border-b border-gray-300 py-4 ${data.style2} text-base text-[#9E9E9E] text-center`}
              >
                {data.features.three}
              </li>
            </ul>
            <div className="flex justify-center mt-4">
              <button className="bg-[#231F20] text-[22px] w-[298px] h-[50px] text-white rounded-md hover:bg-gray-800 font-medium">
                MAKE AN APPOINTMENT
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppointmentPage;

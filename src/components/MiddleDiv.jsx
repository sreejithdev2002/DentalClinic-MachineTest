import React from "react";
import teethImage from "../images/Teeth.png";
import reviewImage from "../images/review.png";
import patientsImage from "../images/patients.png";
import dentistImage from "../images/doctor.png";

const middleDivData = [
  {
    name: "Dental Care",
    score: "20+ Yrs",
    image: teethImage,
  },
  {
    name: "Google Reviews",
    score: "2200+",
    image: reviewImage,
  },
  {
    name: "Happy Patients",
    score: "50K+",
    image: patientsImage,
  },
  {
    name: "Dentists",
    score: "15+",
    image: dentistImage,
  },
];

function MiddleDiv() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-evenly absolute h-[17vh] w-[90vw] items-center bg-white top-[88vh] rounded-md p-2">
        {middleDivData.map((data, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center">
              <img src={data.image} alt="" width={70} className="mr-4" />
              <div id="displayFont">
                <h1 className="text-[#F58820] text-3xl font-extrabold">
                  {data.score}
                </h1>
                <h2 className="text-sm text-[#5C5D61]">{data.name}</h2>
              </div>
            </div>
            {index !== middleDivData.length - 1 && (
              <hr className="border-[1px] border-[#E1E1E1] h-20" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default MiddleDiv;

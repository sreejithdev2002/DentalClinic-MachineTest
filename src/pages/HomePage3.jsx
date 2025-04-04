import React from "react";
import Doctor2 from "../images/doctorMan.png";
import Doctor3 from "../images/doctorMan1.png";
import Doctor1 from "../images/doctorWoman.png";
import Doctor4 from "../images/doctorWoman1.png";

const doctorsData = [
  {
    name: "Dr. John Paul",
    specialization: "General Dentist",
    image: Doctor1,
  },
  {
    name: "Dr. Khaled Abul",
    specialization: "Children's Dentist",
    image: Doctor2,
  },
  {
    name: "Dr. Marwan Serhal",
    specialization: "Children's Dentist",
    image: Doctor3,
  },
  {
    name: "Dr. Chinchu Mathew",
    specialization: "Children's Dentist",
    image: Doctor4,
  },
];

function HomePage3() {
  return (
    <div>
      <div className="bg-[#011016] h-[25vw] flex flex-col justify-start lg:pt-24 items-center p-5 lg:p-10">
        <h1
          className="text-3xl lg:text-5xl text-white font-semibold"
          id="displayFont"
        >
          Meet Our Team
        </h1>
        <p className="text-[#9E9E9E] text-[10px] lg:text-base lg:w-[36vw] font-normal mt-2 lg:mt-8 text-center">
          Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don't look
          even
        </p>
      </div>
      <div className="relative top-3 lg:-top-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 max-w-5xl mx-auto">
        {doctorsData.map((data, index) => (
          <div
            key={index}
            className=" text-gray-800 overflow-hidden p-3 lg:p-0"
          >
            <img
              loading="lazy"
              src={data.image}
              alt={data.name}
              className="w-full h-auto lg:h-[35vh] rounded-sm"
            />
            <div className="py-4 text-start" id="displayFont">
              <h3 className="text-2xl font-bold">{data.name}</h3>
              <p className="text-gray-500 text-base">{data.specialization}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-start mt-10 lg:-mt-20">
        <button
          className="bg-[#F58820] text-white px-6 py-2 rounded-md font-medium hover:bg-orange-600 transition"
          id="displayFont"
        >
          View All Team
        </button>
      </div>
    </div>
  );
}

export default HomePage3;

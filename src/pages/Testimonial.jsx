import React from "react";
import Avatar1 from "../images/testimonialAvatar1.png";
import Avatar2 from "../images/testimonialAvatar2.png";
import BG from "../images/testimonialBg.jpeg";

const testimonials = [
  {
    id: 1,
    text: "We value your feedback and are committed to providing exceptional service to all our clients. If you have any concerns or questions.",
    name: "Jang Wonyoung",
    country: "Korea",
    avatar: Avatar1, // Replace with actual image link
  },
  {
    id: 2,
    text: "Our priority, and we appreciate the opportunity to address any issues and ensure your complete satisfaction.",
    name: "Jennie Kim",
    country: "USA",
    avatar: Avatar2, // Replace with actual image link
  },
];

const Testimonial = () => {
  return (
    <div className="bg-[#F58220] text-white py-10 px-5 mt-20 lg:h-[793px]" id="poppinsFont">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col lg:flex-row">
        <div className="relative h-[50vh] w-auto lg:h-[442px] lg:w-[526px] overflow-hidden">
          <img src={BG} alt="" className="absolute object-cover rounded-md"/>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-8 -mt-40 lg:mt-10 lg:ml-20 lg:w-[30vw] text-center lg:text-start" id="displayFont">
          500+ Happy clients said to us they are satisfied
        </h1>
        </div>
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 lg:-top-60 lg:left-60">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className=" bg-white text-black rounded-xl lg:rounded-3xl shadow-lg p-2 lg:p-6 pt-5 lg:pt-20 max-w-[453.01px] lg:h-[296px] md:w-1/2 border-2 border-[#E6E6E6]"
            >
              <div className="relative mb-2">
                <h1 className="text-5xl lg:text-[180px] absolute lg:top-5 text-[#DEDEDE] italic">
                  "
                </h1>
              </div>
              <p className="text-xs lg:text-sm font-medium italic mb-5 lg:mb-10 text-[#838383] px-5 text-start">
                {testimonial.text}
              </p>
              <hr className="border-[1px] border-[#EDEDED] mb-6" />
              <div className="flex items-center mt-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex relative lg:-top-20 justify-center mt-6 space-x-2">
          <span className="w-3 h-3 bg-white rounded-full"></span>
          <span className="w-3 h-3 bg-[#FB9E4F] rounded-full"></span>
          <span className="w-3 h-3 bg-[#FB9E4F] rounded-full"></span>
          <span className="w-3 h-3 bg-[#FB9E4F] rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

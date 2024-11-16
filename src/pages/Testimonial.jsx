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
    <div className="bg-[#F58220] text-white py-10 px-5 mt-20" id="poppinsFont">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          500+ Happy clients said to us they are satisfied
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white text-black rounded-lg shadow-lg p-6 pt-20 w-full md:w-1/2"
            >
              <div className="relative">
                <h1 className="text-[200px] absolute -top-28 text-[#DEDEDE] italic">
                  "
                </h1>
              </div>{" "}
              <p className="text-sm font-medium italic mb-4 text-[#838383]">
                {testimonial.text}
              </p>
              <hr className="border-[1px] border-[#EDEDED ]" />
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
        <div className="flex justify-center mt-6 space-x-2">
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

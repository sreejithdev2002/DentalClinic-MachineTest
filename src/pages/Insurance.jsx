import React from "react";
import Saico from "../images/insurance/saico.jpeg";
import Nextcare from "../images/insurance/nextcare.jpeg";
import Neuron from "../images/insurance/neuron.jpeg";
import NGI from "../images/insurance/ngi.jpeg";
import NAS from "../images/insurance/nas.jpeg";
import MSH from "../images/insurance/msh.jpeg";
import Mednet from "../images/insurance/mednet.jpeg";
import AlMadallah from "../images/insurance/almadalah.jpeg";
import Sukoon from "../images/insurance/sukoon.jpeg";

function Insurance() {
  const logos = [
    { id: 1, src: Saico, alt: "SAICO" },
    { id: 2, src: Nextcare, alt: "NextCare" },
    { id: 3, src: Neuron, alt: "Neuron" },
    { id: 4, src: NGI, alt: "NGI" },
    { id: 5, src: NAS, alt: "NAS" },
    { id: 6, src: MSH, alt: "MSH" },
    { id: 7, src: Mednet, alt: "MedNet" },
    { id: 8, src: AlMadallah, alt: "Al Madallah" },
    { id: 9, src: Sukoon, alt: "Sukoon" },
  ];
  return (
    <div className="py-12 my-10" id="displayFont">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <h2 className="text-5xl font-bold text-center text-[#011016]">
          Our Insurance Partners
        </h2>
        <p className="mt-4 text-center text-[#9E9E9E]">
          Conveniently pay for your dental treatments with your insurance.
          <br />
          We accept major insurance providers.
        </p>

        <div className="mt-10 grid grid-cols-6 gap-0">
          {logos.slice(0, 6).map((logo) => (
            <div
              key={logo.id}
              className="flex justify-center items-center p-4 border border-[#E7E7E7] bg-white shadow-sm h-[123px] w-[198px] m-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>

        <div className=" grid grid-cols-6 m-0">
          <div></div>
          <div></div>

          {logos.slice(6, 9).map((logo) => (
            <div
              key={logo.id}
              className="flex justify-center items-center p-4 bg-white shadow-sm h-[123px] w-[198px] border border-[#E7E7E7] m-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 object-contain"
              />
            </div>
          ))}

          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Insurance;

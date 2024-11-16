import React from "react";

import Orthodontics from "../images/orthodontics.png";
import GeneralDentistry from "../images/General Dentistry.png";
import CosmeticDentistry from "../images/Cosmetic.png";
import TeethWhitening from "../images/TeethWhitening.png";
import GumTreatment from "../images/GumTreatment.png";
import RootCanal from "../images/RootCanal.png";
import CrownsAndBridges from "../images/CrownsAndBridges.png";
import JawJoint from "../images/JawJoint.png";
import ChildrensDentistry from "../images/Childrens.png";

const gridData = [
  {
    image: Orthodontics,
    name: "Orthodontics",
  },
  {
    image: GeneralDentistry,
    name: "General Dentistry",
  },
  {
    image: CosmeticDentistry,
    name: "Cosmetic Dentistry",
  },
  {
    image: TeethWhitening,
    name: "Teeth Whitening",
  },
  {
    image: GumTreatment,
    name: "Gum Treatment",
  },
  {
    image: RootCanal,
    name: "Root Canal Treatment",
  },
  {
    image: CrownsAndBridges,
    name: "Crowns and Bridges",
  },
  {
    image: JawJoint,
    name: "Jaw Joint Disorder",
  },
  {
    image: ChildrensDentistry,
    name: "Children's Dentistry",
  },
];

function HomePage2() {
  return (
    <div className="p-20">
      <h1 className="text-5xl font-semibold w-[50vw]" id="displayFont">Transform your smile with veneers, whitening, and implants.</h1>
      <p className="text-[#9E9E9E] text-base mt-5 w-[45vw] text-left">
        Lorem Ipsum available, but the majority have suffered alteration in some
        form, by injected humour, or randomised words which don't look even
      </p>
      <div className="grid grid-cols-5 gap-4 mt-10">
        {gridData.map((data) => (
          <div className="bg-[#FFFAF5] flex flex-col items-center justify-center p-10">
            <img src={data.image} alt={data.name} className="w-auto h-auto mb-5"/>
            <h2 className="font-semibold text-center">{data.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage2;

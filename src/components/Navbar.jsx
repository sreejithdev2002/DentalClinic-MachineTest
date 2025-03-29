import React from "react";
import logo from "../images/Dental_Logo.png";
import "../App.css";

function Navbar() {
  return (
    <nav className="flex flex-col lg:flex-row w-screen justify-between px-2 lg:px-10 py-5">
      <div>
        <img src={logo} alt="Smile Essentials Dental Clinic Logo" width={150} />
      </div>
      <div className="flex flex-col lg:flex-row">
        <ul
          className="flex list-disc text-[#011016] items-center my-3 lg:my-0"
          id="displayFont"
        >
          <a href="#">
            <li className="text-[10px] lg:text-sm mx-2 lg:mx-5 list-none text-[#F58220] font-bold">
              Home
            </li>
          </a>
          <a href="#">
            <li className="text-[10px] lg:text-sm mx-2 lg:mx-5 lg:pl-3 ">
              About Us
            </li>
          </a>
          <a href="#">
            <li className="text-[10px] lg:text-sm mx-2 lg:mx-5 lg:pl-3 ">
              Services
            </li>
          </a>
          <a href="#">
            <li className="text-[10px] lg:text-sm mx-2 lg:mx-5 lg:pl-3 ">
              Gallery
            </li>
          </a>
          <a href="#">
            <li className="text-[10px] lg:text-sm mx-2 lg:mx-5 lg:pl-3 ">
              Promotions
            </li>
          </a>
          <a href="#">
            <li className="text-[10px] lg:text-sm mx-2 lg:mx-5 lg:pl-3 ">
              Blogs
            </li>
          </a>
          <a href="#">
            <li className="text-[10px] lg:text-sm mx-2 lg:mx-5 lg:pl-3 ">
              Contact Us
            </li>
          </a>
        </ul>
        <div>
          <button className="bg-[#F58220] text-white px-4 py-2 rounded-md lg:ml-4 text-sm lg:text-base">
            Appointment
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

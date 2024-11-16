import React from "react";
import logo from "../images/Dental_Logo.png";
import "../App.css";

function Navbar() {
  return (
    <nav className="flex w-screen justify-between px-10 py-5">
      <div>
        <img src={logo} alt="Smile Essentials Dental Clinic Logo" width={150} />
      </div>
      <div>
        <ul
          className="flex list-disc text-[#011016] text-sm items-center"
          id="displayFont"
        >
          <a href="#">
            <li className="mx-5 list-none text-[#F58220] font-bold">Home</li>
          </a>
          <a href="#">
            <li className="mx-5 pl-3 ">About Us</li>
          </a>
          <a href="#">
            <li className="mx-5 pl-3 ">Services</li>
          </a>
          <a href="#">
            <li className="mx-5 pl-3 ">Gallery</li>
          </a>
          <a href="#">
            <li className="mx-5 pl-3 ">Promotions</li>
          </a>
          <a href="#">
            <li className="mx-5 pl-3 ">Blogs</li>
          </a>
          <a href="#">
            <li className="mx-5 pl-3 ">Contact Us</li>
          </a>
          <button className="bg-[#F58220] text-white px-4 py-2 rounded-md ml-4">
            Appointment
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import Logo from "../images/Dental_Logo1.png";
import map from "../images/map.png";

function Footer() {
  return (
    <div className="bg-[#011016] p-10 lg:p-20 pb-5 lg:pb-10 text-white" id="displayFont">
      <div className="mb-5">
        <img loading="lazy" src={Logo} alt="" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 items-start">
        <div className="pt-5 lg:p-10">
          <h1  className="text-[26px] font-medium">Get In Touch</h1>
          <br />
          <p>Contact Number</p>
          <br />
          <p>+971 4 2979464</p>
          <p>+971 56 4848613</p>
          <br />
          <p>Email</p>
          <br />
          <p>info@smiledentaldubai.com</p>
        </div>
        <div className="pt-5 lg:p-10">
          <h1  className="text-[26px] font-medium">Our Address</h1>
          <br />
          <p>
            Room No: 314 Al Attar Shopping Mall Next to Karama Center,Al karama,
            P.O.Box: 125706, Dubai, UAE
          </p>
          <br />
          <h1  className="text-[26px] font-medium mb-2">Location Map</h1>
          <div className="h-[116px] w-[334px] overflow-hidden rounded-[14px]">
            <img loading="lazy" src={map} alt="" className="relative object-cover -top-10" />
          </div>
        </div>
        <div className="pt-5 lg:p-10 flex flex-col">
          <h1  className="text-[26px] font-medium">Quick Links</h1>
          <br />
          <ul>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About Us</li>
            </a>
            <a href="#">
              <li>Services</li>
            </a>
            <a href="#">
              <li>Gallery</li>
            </a>
            <a href="#">
              <li>Blogs</li>
            </a>
            <a href="#">
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
        <div className="pt-5 lg:p-10 flex flex-col">
          <h1 className="text-[26px] font-medium">Departments</h1>
          <br />
          <ul>
            <a href="#">
              <li>Children's Dentistry</li>
            </a>
            <a href="#">
              <li>General Dentistry</li>
            </a>
          </ul>
          <br />
          <h1  className="text-[26px] font-medium">Info</h1>
          <br />
          <ul>
            <a href="#">
              <li>Open all 7 days</li>
            </a>
            <a href="#">
              <li>9:00 AM to 9:00 PM</li>
            </a>
          </ul>
        </div>
      </div>
      <hr className="border border-[#233E48] mt-10"/>
      <p className="text-[#233E48] text-xs lg:text-sm text-center m-5 lg:m-10">@copyright all reserved by Smile Essentials - Powered by Hoztox Technologies</p>
    </div>
  );
}

export default Footer;

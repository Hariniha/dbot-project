import React from 'react';
import video from "../../assets/video.png";
import comingSoon from "../../assets/coming-soon.png";
import "./css/Header.css"

const Header = () => {
  return (
    <div
      className="relative h-[700px] bg-cover bg-center pt-20"
      style={{ backgroundImage: 'url("/src/assets/Gradient.png")' }}
    >
      <div className="absolute inset-0 flex flex-col-reverse lg:flex-row items-center justify-between px-4 z-10">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:ml-5 lg:mt-10 mb-8 lg:mb-0">
          <h2 className=" text-[#E8ECED]  text-7xl sm:text-4xl md:text-7xl"id='title'>
            DBOT TRACK
          </h2>
          <p className="text-[#E8ECED] mt-4 font-comfortaa font-medium  md:text-2xl" id='content'>
            Your SaaS tool to Capture, Visualize and Analyze
           construction sites, at ease.
          </p>
          <button
            className="text-xl sm:text-2xl py-3 px-6 font-semibold font-inter mt-8 text-black"
            style={{ backgroundColor: '#fcad35',fontFamily:"inter",fontWeight:"600" }}
          >
            KNOW MORE
          </button>
        </div>

        {/* Video Section */}
        <div className="relative flex justify-center lg:justify-end items-center lg:mr-7 w-full lg:w-auto">
          <img
            className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[839px] h-auto relative transform translate-y-6 sm:translate-y-10 lg:translate-y-0"
            src={video}
            alt="Video Placeholder"
          />

          {/* Coming Soon Badge */}
          <img
            src={comingSoon}
            alt="Coming Soon"
            className="absolute top-6 sm:top-10 right-4 lg:top-[-12px] lg:right-[-6px] w-20 sm:w-40 lg:w-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
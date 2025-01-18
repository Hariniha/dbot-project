import React from 'react';
import video from "../../assets/video.png";
import comingSoon from "../../assets/coming-soon.png"; // Import the "Coming Soon" image

const Header = () => {
  return (
    <div
      className="relative h-[700px] bg-cover bg-center pt-20"  // Added padding top to prevent overlap with navbar
      style={{ backgroundImage: 'url("/src/assets/Gradient.png")' }}
    >
      <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center lg:items-end lg:justify-between px-4 z-10">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:ml-5 mb-8 lg:mb-0" style={{ transform: 'translateY(-130px)' }}>
          <h2 className="text-white font-bold text-4xl sm:text-5xl pt-32 md:text-6xl">DBOT TRACK</h2>
          <p className="text-white mt-4 text-lg sm:text-xl md:text-2xl">
            Your SaaS tool to Capture, Visualize and Analyze
            <br /> construction sites, at ease.
          </p>
          <button
            className="text-xl sm:text-2xl py-3 px-6 font-semibold mt-6 text-black"
            style={{ backgroundColor: '#fcad35' }}
          >
            KNOW MORE
          </button>
        </div>

        {/* Video Section */}
        <div className="relative lg:ml-auto lg:mr-7" style={{ marginBottom: '60px' }}>
          {/* Video Image */}
          <img
            className="w-full sm:w-[500px] md:w-[600px] lg:w-[839px] h-auto relative mx-auto lg:mx-0"
            src={video}
            alt="Video Placeholder"
            style={{ transform: 'translateY(-50px)' }} // Moves the video image upwards
          />

          {/* Coming Soon Badge */}
          <img
            src={comingSoon}
            alt="Coming Soon"
            className="absolute -top-12 -right-6 w-40 sm:w-20 lg:w-60" // Adjust image size responsively
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import video from "../../assets/video.png";
import comingSoon from "../../assets/coming-soon.png"; // Import the "Coming Soon" image

const Header = () => {
  return (
    <div
      className="relative h-[700px] bg-cover"
      style={{ backgroundImage: 'url("/src/assets/Gradient.png")' }}
    >
      <div className="absolute inset-0 flex items-end" >
        {/* Text Section */}
        <div className=" ml-5" style={{ transform: 'translateY(-130px)' }}>
          <h2 className="text-white font-bold text-6xl">DBOT TRACK</h2>
          <p className="text-white mt-4 text-2xl">
            Your SaaS tool to Capture, Visualize and Analyze
            <br /> construction sites, at ease.
          </p>
          <button
            className="text-2xl py-3 px-6 font-semibold mt-6 text-black"
            style={{ backgroundColor: '#fcad35' }}
          >
            KNOW MORE
          </button>
        </div>

        {/* Video Section */}
        <div className="relative ml-auto mr-7" style={{ marginBottom: '60px' }}>
          {/* Video Image */}
          <img
            className="w-[839px] h-[503px] relative"
            src={video}
            alt="Video Placeholder"
            style={{ transform: 'translateY(-50px)' }} // Moves the video image upwards
          />

          {/* Coming Soon Badge */}
          <img
            src={comingSoon}
            alt="Coming Soon"
            className="absolute -top-12  -right-7 w-60" // Adjust `w-40` for image size
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

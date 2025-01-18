import React from 'react';
import Loop from "../../assets/Loop.png"
import DbotTrack1 from "../../assets/DbotTrack1.png";
import DbotTrack2 from "../../assets/DbotTrack2.png";
import DbotTrack3 from "../../assets/DbotTrack3.png";
import DotImage from "../../assets/Dot2.png"; // Adjust the path according to your project structure

function Step({ imageSrc, title, description, titleColor }) {
  return (
    <div className="flex flex-col items-center mb-2 max-w-sm">
      <div className="relative">
        <div className="w-64 h-64 bg-white rounded-full shadow-lg flex items-center justify-center p-8 mb-6">
          <img src={imageSrc} alt={title} className="w-[405] h-[405] object-contain" />
        </div>
      </div>
      <h3
        className="text-4xl font-bold uppercase mb-2"
        style={{ color: titleColor }} // Hex color applied here
      >
        {title}
      </h3>
      <p className="text-center text-gray-600 pt- max-w-xs">{description}</p>
    </div>
  );
}

function DoubleArrow() {
  return (
    <div className="hidden md:flex items-center pb-36 justify-center">
      <div className="text-purple-900 text-7xl font-semibold">»</div>
    </div>
  );
}

function Working() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-900 mb-20">
          HOW DOES IT WORK?
        </h2>

        <div className="relative">
          {/* Main Steps Container */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <Step
              imageSrc={DbotTrack1}
              title="Getting Started"
              description="Create a new project by entering the basic information about the project, as requested in the application."
              titleColor="#FCAC35" // Custom color
            />

            <DoubleArrow />

            <Step
              imageSrc={DbotTrack2}
              title="Site Capturing"
              description="Connect a 360 camer, mount it on a safety helmet, and start recording the site floor wise, following the SOP in the application."
              titleColor="#C9C9C9" // Custom color
            />

            <DoubleArrow />

            <Step
              imageSrc={DbotTrack3}
              title="Data Processing"
              description="The Dbot Track application will process this captured data and deliver the output in the form of various reports."
              titleColor="#879797" // Custom color
            />
          </div>

          {/* Dotted Path Image and Loop Image (Only visible on medium screens and up) */}
          <div className="relative flex justify-center">
            {/* Dotted Path Image */}
            <img 
              src={DotImage} 
              alt="Dotted Path" 
              className="hidden md:block absolute -bottom-16 -right-20 w-3/4 mx-auto" 
            />
            
            {/* Loop Image positioned on top of the Dotted Image */}
            <div className="absolute z-10  flex justify-center items-center">
              <img 
                src={Loop} 
                alt="Loop Icon" 
                className="md:w-16 md:h-16 lg:w-28 lg:h-28 ml-96" // Scalable sizes for different breakpoints
              />
            </div>
            
            {/* Bottom Text */}
            <div className="absolute z-20 text-center mt-32 ml-96 hidden md:block"> {/* Adjust mt-20 for proper spacing */}
              <p className="text-gray-600">
                Repeat the site capture periodically to<br /> collect the latest data
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Working;

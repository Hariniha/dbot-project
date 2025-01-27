import React from 'react';
import Line from "../../assets/line.png"; // Ensure the path to your line image is correct
import CircleImage from "../../assets/clients/black.png"; // Replace with the path to your circle image
import "./css/Deliver.css"

function Deliver() {
  return (
    <div className=" Deliver min-h-screen bg-white mt-20 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-inter font-semibold text-center text-[#4A2B5C] mb-16">
          WHAT WE DELIVER?
        </h1>

        <div className="relative">
          {/* Cards Layout: Stack on mobile, row on larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Digital Twin Card */}
            <div className="flex flex-col items-center mt-28 relative justify-start">
              <div className="bg-[#EAEAEA] rounded-lg p-8 w-full h-[500px] sm:h-[600px] md:h-[650px] mb-8 flex items-start justify-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-gray-800">
                  DIGITAL<br />TWIN
                </h3>
              </div>
              {/* Circle Image Overlay - Half inside, Half outside */}
              <img
                src={CircleImage} // Path to your circle image
                alt="Circle Overlay"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 rounded-full sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 shadow-2xl -mb-12 z-10"
              />
            </div>

            {/* Deviation Report Card */}
            <div className="flex flex-col items-center mt-28 relative justify-start">
              <div className="bg-[#EAEAEA] rounded-lg p-8 w-full h-[500px] sm:h-[650px] md:h-[650px] mb-8 flex items-start justify-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-gray-800">
                  DEVIATION<br />REPORT
                </h3>
              </div>
              {/* Circle Image Overlay - Half inside, Half outside */}
              <img
                src={CircleImage} // Path to your circle image
                alt="Circle Overlay"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 rounded-full sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 shadow-2xl -mb-12 z-10"
              />
            </div>

            {/* Schedule Tracking Card */}
            <div className="flex flex-col items-center relative mt-28 justify-start">
              <div className="bg-[#EAEAEA] rounded-lg p-8 w-full h-[500px] sm:h-[600px] md:h-[650px] mb-8 flex items-start justify-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-gray-800">
                  SCHEDULE<br />TRACKING
                </h3>
              </div>
              {/* Circle Image Overlay - Half inside, Half outside */}
              <img
                src={CircleImage} // Path to your circle image
                alt="Circle Overlay"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 rounded-full sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 shadow-2xl -mb-12 z-10"
              />
            </div>
          </div>

          {/* Line Image under the Circles */}
          <div className="absolute top-[95.5%] left-1/2 transform -translate-x-1/2 -mb-8 w-[1400px] hidden md:block z-0">
            <img src={Line} className="mx-auto" alt="Connecting Line" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deliver;

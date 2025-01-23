import React from 'react';
import Line from "../../assets/line.png";

function Deliver() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#4A2B5C] mb-16">
          WHAT WE DELIVER?
        </h1>

        <div className="relative">
          {/* Cards Layout: Stack on mobile, row on larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Digital Twin Card */}
            <div className="flex flex-col items-center relative">
              <div className="bg-[#EAEAEA] rounded-lg p-8 w-full aspect-[3/4] mb-8 flex items-center justify-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-gray-800">
                  DIGITAL<br />TWIN
                </h3>
              </div>
              {/* Circle Overlay - Half inside, Half outside */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 shadow-2xl rounded-full bg-[#EAEAEA] -mb-12 z-10" />
            </div>

            {/* Deviation Report Card */}
            <div className="flex flex-col items-center relative">
              <div className="bg-[#EAEAEA] rounded-lg p-8 w-full aspect-[3/4] mb-8 flex items-center justify-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-gray-800">
                  DEVIATION<br />REPORT
                </h3>
              </div>
              {/* Circle Overlay - Half inside, Half outside */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 rounded-full bg-[#EAEAEA] shadow-2xl -mb-12 z-10" />
            </div>

            {/* Schedule Tracking Card */}
            <div className="flex flex-col items-center relative">
              <div className="bg-[#EAEAEA] rounded-lg p-8 w-full aspect-[3/4] mb-8 flex items-center justify-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-gray-800">
                  SCHEDULE<br />TRACKING
                </h3>
              </div>
              {/* Circle Overlay - Half inside, Half outside */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 rounded-full bg-[#EAEAEA] shadow-2xl -mb-12 z-10" />
            </div>
          </div>

          {/* Line Image under the Circles */}
          <div className="absolute top-[93%] left-1/2 transform -translate-x-1/2 -mb-8 w-full z-0">
            <img src={Line} className="mx-auto" alt="Connecting Line" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deliver;

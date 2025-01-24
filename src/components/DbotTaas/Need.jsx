import React from 'react';
import image1 from "../../assets/clients/black.png"
function Need() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-[#4A2B5C] mb-16">
          WHAT WE NEED FROM YOU?
        </h1>

        {/* Responsive Flexbox Layout */}
        <div className="flex flex-col sm:flex-row justify-center gap-16">
          {/* First Circle (Image) */}
          <div className="flex flex-col items-center w-full sm:w-1/3">
            <img 
              src={image1} 
              alt="Circle 1" 
              className="w-72 sm:w-72 h-72 sm:h-72 rounded-full mb-6"
            />
            <p className="text-center text-gray-600 max-w-[200px] sm:max-w-[250px] md:max-w-[300px]">
              Lorem ipsum is simply dummy text
            </p>
          </div>

          {/* Second Circle (Image) */}
          <div className="flex flex-col items-center w-full sm:w-1/3">
            <img 
              src={image1} 
              alt="Circle 2" 
              className="w-72 sm:w-72 h-72 sm:h-72 rounded-full mb-6"
            />
            <p className="text-center text-gray-600 max-w-[200px] sm:max-w-[250px] md:max-w-[300px]">
              Lorem ipsum is simply dummy text
            </p>
          </div>

          {/* Third Circle (Image) */}
          <div className="flex flex-col items-center w-full sm:w-1/3">
            <img 
              src={image1} 
              alt="Circle 3" 
              className="w-72 sm:w-72 h-72 sm:h-72 rounded-full mb-6"
            />
            <p className="text-center text-gray-600 max-w-[200px] sm:max-w-[250px] md:max-w-[300px]">
              Lorem ipsum is simply dummy text
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Need;

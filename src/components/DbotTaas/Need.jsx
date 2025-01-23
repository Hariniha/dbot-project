import React from 'react';

function Need() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-[#4A2B5C] mb-16">
          WHAT WE NEED FROM YOU?
        </h1>

        {/* Responsive Flexbox Layout */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-16">
          {/* First Circle */}
          <div className="flex flex-col items-center w-full sm:w-1/3">
            <div className="w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 rounded-full bg-gray-100 mb-6"></div>
            <p className="text-center text-gray-600 max-w-[200px] sm:max-w-[250px] md:max-w-[300px]">
              Lorem ipsum is simply dummy text
            </p>
          </div>

          {/* Second Circle */}
          <div className="flex flex-col items-center w-full sm:w-1/3">
            <div className="w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 rounded-full bg-gray-100 mb-6"></div>
            <p className="text-center text-gray-600 max-w-[200px] sm:max-w-[250px] md:max-w-[300px]">
              Lorem ipsum is simply dummy text
            </p>
          </div>

          {/* Third Circle */}
          <div className="flex flex-col items-center w-full sm:w-1/3">
            <div className="w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 rounded-full bg-gray-100 mb-6"></div>
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

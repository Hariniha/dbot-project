import React from 'react';
import Line from '../../assets/Line2.png'; // Ensure the correct path to your image
import image2 from "../../assets/clients/black.png"

function App() {
  return (
    <div className="min-h-screen bg-white  pb-10 px-4">
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#4A2B5C] mb-20">
          HOW WE DO IT?
        </h1>
        
        <div className="relative">
          {/* Line Image visible only on larger screens */}
          <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -mb-8 w-[1400px] z-0 hidden sm:block">
            <img src={Line} alt="Connecting Line" className="mx-auto" />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start relative">
            
            {/* Circle 1 (Image) */}
            <div className="flex flex-col items-center w-full sm:w-1/5 mb-12 sm:mb-0">
              <img
                src={image2}// Replace with actual image path
                alt="Circle 1"
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full mb-8 z-10"
              />
              <p className="text-center text-gray-600 text-sm leading-relaxed p-8 sm:text-base mb-6">
                Lorem ipsum is simply dummy text. Lorem ipsum is simply dummy text. Lorem ipsum is simply dummy text.
              </p>
            </div>

            {/* Circle 2 (Image) */}
            <div className="flex flex-col items-center w-full sm:w-1/5 mb-12 sm:mb-0">
              <img
                src={image2} // Replace with actual image path
                alt="Circle 2"
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full mb-8 z-10"
              />
              <p className="text-center text-black text-sm leading-relaxed p-8 sm:text-base mb-6">
                Lorem ipsum is simply dummy text. Lorem ipsum is simply dummy text. Lorem ipsum is simply dummy text.
              </p>
            </div>

            {/* Circle 3 (Image) */}
            <div className="flex flex-col items-center w-full sm:w-1/5 mb-12 sm:mb-0">
              <img
                src={image2} // Replace with actual image path
                alt="Circle 3"
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full mb-8 z-10"
              />
              <p className="text-center text-black text-sm leading-relaxed p-8 sm:text-base mb-6">
                Lorem ipsum is simply dummy text. Lorem ipsum is simply dummy text. Lorem ipsum is simply dummy text.
              </p>
            </div>

            {/* Circle 4 (Image) */}
            <div className="flex flex-col items-center w-full sm:w-1/5 mb-12 sm:mb-0">
              <img
                src={image2} // Replace with actual image path
                alt="Circle 4"
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full mb-8 z-10"
              />
              <p className="text-center text-black text-sm leading-relaxed p-8 sm:text-base mb-6">
                Lorem ipsum is simply dummy text. Lorem ipsum is simply dummy text. Lorem ipsum is simply dummy text.
              </p>
            </div>

            {/* Circle 5 (Image) */}
            <div className="flex flex-col items-center w-full sm:w-1/5 mb-12 sm:mb-0">
              <img
                src={image2} // Replace with actual image path
                alt="Circle 5"
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full mb-8 z-10"
              />
              <p className="text-center text-black text-sm leading-relaxed p-8 sm:text-base mb-6">
                Lorem ipsum is simply dummy text. Lorem ipsum is simply dummy text. Lorem ipsum is simply dummy text.
              </p>
            </div>

          </div>

          {/* Line Image under the Circles - Only visible on screens larger than "sm" */}
         
        </div>
      </div>
    </div>
  );
}

export default App;

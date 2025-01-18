import React from 'react';

import Capture from "../../assets/Capture.png";
import Visualize from "../../assets/Group.png";
import Analyse from "../../assets/Group1.png";

import "./info.css";

function Info() {
  return (
    <div>
     <div className='mb-20 mt-20 text-center'>
  <div>
    <h2 className='text-center font-semibold text-3xl mb-4'>WHAT WE DO?</h2>
  </div>
  <div className='flex justify-center items-end'>
    <p  className='max-w-xl '>
      Dbot Track aims to streamline construction project management by enabling you to <span className='font-bold'>capture, visualize, and analyze</span> site data effortlessly. Our approach reduces the need for site visits, minimizes costly reworks and empowers you to make data-driven decisions for optimal project outcomes.
    </p>
  </div>
</div>

    <div className="min-h-screen mt-36 ">
      {/* Capture Section */}
      {/* <div class="absolute top-0 left-0 border-dashed border-red-500  border-2 h-48 w-96"></div> */}
      <div className="relative h-[60vh] sm:h-[400px]"> {/* Adjusted height */}
  <div className="flex items-center justify-between p-4 relative mt-12 mb-12 bg-[#FDB347] fade-left-right h-auto sm:h-[calc(100vh-500px)]"> {/* Reduced padding and margins */}
    <div className="max-w-md">
      <div
        className="absolute bottom-10 left-0 border-dashed border-[#FCAC35] border-4 h-56 w-2/4"
        style={{
          maskImage: "linear-gradient(to bottom left, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom left, black, transparent)",
          borderLeft: "none"
        }}
      ></div>

      <p className="text-lg">
        Capture comprehensive site data using readily available 360-degree cameras by following Dask Track's simple SOPs and training.
      </p>
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-bold uppercase">Capture</h2>
      </div>
    </div>

    <div className="relative w-full bottom-16 right-16 sm:w-[450px] sm:max-w-[450px]">
      <img
        src={Capture}
        alt="Capture Device"
        className="w-full object-contain max-h-[450px] sm:max-h-[450px]"
      />
    </div>
  </div>
</div>


      

      {/* Visualize Section */}
      <div className="flex items-center justify-between p-8 relative mb-44 bg-gray-100 fade-right-left h-auto sm:h-[calc(100vh-500px)]">
        <div className="relative w-full bottom-16 left-16 sm:w-[500px] sm:max-w-[500px]">
          <img
            src={Visualize}
            alt="Visualization Device"
            className="w-full object-contain max-h-[450px] sm:max-h-[450px]"
          />
        </div>
        <div className="max-w-md text-right mt-6 sm:mt-0">
        <div
        className="absolute bottom-10 right-0 border-dashed border-[#C9C9C9] border-4 h-56 w-2/4"
        style={{
          maskImage: "linear-gradient(to bottom right, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom right, black, transparent)",
          borderRight: "none"
        }}
      ></div>
          <p className="text-lg">
            Transform data into interactive 3D models with our digital twin technology. Periodic scanning creates 4D twins to view, share and comment on.
          </p>
          <div className="flex items-center gap-2 mb-4 justify-end">
            <h2 className="text-2xl font-bold uppercase">Visualize</h2>
          </div>
        </div>
      </div>

      {/* Analyze Section */}
      <div className="  flex items-center justify-between  p-8 relative  text-white mb-24 fade-left-right1 h-auto sm:h-[calc(100vh-500px)]">
        <div className="max-w-md">
        <div
        className="absolute bottom-10 left-0 border-dashed border-[#879797] border-4 h-56 w-2/4"
        style={{
          maskImage: "linear-gradient(to bottom left, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom left, black, transparent)",
          borderLeft: "none"
        }}
      ></div>
          <p className="text-lg">
            Use AI-powered spatial intelligence to convert digital twins into as-built drawings, track quality, track progress and gain insights.
          </p>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-bold uppercase">Analyze</h2>
          </div>
        </div>
        <div className="relative w-full bottom-16 right-16 sm:w-[500px] sm:max-w-[500px]">
          <img
            src={Analyse}
            alt="Analysis Device"
            className="w-full object-contain max-h-[450px] sm:max-h-[450px]"
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Info;

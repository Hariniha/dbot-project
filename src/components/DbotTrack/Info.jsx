import React from 'react';
import Capture from "../../assets/Capture.png";
import Visualize from "../../assets/Group.png";
import Analyse from "../../assets/Group1.png";
import "./css/info.css";

function Info() {
  return (
    <div>
    <div className="mb-32 mt-11 text-center">
      <div>
        <h2 className="text-center text-[#48304D] text-4xl mb-6"id="title1">WHAT WE DO?</h2>
      </div>
      <div className="flex justify-center  items-end">
        <p className="max-w-6xl"id='content1'>
          Dbot Track aims to streamline construction project management by enabling you to <span className='' >capture, visualize, and analyze</span> site data effortlessly.<br/> Our approach reduces the need for site visits, minimizes costly reworks and empowers you to make data-driven decisions for optimal <br/> project outcomes.
        </p>
      </div>
    </div>
  
    {/* Capture Section */}
    <div className=" capture relative mb-36">
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 relative mt-8 mb-8 bg-[#FDB347] fade-left-right h-auto sm:h-[calc(100vh-500px)]">
        <div className="text-center sm:text-left lg:mr-16 lg:ml-16">
          <p className=" text-[#48304D] ">
            Capture comprehensive site data using readily available 360-degree <br />cameras by following Dask Track's simple SOPs and <br /> training.
          </p>
          <div className="flex items-center gap-2 justify-center sm:justify-start my-3">
            <h2 className="text-4xl  uppercase text-[#48304D]">Capture</h2>
          </div>
        </div>
        <div className="relative w-full sm:w-[400px] sm:max-w-[400px] mt-8 sm:mb-28 lg:mr-16 lg:ml-16">
          <img
            src={Capture}
            alt="Capture Device"
            className="w-full object-contain max-h-[400px] sm:max-h-[400px]"
          />
        </div>
      </div>
    </div>
  
    {/* Visualize Section */}
    <div className=" visualize flex flex-col-reverse sm:flex-row items-center justify-between p-4 relative my-8 mb-36 fade-right-left h-auto sm:h-[calc(100vh-500px)]">
      <div className="relative w-full sm:w-[500px] sm:max-w-[500px] mt-8 sm:mb-28 lg:mr-16 lg:ml-16">
        <img
          src={Visualize}
          alt="Visualization Device"
          className="w-full object-contain max-h-[450px] sm:max-h-[450px]"
        />
      </div>
      <div className="text-center sm:text-right lg:mr-16 lg:ml-16">
        <p className=" text-[#48304D] ">
          Transform data into interactive 3D models with our digital twin <br /> technology. Periodic scanning creates 4D twins to view, share <br /> and comment on.
        </p>
        <div className="flex items-center gap-2 justify-center sm:justify-end my-3">
          <h2 className="text-4xl  uppercase text-[#48304D]">Visualize</h2>
        </div>
      </div>
    </div>
  
    {/* Analyze Section */}
    <div className=" analyze flex flex-col sm:flex-row items-center justify-between p-4 relative fade-left-right1 h-auto sm:h-[calc(100vh-500px)]">
      <div className="max-w-md text-center sm:text-left lg:mr-16 lg:ml-16">
        <p className=" text-[#48304D]">
          Use AI-powered spatial intelligence to convert digital twins into as-built drawings, track quality, track progress and gain insights.
        </p>
        <div className="flex items-center gap-2 justify-center sm:justify-start my-3">
          <h2 className="text-4xl  uppercase text-[#48304D]">Analyze</h2>
        </div>
      </div>
      <div className="relative w-full sm:w-[500px] sm:max-w-[500px] mt-9 sm:mb-28 lg:mr-16 lg:ml-16">
        <img
          src={Analyse}
          alt="Analysis Device"
          className="w-full object-contain max-h-[450px] sm:max-h-[450px]"
        />
      </div>
    </div>
  </div>
  );
}

export default Info;

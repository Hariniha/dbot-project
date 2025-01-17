import React from 'react';

import Capture from "../../assets/Capture.png"; 
import Visualize from "../../assets/Group.png"; 
import Analyse from "../../assets/Group1.png"; 
import circle1 from "../../assets/circle1.png"
import "./info.css";

function info() {
  return (
    <div className="min-h-screen bg-white">
      {/* Capture Section */}
      <div className="flex items-center justify-between p-8 relative  mt-24 mb-24 bg-[#FDB347] fade-left-right h-[calc(100vh-500px)]">
        
        <div className="max-w-md">
          
          <p className="text-lg">
            Capture comprehensive site data using readily available 360-degree cameras by following Dask Track's simple SOPs and training.
          </p>
          <div className="flex items-center gap-2 mb-4">
           
            <h2 className="text-2xl font-bold uppercase">Capture</h2>
          </div>
        </div>
        <div className="relative">
          <img 
            src={Capture} 
            alt="Capture Device" 
            className="w-[500px] object-contain max-h-[450px]"
          />
        </div>
        
      </div>

      {/* Visualize Section */}
      <div className="flex items-center justify-between p-8 relative mb-24 bg-gray-100 fade-right-left h-[calc(100vh-500px)]">
        <div className="relative">
          <img 
            src={Visualize}
            alt="Visualization Device" 
            className="w-[500px] object-contain max-h-[450px]"
          />
        </div>
        <div className="max-w-md text-right">
         
          <p className="text-lg">
            Transform data into interactive 3D models with our digital twin technology. Periodic scanning creates 4D twins to view, share and comment on.
          </p>
          <div className="flex items-center gap-2 mb-4 justify-end">
            
            <h2 className="text-2xl font-bold uppercase">Visualize</h2>
          </div>
        </div>
      </div>

      {/* Analyze Section */}
      <div className="flex items-center justify-between p-8 relative bg-[#6B7F7F] text-white mb-24 fade-left-right h-[calc(100vh-500px)]">
        <div className="max-w-md">
          
          <p className="text-lg">
            Use AI-powered spatial intelligence to convert digital twins into as-built drawings, track quality, track progress and gain insights.
          </p>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-bold uppercase">Analyze</h2>
          </div>
        </div>
        <div className="relative">
          <img 
            src={Analyse} 
            alt="Analysis Device" 
            className="w-[500px] object-contain max-h-[450px]"
          />
        </div>
      </div>

      
    </div>
  );
}

export default info;


import React from 'react';
import { ChevronRight } from 'lucide-react';
import DbotTrack1 from "../../assets/DbotTrack1.png"
import DbotTrack2 from "../../assets/DbotTrack2.png"
import DbotTrack3 from "../../assets/DbotTrack3.png"

function Step({ imageSrc, title, description }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-full shadow-lg w-64 h-64 justify-center transition-transform hover:scale-105">
      <div className="w-32 h-32 mb-4">
        <img src={imageSrc} alt={title} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
  );
}

function DoubleArrow() {
  return (
    <div className="hidden md:flex items-center  ">
      <ChevronRight className="w-10 h-10 text-[#48304D]" />
      <ChevronRight className="w-10 h-10 text-[#48304D] -ml-4" />
    </div>
  );
}

function Working() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#48304D] mb-16">
          HOW DOES IT WORK?
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
            <div className='flex flex-col '>
          <Step 
            imageSrc={DbotTrack1}
          />
          <p className='pt-5 text-center'>GETTING STARTED</p>
          <p>Create a new project by entering the basic<br/>     information about the project, as<br/> requested in the application.</p>
          </div>
          
          <DoubleArrow />
          
          <Step 
            imageSrc={DbotTrack2}
            
          />
          
          <DoubleArrow />
          
          <Step 
            imageSrc={DbotTrack3}
          />
        </div>
      </div>
    </div>
  );
}

export default Working;

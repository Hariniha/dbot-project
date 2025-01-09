import React from 'react';

const Header = () => {
  return (
    <header style={{ background: '#ebebeb' }} className="mb-8">
      <h1 className="font-semibold text-6xl pr-6 pt-24 pb-11 text-end leading-tight">
        TRANSFORMING <br /> AEC INDUSTRY <br /> WITH <br /> DIGITAL INNOVATION
      </h1>

      <div className="flex flex-col items-center pb-11 border rounded-sm">
        <button
          className="text-white py-3 px-3"
          style={{ backgroundColor: '#fcad35' }}
        >
          KNOW MORE
        </button>
        {/* Adjusted div for dots */}
        <div className="flex gap-2 mt-4 pt-10" >
          <div className="w-2 h-2  rounded-full"style={{backgroundColor:"#869696"}} ></div>
          <div className="w-2 h-2  rounded-full"style={{backgroundColor:"#869696"}}></div>
          <div className="w-2 h-2  rounded-full"style={{backgroundColor:"#869696"}}></div>
          <div className="w-2 h-2  rounded-full"style={{backgroundColor:"#869696"}}></div>
          <div className="w-2 h-2  rounded-full"style={{backgroundColor:"#869696"}}></div>
          
          
        </div>
      </div>
    </header>
  );
};

export default Header;

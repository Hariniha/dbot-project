import React from 'react';

const Header = () => {
  return (
    <div className="relative h-[750px]  bg-cover " style={{ backgroundImage: 'url("/src/assets/Gradient.png")' }}>
      <div className="absolute inset-0 flex items-end ">
        <div className=" pb-4 ml-5">
          <h2 className="text-white font-bold text-7xl">DBOT TRACK</h2>
          <p className="text-white mt-4 text-4xl">
            Your SaaS tool to Capture, Visualize and Analyze<br/> construction sites, at ease.
          </p>
          <button className=" text-2xl py-3 px-6 font-semibold mt-6 text-black" style={{ backgroundColor: '#fcad35' }}>
            KNOW MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

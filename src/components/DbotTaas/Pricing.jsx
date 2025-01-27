import React from 'react';

const Card = () => {
  return (
    <div className="space-y-4 mx-auto sm:mx-4">
      <div className="rounded-xl w-[150px] sm:w-[200px] h-[107px] bg-[#EAEAEA]"></div>
      <div className="rounded-xl w-[150px] sm:w-[200px] h-[107px] border-2 border-black"></div>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="flex flex-col items-center px-4">
      {/* Title */}
      <h1
        className="text-[#48304D] text-center text-2xl sm:text-3xl mb-10"
        style={{ fontFamily: 'Inter', fontWeight: '600' }}
      >
        OUR PRICING
      </h1>

      {/* Cards Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* Button Section */}
      <div className="flex items-center justify-center mt-10">
        <button className="bg-[#FCAC35] text-black px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-lg shadow-lg"style={{fontFamily:"inter",fontWeight:"600"}}>
          OUR PRICING
        </button>
      </div>
    </div>
  );
};

export default Pricing;

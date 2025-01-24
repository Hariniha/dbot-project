import React from 'react';

function DeliverableButton({ text, bgColor }) {
  return (
    <div className="w-full sm:w-[250px] flex justify-center">
      <button
        className={`${bgColor} text-white h-[64px] w-full max-w-[300px] font-oswald font-medium py-3 px-6 rounded-2xl text-lg`}
      >
        {text}
      </button>
    </div>
  );
}

function Deliver() {
  return (
    <div className=" bg-white">
      {/* Header Section */}
      <div className="bg-[#4A2B5C] py-6">
        <h1 className="text-3xl sm:text-4xl font-oswald font-medium text-white text-center">
          WHAT WE DELIVER?
        </h1>
      </div>

      {/* Description Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-black text-center font-comfortaa font-extralight leading-relaxed mb-12">
          Dbot Track delivers high-impact outputs designed to simplify and elevate construction project management. Our deliverables integrate
          smoothly with your existing workflow, ensuring precision, consistency, and actionable insights in multiple accessible formats. These data-
          driven outputs are crafted for ease of use and clarity, enabling teams to make informed decisions efficiently. Explore Dbot Track's powerful
          deliverables below:
        </p>

        {/* Buttons Container */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
          <DeliverableButton text="DIGITAL TWIN" bgColor="bg-[#48304D]" />
          <DeliverableButton text="DEVIATION REPORT" bgColor="bg-[#FCAC35]" />
          <DeliverableButton text="STAGE WISE CHECKLIST" bgColor="bg-[#C9C9C9]" />
          <DeliverableButton text="QUANTIFIED REPORT" bgColor="bg-[#879797]" />
        </div>
      </div>
    </div>
  );
}

export default Deliver;
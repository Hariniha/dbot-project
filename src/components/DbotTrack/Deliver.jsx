import React from 'react';

function DeliverableButton({ text, bgColor }) {
  return (
    <div className="w-full sm:w-[250px]">
      <button
        className={`${bgColor} text-white h-[64px] w-[300px] font-bold py-3 px-18 rounded-2xl text-lg `}
      >
        {text}
      </button>
    </div>
  );
}

function Deliver() {
  return (
    <div className="min-h-screen mt-36 bg-white">
      {/* Header Section */}
      <div className="bg-[#4A2B5C] py-6">
        <h1 className="text-3xl sm:text-4xl  text-white text-center">
          WHAT WE DELIVER?
        </h1>
      </div>

      {/* Description Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-gray-700 text-center leading-relaxed mb-16">
          Dbot Track delivers high-impact outputs designed to simplify and elevate construction project management. Our deliverables integrate
          smoothly with your existing workflow, ensuring precision, consistency, and actionable insights in multiple accessible formats. These data-
          driven outputs are crafted for ease of use and clarity, enabling teams to make informed decisions efficiently. Explore Dbot Track's powerful
          deliverables below:
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row justify-center space-x-10 items-center gap-10 sm:gap-20">
          {/* <DeliverableButton
            text="DIGITAL TWIN"
            bgColor="bg-[#4A2B5C]"
           
          /> */}
          <DeliverableButton
            text="DEVIATION REPORT"
            bgColor="bg-[#F5A623]"
          />
          <DeliverableButton
            text="STAGE WISE CHECKLIST"
            bgColor="bg-[#D8D8D8]"
          />
          <DeliverableButton
            text="QUANTIFIED REPORT"
            bgColor="bg-[#8CA3A3]"
          />
          <DeliverableButton
            text="QUANTIFIED REPORT"
            bgColor="bg-[#8CA3A3]"
          />
        </div>
      </div>
    </div>
  );
}

export default Deliver;

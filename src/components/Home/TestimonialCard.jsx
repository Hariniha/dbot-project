import React from 'react';
import "./TestimonialCard.css";

const TestimonialCard = ({ image, name, company }) => {
  return (
    <div className="relative w-full sm:w-80 md:w-96 px-4 m-4 rounded-2xl p-6">
      <div className="relative bg-gray-200 rounded-md w-full sm:w-72 md:w-80 p-6">
        {/* Image */}
        <img
          src={image}
          alt={name}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mx-auto mb-6"
        />
        {/* Arrow */}
        <div className="absolute bottom-[-10px] left-2/5 -translate-x-1/2 rotate-90">
          <div
            className="w-0 h-0 border-l-[30px] border-r-[30px] border-b-[30px] border-l-transparent border-r-transparent border-b-gray-200"
          ></div>
        </div>
      </div>
      <div className="text-center sm:text-right w-full sm:w-72 px-4">
        <p className="name font-semibold text-gray-800 text-lg sm:text-xl md:text-2xl">{name}</p>
        <p className="companyName text-sm sm:text-base text-gray-600">{company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

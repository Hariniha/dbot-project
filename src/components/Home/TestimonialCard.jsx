import React from 'react';
import "./css/TestimonialsCard.css"

const TestimonialCard = ({ name, company }) => {
  return (
    <div className="relative w-72 sm:w-80 md:w-96 px-4 m-4 rounded-2xl p-6">
      <div className="relative bg-[#EAEAEA] rounded-md w-full sm:w-72 md:w-80 p-6">
        {/* Image */}
        <div
          className="w-10 h-20 sm:w-20 sm:h-20 md:w-20 md:h-24 rounded-full mr-16 mx-auto mb-6">
        </div>
        
        {/* Arrow */}
        <div className="absolute bottom-[-10px] left-2/5 -translate-x-1/2 rotate-90">
          <div
            className="w-0 h-0 border-l-[30px] border-r-[30px] border-b-[30px] border-l-transparent border-r-transparent border-b-[#EAEAEA]">
          </div>
        </div>
      </div>
      <div className="text-center sm:text-right w-full sm:w-72 px-4">
        <p className="name text-lg sm:text-xl md:text-2xl text-[#48304D]">{name}</p>
        <p className="companyName text-sm sm:text-base text-[#48304D]">{company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
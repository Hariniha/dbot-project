import React from 'react';
import TestimonialCard from './TestimonialCard';


const Testimonials = () => {
  return (
    <div className="mt-10 mb-10">
      <div>
        <h1 className="text-4xl text-[#48304D] md:text-5xl  py-10 text-center" style={{fontFamily:"inter",fontWeight:"600"}}>TESTIMONIALS</h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-12 space-x-6 mt-8">
        <TestimonialCard name="Name Of The Person" company="Company’s name"  />
        <TestimonialCard name="Name Of The Person" company="Company’s name"  />
        <TestimonialCard name="Name Of The Person" company="Company’s name"  />
    </div>
    </div>
  );
};

export default Testimonials;

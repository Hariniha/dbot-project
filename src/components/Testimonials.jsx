import React from 'react';
import TestimonialCard from './TestimonialCard';
import Test from "../assets/Logo.png";

const Testimonials = () => {
  return (
    <div className="mt-10 mb-10">
      <div>
        <h1 className="text-3xl font-semibold text-center">TESTIMONIALS</h1>
      </div>
      <div className="flex flex-row justify-center gap-12 space-x-6 mt-8">
        <TestimonialCard name="Name Of The Person" company="Company’s name" image={Test} />
        <TestimonialCard name="Name Of The Person" company="Company’s name" image={Test} />
        <TestimonialCard name="Name Of The Person" company="Company’s name" image={Test} />
        
      </div>
    </div>
  );
};

export default Testimonials;

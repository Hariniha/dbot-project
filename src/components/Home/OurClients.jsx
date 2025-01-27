import React from "react";
import "./css/Ourclients.css"

const OurClients = () => {
  // Use import.meta.glob to fetch all images in the folder
  const images = Object.values(
    import.meta.glob("/src/assets/clients/*.{png,jpg,jpeg,svg}", { eager: true })
  ).map((module) => module.default);

  return (
    <div>
      <div>
        <h1 className="client text-[#48304D] text-center font-semibold font-inter text-4xl py-10 sm:px-10 md:text-5xl">
          OUR CLIENTS
        </h1>
      </div>

      {/* Mobile Carousel: Horizontal Scroll */}
      <div className="sm:hidden overflow-x-auto flex gap-10 sm:gap-12 md:gap-16 mt-4 pb-6 hide-scrollbar">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Client ${index + 1}`}
            className="h-[150px] w-[150px] sm:h-[175px] sm:w-[175px] md:h-[201px] md:w-[201px] rounded-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Desktop Carousel: Horizontal Scroll (same as mobile) */}
      <div className="hidden sm:flex overflow-x-auto gap-10 sm:gap-12 md:gap-16 mt-4 pb-6 hide-scrollbar">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Client ${index + 1}`}
            className="h-[125px] w-[125px] sm:h-[150px] sm:w-[150px] md:h-[150px] md:w-[150px] rounded-full object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default OurClients;

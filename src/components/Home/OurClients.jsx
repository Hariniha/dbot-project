import React from "react";

const OurClients = () => {
  // Use import.meta.glob to fetch all images in the folder
  const images = Object.values(
    import.meta.glob("/src/assets/clients/*.{png,jpg,jpeg,svg}", { eager: true })
  ).map((module) => module.default);

  return (
    <div>
      <div>
        <h1 className="text-black text-center font-semibold text-4xl py-10 px-6 sm:px-10 md:text-5xl">
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

      {/* Desktop Grid Layout (for tablet and larger screens) */}
      <div className="hidden sm:grid sm:grid-cols-3 gap-10 sm:gap-12 md:gap-16 mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Client ${index + 1}`}
            className="h-[150px] w-[150px] sm:h-[175px] sm:w-[175px] md:h-[201px] md:w-[201px] rounded-full object-cover mx-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default OurClients;

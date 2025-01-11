import React from "react";

const OurClients = () => {
  // Use import.meta.glob to fetch all images in the folder
  const images = Object.values(
    import.meta.glob("/src/assets/clients/*.{png,jpg,jpeg,svg}", { eager: true })
  ).map((module) => module.default);

  return (
    <div>
      <div>
        <h1 className="text-black text-center font-semibold text-4xl py-10 px-25">
          OUR CLIENTS
        </h1>
      </div>

      <div className="flex justify-center gap-20 mt-4">
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Client ${index + 1}`} 
            className="h-[201px] w-[201px]  rounded-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default OurClients;

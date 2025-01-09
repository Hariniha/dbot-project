// src/components/OurClients.jsx
import React from 'react';
import { images } from '../assets/assets.js';  // Importing images from assets.js

const OurClients = () => {
  return (
    <div>
      <div>
        <h1 className='text-black text-center font-semibold text-3xl'>Our Clients</h1>
      </div>
      
      <div className="flex justify-center items-center space-x-4 mt-6">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <img src={image} className='rounded-full w-32 h-32' alt={`client-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;

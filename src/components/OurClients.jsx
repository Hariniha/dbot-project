// src/components/OurClients.jsx
import React from 'react';


const OurClients = () => {
  return (
    <div>
      <div>
        <h1 className='text-black text-center font-semibold text-3xl'>Our Clients</h1>
      </div>
      
      <div className="flex justify-center items-center space-x-4 mt-6">
        
          <div key={index} className="flex justify-center items-center">
            <img src={image} className='rounded-full w-32 h-32'  />
          </div>

      </div>
    </div>
  );
};

export default OurClients;




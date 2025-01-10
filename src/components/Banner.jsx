import React from 'react';

const Banner = () => {
  return (
    <div style={{ background: '#ebebeb' }} className=''>
      <div className="flex justify-between pt-20 pr-20 pb-20">
        {/* Heading */}
        <h1 className='font-medium text-7xl pl-3'>
          VISUAL BAND WITH GRAPHICS<br />/IMAGE/COLOR BLOCKING
        </h1>

        {/* Button */}
        <div className='pt-9'>
        <button 
          className="text-black font-medium text-xl pl-8 mr-8 inline-flex items-center" 
          style={{ backgroundColor: '#fcad35', height: '50px', width: '200px' }}>
          KNOW MORE
        </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;

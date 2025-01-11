  import React from 'react';

  const Dbot = () => {
    return (
      <div>
      <div className="ml-14 mt-24 relative">
        <h1 className="font-bold text-3xl">WHAT IS DBOT?</h1>
        
        {/* Paragraph and Box Wrapper */}
        <div className="flex items-start mt-7">
          {/* Paragraph */}
          <p className="text-justify max-w-[70%] leading-8 relative z-10">
            Dbot is a technology company focused on improving efficiency in the AEC industry by using digital tools, 
            connecting systems, and automating tasks. Dbot is a technology company focused on improving efficiency in the AEC industry by
            using digital tools, connecting systems, and automating tasks. Dbot is a technology company focused on 
            improving efficiency in the AEC industry by using digital tools, connecting systems, and automating tasks. 
            Dbot is a technology company focused on improving efficiency in the AEC industry by using digital tools, 
            connecting systems, and automating tasks. Dbot is a technology company focused on improving efficiency in the AEC industry by 
            using digital tools, connecting systems, and automating tasks.
          </p>7
          
          {/* The Colored Box */}
          <div 
            style={{ background: '#ebebeb' }}
            className="absolute top-6 right-0 h-80 w-3/4 pt-36 "
          ></div>
        </div>
      </div>

<div className="relative my-36 ">
{/* The Colored Box on the Left */}
<div
  style={{ background: '#ebebeb' }}
  className="h-80 w-3/4 pt-10 absolute left-0 top-10 z-0" // Moved box down to align with paragraph
></div>

<div className="ml-7 relative z-10">
  {/* Heading */}
  <h1 className="font-bold text-3xl text-end mr-14">THE AEC INDUSTRY</h1>
  
  {/* Paragraph */}
  <div className='text-justify max-w-[60%] mr-14 pt-10 leading-8 relative z-10 ml-auto'>
    <p>
      Dbot is a technology company focused on improving efficiency in the AEC industry by using digital tools, 
      connecting systems, and automating tasks. Dbot is a technology company focused on improving efficiency in the AEC industry by
      using digital tools, connecting systems, and automating tasks. Dbot is a technology company focused on 
      improving efficiency in the AEC industry by using digital tools, connecting systems, and automating tasks. 
      Dbot is a technology company focused on improving efficiency in the AEC industry by using digital tools, 
      connecting systems, and automating tasks. Dbot is a technology company focused on improving efficiency in the AEC industry by 
      using digital tools, connecting systems, and automating tasks.
    </p>
  </div>
</div>
</div>

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
</div>
    );
  };

  export default Dbot;

import React from 'react';

const Dbot = () => {
  return (
    <div className='info'>
      {/* First Section */}
      <div className=" sm:ml-9 mt-16 sm:mt-24 relative">
  <h1 className=" text-[#48304D] pb-5 text-3xl sm:text-4xl  text-center sm:text-left">
    WHAT IS DBOT?
  </h1>

  {/* Paragraph and Box Wrapper */}
  <div className="flex flex-col sm:flex-row items-start mt-3 gap-6 sm:gap-10">
    {/* Paragraph */}
    <p  className="text-justify  sm:w-2/4 sm:max-w-[70%] md:max-w-[60%] leading-8 sm:leading-8 mt-10 px-4 sm:px-0 relative z-10">
      Dbot is a technology company focused on improving efficiency in the AEC industry by using digital tools,
      connecting systems, and automating tasks. Dbot is a technology company focused on improving efficiency in the AEC
      industry by using digital tools, connecting systems, and automating tasks. Dbot is a technology company focused
      on improving efficiency in the AEC industry by using digital tools, connecting systems, and automating tasks.
      Dbot is a technology company focused on improving efficiency in the AEC industry by using digital tools,
      connecting systems, and automating tasks. Dbot is a technology company focused on improving efficiency in the AEC
      industry by using digital tools, connecting systems, and automating tasks.
    </p>

    {/* The Colored Box */}
    <div
  style={{ background: "#ebebeb" }}
  className="absolute top-20 sm:top-16 right-0 h-64 sm:h-80 md:h-[400px] lg:h-[350px] w-full sm:w-2/3 md:w-2/3 lg:w-3/4 pt-10 sm:pt-36"
></div>

  </div>
</div>


  

      {/* Second Section */}
      <div className="relative my-36">
        {/* The Colored Box on the Left */}
        <div
          style={{ background: '#ebebeb' }}
          className=" absolute left-0 top-16 z-0 h-64 sm:h-80 md:h-[400px] lg:h-[350px] w-full sm:w-2/3 md:w-2/3 lg:w-3/4 pt-10 sm:pt-36"
        ></div>

        <div className="mr-6  relative z-10">
          {/* Heading */}
          <h1 className=" text-[#48304D] pb-5 text-3xl sm:text-4xl   text-end mr-6">THE AEC INDUSTRY</h1>
          {/* <p  className="text-justify font-inter w-full sm:max-w-[70%] md:max-w-[60%] leading-8 sm:leading-8 mt-10 px-4 sm:px-0 relative z-10"> */}
          {/* Paragraph */}
          <div className="text-justify  sm:w-2/4 sm:max-w-[70%] md:max-w-[90%] mt-10  sm:px-0 px-4 leading-8 sm:leading-8 relative md:mr-0 z-10 ml-auto ">
            <p>
            Dbot is a technology company focused on improving efficiency in the AEC industry by using digital tools,
      connecting systems, and automating tasks. Dbot is a technology company focused on improving efficiency in the AEC
      industry by using digital tools, connecting systems, and automating tasks. Dbot is a technology company focused
      on improving efficiency in the AEC industry by using digital tools, connecting systems, and automating tasks.
      Dbot is a technology company focused on improving efficiency in the AEC industry by using digital tools,
      connecting systems, and automating tasks. Dbot is a technology company focused on improving efficiency in the AEC
      industry by using digital tools, connecting systems, and automating tasks.
            </p>
          </div>
        </div>
      </div>
      <div className='h-14'></div>

      {/* Third Section */}
      <div style={{ background: '#ebebeb' }} className="py-10 sm:pb-20 pt-20">
        <div className="flex flex-col sm:flex-row justify-between px-6 sm:px-20">
          {/* Heading */}
          <h1 className=" text-4xl sm:text-6xl text-[#48304D] pl-3 mb-6 sm:mb-0">
            VISUAL BAND WITH GRAPHICS<br />/IMAGE/COLOR BLOCKING                        
          </h1>

          {/* Button */}
          <div className="pt-9">
            <button 
              className="text-black  text-xl pl-8 mr-8 inline-flex items-center" 
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

import React from 'react';

const Dbot = () => {
  return (
    <div>
      {/* First Section */}
      <div className="ml-6 sm:ml-14 mt-16 sm:mt-24 relative">
  <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center sm:text-left">
    WHAT IS DBOT?
  </h1>

  {/* Paragraph and Box Wrapper */}
  <div className="flex flex-col sm:flex-row items-start mt-7 gap-6 sm:gap-10">
    {/* Paragraph */}
    <p className="text-justify max-w-full sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] leading-7 sm:leading-8 relative z-10">
      Dbot is a technology company focused on improving efficiency in the AEC industry by using digital tools,
      connecting systems, and automating tasks. Dbot is a technology company focused on improving efficiency in the AEC industry by
      using digital tools, connecting systems, and automating tasks. Dbot is a technology company focused on
      improving efficiency in the AEC industry by using digital tools, connecting systems, and automating tasks.
      Dbot is a technology company focused on improving efficiency in the AEC industry by using digital tools,
      connecting systems, and automating tasks. Dbot is a technology company focused on improving efficiency in the AEC industry by
      using digital tools, connecting systems, and automating tasks.
    </p>

    {/* The Colored Box */}
    <div
      style={{ background: '#ebebeb' }}
      className="absolute top-20 sm:top-16 right-0 h-64 sm:h-80 md:h-[400px] lg:h-[450px] w-full sm:w-3/4 md:w-2/3 lg:w-1/2 pt-10 sm:pt-36"
    ></div>
  </div>
</div>

      {/* Second Section */}
      <div className="relative my-36">
        {/* The Colored Box on the Left */}
        <div
          style={{ background: '#ebebeb' }}
          className="h-64 sm:h-80 w-full sm:w-3/4 pt-10 absolute left-0 top-10 z-0"
        ></div>

        <div className="ml-6 sm:ml-7 relative z-10">
          {/* Heading */}
          <h1 className="font-bold text-3xl sm:text-4xl text-end mr-14">THE AEC INDUSTRY</h1>

          {/* Paragraph */}
          <div className="text-justify max-w-full sm:max-w-[60%] mr-14 pt-10 leading-8 relative z-10 ml-auto">
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

      {/* Third Section */}
      <div style={{ background: '#ebebeb' }} className="py-10 sm:py-20">
        <div className="flex flex-col sm:flex-row justify-between px-6 sm:px-20">
          {/* Heading */}
          <h1 className="font-medium text-4xl sm:text-6xl pl-3 mb-6 sm:mb-0">
            VISUAL BAND WITH GRAPHICS<br />/IMAGE/COLOR BLOCKING
          </h1>

          {/* Button */}
          <div className="pt-9">
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

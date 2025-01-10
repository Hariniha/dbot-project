import React from 'react';

const Aec = () => {
  return (
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
  );
};

export default Aec;

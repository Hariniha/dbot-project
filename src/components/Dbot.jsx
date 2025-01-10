  import React from 'react';

  const Dbot = () => {
    return (
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
    );
  };

  export default Dbot;

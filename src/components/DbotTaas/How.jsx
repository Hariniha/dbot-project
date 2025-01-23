import React from 'react';

function App() {
  const steps = [
    {
      text: "Lorem ipsum is simply dummy text. Lorem ipsum is simply dummy text. Lorem ipsum is simply dummy text"
    },
    {
      text: "Lorem ipsum is simply dummy text. Lorem ipsum is simply dummy text. Lorem ipsum is simply dummy text"
    },
    {
      text: "Lorem ipsum is simply dummy text. Lorem ipsum is simply dummy text. Lorem ipsum is simply dummy text"
    },
    {
      text: "Lorem ipsum is simply dummy text. Lorem ipsum is simply dummy text. Lorem ipsum is simply dummy text"
    },
    {
      text: "Lorem ipsum is simply dummy text. Lorem ipsum is simply dummy text. Lorem ipsum is simply dummy text"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#4A2B5C] mb-20">
          HOW WE DO IT?
        </h1>
        
        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute top-[50px] left-0 right-0 h-[2px] bg-gray-300"></div>
          
          {/* Circles and Text */}
          <div className="flex flex-col sm:flex-row justify-between items-start relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center w-full sm:w-1/5 mb-10 sm:mb-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-100 mb-6 z-10"></div>
                <p className="text-center text-gray-600 text-sm leading-relaxed sm:text-base">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

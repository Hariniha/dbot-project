import React from 'react';

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="">
        <div className="max-w-7xl h-80 mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold font-oswald text-center text-gray-900 mb-8">
            Why Choose Us?
          </h1>

        </div>
      </div>

      {/* Technology Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-inter text-center text-gray-900 mb-16">
            OUR TECHNOLOGY
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Digital Twin */}
            <div className="flex flex-col items-center text-center">
            <h3 className="text-lg sm:text-xl font-inter font-semibold text-[#48304D] mb-4">DIGITAL TWIN</h3>
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                {/* Add image or icon here */}
              </div>
              
              <p className="text-black text-sm font-inter font-light sm:text-base">
                Leverage our advanced digital twin technology to create perfect virtual replicas of your physical assets, enabling real-time monitoring and predictive maintenance.
              </p>
            </div>

            {/* Spatial Intelligence */}
            <div className="flex flex-col items-center text-center">
            <h3 className="text-lg sm:text-xl font-inter font-semibold text-[#48304D] mb-4">SPATIAL INTELLIGENCE</h3>
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-green-50 flex items-center justify-center mb-6">
                {/* Add image or icon here */}
              </div>
              
              <p className="text-black text-sm  font-inter font-light  sm:text-base">
                Unlock the power of spatial data with our intelligent mapping and analysis tools, providing unprecedented insights into your spatial relationships.
              </p>
            </div>

            {/* AI Insights */}
            <div className="flex flex-col items-center text-center">
            <h3 className="text-lg sm:text-xl font-inter font-semibold text-[#48304D] mb-4">AI INSIGHTS</h3>
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-purple-50 flex items-center justify-center mb-6">
                {/* Add image or icon here */}
              </div>
             
              <p className="text-black text-sm  font-inter font-light  sm:text-base">
                Harness the power of artificial intelligence to transform your raw data into actionable insights, driving better decision-making and business outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

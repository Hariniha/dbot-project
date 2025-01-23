import React from 'react';

function Header() {
  return (
    <div className="min-h-[500px] w-full bg-[#EAEAEA] pt-28 p-8">
  
      {/* Main Container with Flexbox */}
      <div className="flex flex-col sm:flex-row sm:gap-16">
  
        {/* Left side - Text content */}
        <div className="bg-[#EAEAEA] p-12 flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-4">DBOT TAAS</h1>
          <h2 className="text-xl sm:text-2xl text-gray-600 mb-6">Dbot Track as a Service</h2>
          <p className="text-gray-600 mb-8">
            Dbot TaaS is a construction progress monitoring service for construction professionals,
            leveraging Digital Twin technology, to help them with:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>Better visibility to site progress</li>
            <li>Flag any deviations from the GFC</li>
            <li>Quantified schedule tracking</li>
          </ul>
          <button className="mt-8 bg-orange-400 text-white px-8 py-3 rounded-md hover:bg-orange-500 transition-colors">
            OUR PRICING
          </button>
        </div>

        {/* Right side - Form */}
        <div 
          className="w-full sm:w-[550px] h-auto max-w-lg items-center p-8 sm:p-10 shadow-[0_0_5px_0_rgba(0,0,0,0.2)] bg-white rounded-2xl relative overflow-visible mt-8 sm:mt-0"
        >
          <form action="/submit" method="POST" className="flex flex-col place-items-center pt-8 sm:gap-8">
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="mb-4 border h-14 sm:h-16 w-full sm:w-80 shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)] p-4"
            />
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="mb-4 border h-14 sm:h-16 w-full sm:w-80 shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)] p-4"
            />
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              className="mb-4 border h-14 sm:h-16 w-full sm:w-80 shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)] p-4"
            />
            <input 
              type="text" 
              id="message" 
              name="message" 
              className="mb-4 border h-20 sm:h-24 w-full sm:w-80 shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)] p-4"
            />
            <div className="flex justify-center mt-4">
              <button 
                type="submit" 
                className="text-white text-lg sm:text-xl md:text-3xl w-full sm:w-60 lg:w-72 h-12 sm:h-14 lg:h-16 font-semibold" 
                style={{ backgroundColor: "#FCAC35" }}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Header;

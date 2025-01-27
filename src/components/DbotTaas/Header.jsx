import React from 'react';
import "./css/Header.css";
function Header() {
  return (
    <div className="Header min-h-[500px] w-full bg-[#EAEAEA] flex flex-col sm:flex-row pt-28 p-8 relative">
      {/* Main Container */}
      <div className="flex flex-col sm:flex-row sm:gap-16 relative z-10 items-center justify-center sm:justify-start">
        {/* Left side - Text content */}
        <div className="bg-[#EAEAEA] p-12 flex-1 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl  text-[#48304D] mb-6">
            DBOT TAAS
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-black  mb-6">
            Dbot Track as a Service
          </h2>
          <p className="text-black  mb-8 text-sm sm:text-base md:text-lg">
            Dbot TaaS is a construction progress monitoring service for <br />
            construction professionals, leveraging Digital Twin technology, to help them with:
          </p>
          <ul className="space-y-3 text-black text-sm sm:text-lg md:text-2xl  sm:text-left text-center">
            <li>Better visibility to site progress</li>
            <li>Flag any deviations from the GFC</li>
            <li>Quantified schedule tracking</li>
          </ul>
          <button className="mt-8 bg-[#FCAC35] text-black px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg md:text-3xl ">
            OUR PRICING
          </button>
        </div>
      </div>

      {/* Right side - Form */}
      <div
        className="w-full sm:w-[450px] h-auto max-w-lg items-center p-6 sm:p-10 shadow-[0_0_5px_0_rgba(0,0,0,0.2)] bg-white rounded-2xl 
        mt-8 sm:mt-0 min-h-[500px] sm:min-h-[650px] relative sm:absolute sm:top-[16%] sm:right-[100px] sm:translate-x-1/2 left-auto z-50"
        style={{
          transform: "translateY(-50px)",
        }}
      >
        <form
          action="/submit"
          method="POST"
          className="flex flex-col place-items-center pt-8 gap-4 sm:gap-8"
        >
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mb-4 border h-12 sm:h-14 md:h-16 w-full sm:w-64 md:w-80 shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)] p-4"
          />
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mb-4 border h-12 sm:h-14 md:h-16 w-full sm:w-64 md:w-80 shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)] p-4"
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mb-4 border h-12 sm:h-14 md:h-16 w-full sm:w-64 md:w-80 shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)] p-4"
          />
          <input
            type="text"
            id="message"
            name="message"
            className="mb-4 border h-20 sm:h-24 w-full sm:w-64 md:w-80 shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)] p-4"
          />
          <div className="flex justify-center mt-4">
          <button
  type="submit"
  className="text-black text-base sm:text-xl md:text-3xl w-full sm:w-60 lg:w-72 h-10 sm:h-12 lg:h-16  py-3 px-6 sm:px-8 sm:py-3"
  style={{ backgroundColor: "#FCAC35" }}
>
  SUBMIT
</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Header;

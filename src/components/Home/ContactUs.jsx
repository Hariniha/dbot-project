import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center mt-11 mb-5 px-4 sm:px-8">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">CONTACT US</h1>
      <div 
        className="w-full sm:w-[550px] h-auto max-w-lg items-center p-8 sm:p-10 shadow-[0_0_5px_0_rgba(0,0,0,0.2)] bg-white rounded-2xl "
      >
        <form action="/submit" method="POST" className="flex flex-col place-items-center pt-8 sm:gap-8">
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="mb-4 border h-14 sm:h-16 w-full sm:w-80 shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)]p-4"
          />
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="mb-4 border h-14 sm:h-16 w-full sm:w-80 shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)] p-4 "
          />
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            className="mb-4 border h-14 sm:h-16 w-full sm:w-80 shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)] p-4 "
          />
          <input 
            type="text" 
            id="message" 
            name="message" 
            
            className="mb-4 border h-20 sm:h-24 w-full sm:w-80 shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)] p-4 "
          />
          <div className="flex justify-center mt-4">
  <button 
    type="submit" 
    className="text-black text-lg sm:text-xl md:text-3xl w-full sm:w-60 lg:w-72 h-12 sm:h-14 lg:h-16 font-semibold" 
    style={{ backgroundColor: "#FCAC35" }}
  >
    SUBMIT
  </button>
</div>

        </form>
      </div>
    </div>
  );
};

export default ContactUs;

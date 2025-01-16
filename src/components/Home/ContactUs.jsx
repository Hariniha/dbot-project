import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center mt-11 mb-5">
      <h1 className="text-3xl font-semibold text-center  text-gray-800 mb-8">CONTACT US</h1>
      <div 
        className="w-[550px] h-[729px] max-w-lg items-center p-20 bg-white rounded-2xl shadow-[0_0_5px_0_rgba(0,0,0,0.2)]" 
  
      >
        <form action="/submit" method="POST" className="flex flex-col gap-8 ">
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="mb-4 border h-16 w-80 shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)] " 
           
          />
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className=" mb-4 border h-16 w-80 shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)] " 
            
          />
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            className="mb-4 border h-16 w-80 shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)] " 
            
          />
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            className=" mb-4 border h-16 w-80 shadow-[inset_0_0_5px_0_rgba(0,0,0,0.1)] " 
            
          />
          <div className='flex justify-center mt-4'>
            <button 
              type="submit" 
              className="text-black text-3xl w-60 h-14 font-semibold" 
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

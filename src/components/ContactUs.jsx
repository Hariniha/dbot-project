import React from 'react';

const ContactUs = () => {
  return (
    <div class="flex flex-col items-center mb-11">
      <h1 class="text-3xl font-semibold text-center text-gray-800 mb-8">CONTACT US</h1>
      <div 
        class="w-full max-w-lg items-center p-24 bg-white rounded-2xl" 
        style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)' }} // Thin outer shadow
      >
        <form action="/submit" method="POST" class="flex flex-col gap-8">
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            class="mb-4 border h-16 w-80" 
            style={{ 
              boxShadow: 'inset 0 4px 6px rgba(0, 0, 0, 0.1)', // All-sided inner shadow
              padding: '12px',
             
            }} 
          />
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            class=" mb-4 border h-16 w-80" 
            style={{ 
              boxShadow: 'inset 0 4px 6px rgba(0, 0, 0, 0.1)', 
              padding: '12px',
              
            }} 
          />
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            class="mb-4 border h-16 w-80" 
            style={{ 
              boxShadow: 'inset 0 4px 6px rgba(0, 0, 0, 0.1)', 
              padding: '12px',
              
            }} 
          />
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            class=" mb-4 border h-16 w-80" 
            style={{ 
              boxShadow: 'inset 0 4px 6px rgba(0, 0, 0, 0.1)', 
              padding: '12px',
             
            }} 
          />
          <div className='flex justify-center mt-4'>
            <button 
              type="submit" 
              class="text-black text-3xl w-60 h-14 font-semibold" 
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

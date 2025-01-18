import React from 'react';

function Header() {
  return (
    <div className="min-h-screen w-full bg-[#EAEAEA] flex items-centerjustify-start">
      <div className="w-[600px] h-6/5 p-8 bg-white rounded-lg ml-32 mt-44 shadow-lg">
      <div className='ml-6 mt-6'>
        <h2 className="text-3xl font-bold mb-14 text-gray-800 ">ABOUT US</h2>
      </div>

      <div><p className="text-gray-600 mb-8 leading-loose">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem
          Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ipsum.
        </p></div>

        <div className='ml-36'><button className="bg-orange-400 mt-12   text-black px-6 py-2   ">
          KNOW MORE
        </button>
        </div>
      </div>

      

      
    </div>
  );
}

export default Header;

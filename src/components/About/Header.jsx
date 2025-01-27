import React from 'react';
import "./css/Header.css"
function Header() {
  return (
    <div className="header w-full bg-[#EAEAEA] flex items-center justify-center sm:justify-start pb-24">
      <div className="w-full sm:w-[500px] h-auto p-6 sm:p-8 bg-white rounded-2xl pt-10 sm:ml-32 sm:mt-44 mt-12 shadow-lg">
        <div className="ml-4 sm:ml-6 mt-4 sm:mt-6">
          <h2 className="text-2xl sm:text-3xl font-semibold font-inter mb-8 sm:mb-14 text-[#48304D]">
            ABOUT US
          </h2>
        </div>

        <div className=" mx-auto px-4">
  <p className="mb-6 w-3/2  font-inter font-light text-base leading-relaxed">
    Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a galley
    of type and scrambled it to make a type specimen book. It has
    survived not only five centuries, but also the leap into electronic
    typesetting, remaining essentially unchanged. It was popularised in
    the 1960s with the release of Letraset sheets containing Lorem
    Ipsum passages, and more recently with desktop publishing
    software like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
</div>


        {/* Button Section */}
        <div className="flex justify-center sm:justify-start ml-0 sm:ml-36 pb-4">
          <button className="bg-[#FCAC35] mt-8 sm:mt-12 font-inter font-semibold text-black px-4 sm:px-6 py-2 text-sm sm:text-base">
            KNOW MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

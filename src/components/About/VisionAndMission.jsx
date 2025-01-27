import React from 'react'
import "./css/VisionAndMission.css"


const VisionAndMission = () => {
  return (
    <div>
      <div className="VisionMachine mt-16 flex justify-center sm:justify-end">
  <h2 className='font-semibold font-inter text-[#48304D] text-4xl sm:text-5xl mr-9'>OUR VISION</h2>
</div>

<div className="mt-16 flex justify-center sm:justify-end">
      <div className="bg-[#EAEAEA] sm:ml-44 ml-4 relative h-auto min-h-[25rem] sm:min-h-[15rem] w-[95%] sm:w-[100%] rounded-l-lg grid grid-cols-1 sm:grid-cols-3 items-center text-black px-4 sm:px-4 py-16 sm:py-12">
        {/* Left Quotation Mark */}
        <div className="absolute top-[20px] left-[20px] sm:left-[20px] text-7xl sm:text-8xl text-black font-bold ">
          &ldquo;
        </div>

        {/* Centered Text */}
        <p className="col-span-1 sm:col-span-3 mx-8 sm:mx-4 text-start font-inter font-extralight text-lg sm:text-base leading-relaxed flex items-center justify-center relative z-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        {/* Right Quotation Mark */}
        <div className="absolute sm:bottom-[-10px] bottom-[5px] right-[20px] sm:right-[20px] text-7xl sm:text-8xl text-black font-bold ">
          &rdquo;
        </div>
      </div>
    </div>

<div className='mt-20 sm:mt-28 flex flex-col sm:flex-row'>
  {/* Mission Heading */}
  <div className='mt-40 sm:mt-40 sm:ml-40'>
    <h2 className=' text-4xl sm:text-5xl text-[#48304D] text-center ' style={{weight:"300",}}>OUR MISSION</h2>
  </div>

  {/* Mission Text */}
  <div className="text-justify font-inter  sm:w-2/4 sm:max-w-[70%] md:max-w-[90%] mt-10 sm:mt-0 sm:px-0 px-4 leading-8 sm:leading-8 relative md:mr-0 z-10 ml-auto" style={{fontWeight:"300"}}>
    <p className='mr-0 sm:mr-20'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
  </div>
</div>

    </div>
  )
}

export default VisionAndMission

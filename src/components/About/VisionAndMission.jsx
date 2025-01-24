import React from 'react'

const VisionAndMission = () => {
  return (
    <div>
      <div >
        <h2 >OUR VISION</h2>
      </div>
      <div className="mt-36 flex justify-end">
        <div className="bg-[#EAEAEA] ml-44 relative h-60 w-[80%] rounded-l-lg grid grid-cols-3 items-center text-black px-6">
          {/* Left Quotation Mark */}
          <div className="absolute top-[20px] left-[50px] text-8xl text-black font-bold">
            &ldquo;
          </div>

          {/* Centered Text in 3 Columns */}
          <p className="col-span-3 ml-10 text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          {/* Right Quotation Mark */}
          <div className="absolute bottom-[-20px] right-[40px] text-8xl text-black font-bold">
            &rdquo;
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisionAndMission

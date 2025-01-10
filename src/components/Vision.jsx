import React from 'react'

const Vision = () => {
  return (
    <div>
      <div>
        <h1 className='flex justify-end right-0 font-semibold text-4xl pt-10 pb-10 pr-3'>
          OUR VISION
        </h1>
      </div>

      <div className="relative">
        {/* Box Container */}
        <div
          style={{
            width: "1551px",
            height: "319px",
            top: "1300px",
            left: "190px",
            backgroundColor: "#EAEAEA"
          }}
          className='ml-60 border rounded-2xl p-8'  // Added padding here
        >
          {/* Text Inside the Box */}
          <div className="text-sm text-gray-700">
            <p className="whitespace-normal break-words">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vision

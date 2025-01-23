import React from "react";

function VisionAndMission() {
  return (
    <div className="bg-gray-100 px-10 py-16">
      {/* OUR VISION Section */}
      <div className="max-w-6xl ml-auto mb-16">
        <div className="relative bg-gray-200 p-8 rounded-lg shadow-md w-full lg:w-2/3">
          <h2 className="text-3xl font-bold text-purple-900 mb-6 text-right">
            OUR VISION
          </h2>
          {/* Left Quotation Mark */}
          <div className="absolute top-[-20px] left-[-20px] text-8xl text-black font-bold">
            &ldquo;
          </div>
          <p className="text-gray-800 text-lg leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          {/* Right Quotation Mark */}
          <div className="absolute bottom-[-20px] right-[-20px] text-8xl text-black font-bold">
            &rdquo;
          </div>
        </div>
      </div>

      {/* OUR MISSION Section */}
      <div className="max-w-6xl mx-auto flex mt-36 items-center gap-32">
  <h2 className="text-2xl font-bold text-purple-900 whitespace-nowrap">
    OUR MISSION
  </h2>
  <p className="text-gray-800 text-lg leading-relaxed">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
</div>


    </div>
  );
}

export default VisionAndMission;

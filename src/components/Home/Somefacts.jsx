import React from "react";
import "./css/Facts.css"


// A reusable ContentCard component
const ContentCard = ({ img, num, title, description }) => {
  return (
    <div className="content-card flex flex-col items-center mt-10 mb-4 w-72 sm:w-64 md:w-80 lg:w-96">
      {/* Image and number in the same row */}
      <div className="flex items-center mb-4">
        <img
          src={img}
          alt={title}
          className="content-img w-10 h-10 rounded-full object-cover mr-4" // mr-4 for spacing between image and text
        />
        <h2 className="content-num text-7xl text-[#48304D] ">{num}</h2>
      </div>

      {/* Title and description in the same column */}
      <h3 className="content-title text-3xl ml-14 pt-1 ">{title}</h3>
      <p className="content-desc text-2xl pt-1 ml-14  ">{description}</p>
    </div>
  );
};

// The main component
const ContentPage = ({ contents }) => {
  return (
    <div className="mt-11">
      {/* Center the "SOME FACTS" heading */}
      <div className="heading text-[#48304D]  md:text-5xl r text-4xl text-center py-10">
        <h2>SOME FACTS</h2>
      </div>

      {/* Display cards in a row on desktop and wrap on smaller screens */}
      <div className="content-page flex flex-wrap justify-center gap-8 sm:gap-16 md:gap-24 mt-11 lg:flex-nowrap">
        {contents.map((content, index) => (
          <ContentCard
            key={index}
            img={content.img}
            num={content.num}
            title={content.title}
            description={content.description}
          />
        ))}
      </div>
    </div>
  );
};

// Sample contents data
const contents = [
  {
    img: "src/assets/clients/black.png",
    num: 123,
    title: "TITLE",
    description: "DESCRIPTION",
  },
  {
    img: "src/assets/clients/black.png",
    num: 123,
    title: "TITLE",
    description: " DESCRIPTION",
  },
  {
    img: "src/assets/clients/black.png",
    num: 123,
    title: "TITLE",
    description: "DESCRIPTION",
  },
  {
    img: "src/assets/clients/black.png",
    num: 123,
    title: "TITLE",
    description: "DESCRIPTION",
  },
];

// Main Component (App)
const Somefacts = () => {
  return <ContentPage contents={contents} />;
};

export default Somefacts;

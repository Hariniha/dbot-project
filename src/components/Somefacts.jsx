import React from "react";

// A reusable ContentCard component
const ContentCard = ({ img, num, title, description }) => {
  return (
    <div className="content-card flex flex-col items-center mt-10  mb-4 w-72 ">
      {/* Image and number in the same row */}
      <div className="flex items-center mb-4">
        <img
          src={img}
          alt={title}
          className="content-img w-10 h-10 rounded-full object-cover mr-4" // mr-4 for spacing between image and text
        />
        <h2 className="content-num text-5xl font-bold">{num}</h2>
      </div>

      {/* Title and description in the same column */}
      <h3 className="content-title text-3xl ml-14 pt-1 font-semibold">{title}</h3>
      <p className="content-description text-2xl pt-1 ml-14 font-light text-gray-600">{description}</p>
    </div>
  );
};

// The main component
const ContentPage = ({ contents }) => {
  return (
    <div className="mt-11">
      {/* Center the "SOME FACTS" heading */}
      <div className="font-semibold text-3xl text-center mb-8">
        <h2>SOME FACTS</h2>
      </div>

      {/* Display cards in a row with equal spacing between them */}
      <div className="content-page flex flex-wrap justify-center gap-10 mt-11">
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
    img: "https://via.placeholder.com/150",
    num: 123,
    title: "TITLE",
    description: "DESCRIPTION",
  },
  {
    img: "https://via.placeholder.com/150",
    num: 123,
    title: "TITLE",
    description: " DESCRIPTION",
  },
  {
    img: "https://via.placeholder.com/150",
    num: 123,
    title: "TITLE",
    description: "DESCRIPTION",
  },
  {
    img: "https://via.placeholder.com/150",
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

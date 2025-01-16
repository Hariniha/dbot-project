import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Header = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:7000,
    arrows: false,
    dots: false,
  };

  return (
    <header className="header-container"  style={{ background: '#ebebeb' }}>
      <Slider {...settings} className='font-semibold text-6xl text-end leading-tight right-0 pr-6 pt-24 pb-11 '>
        <div className="slide-content">
          <h1>TRANSFORMING<br/>AEC INDUSTRY<br/>WITH<br/> DIGITAL INNOVATION </h1>
        </div>
        <div className="slide-content">
          <h1>TRANSFORMING<br/>AEC INDUSTRY<br/>WITH<br/> DIGITAL INNOVATION</h1>
        </div>
        <div className="slide-content">
          <h1>TRANSFORMING<br/>AEC INDUSTRY<br/>WITH<br/> DIGITAL INNOVATION</h1>
        </div>
      </Slider>
      {/* Static Button */}
      <div className="flex justify-center pb-8 mt-6 items-center  ">
      <button
        className="text-white py-3 rounded-md px-6 text-lg"
        style={{ backgroundColor: '#fcad35' }}
      >
        KNOW MORE
      </button>
    </div>
    </header>
  );
};

export default Header;

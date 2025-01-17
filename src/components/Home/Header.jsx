import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Header = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
  };

  return (
    <header className="header-container" style={{ background: '#ebebeb' }}>
     <Slider
  {...settings}
  className="font-semibold text-4xl mb-16 text-end leading-snug right-0 pr-6 pt-24 pb-11 md:text-7xl sm:text-4xl xs:text-2xl"
  style={{ color: '#48304D' }}
>
  <div className="slide-content">
    <h1>
      TRANSFORMING
      <br />
      AEC INDUSTRY
      <br />
      WITH
      <br />
      DIGITAL INNOVATION
    </h1>
  </div>
  <div className="slide-content">
    <h1>
      TRANSFORMING
      <br />
      AEC INDUSTRY
      <br />
      WITH
      <br />
      DIGITAL INNOVATION
    </h1>
  </div>
  <div className="slide-content">
    <h1>
      TRANSFORMING
      <br />
      AEC INDUSTRY
      <br />
      WITH
      <br />
      DIGITAL INNOVATION
    </h1>
  </div>
</Slider>


      {/* Static Button */}
      <div className="flex justify-center px-6 sm:px-20 py-4 ">
        <button
          className="py-3 px-5"
          style={{
            backgroundColor: '#fcad35',
            color: '#000000',
            fontWeight: '600',
            fontSize: '30px',
            lineHeight: '36.31px',
            alignItems: 'center',
          }}
        >
          KNOW MORE
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="gap-3 flex flex-row justify-center  mt-10 pb-10 pt-20 sm:gap-5">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#879797' }}></div>
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#879797' }}></div>
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#879797' }}></div>
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#879797' }}></div>
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#879797' }}></div>
      </div>
    </header>
  );
};

export default Header;

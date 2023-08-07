import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="slider-container" style={{position:"relative",zIndex:"-1000000000"}}>

      <Slider {...settings}>
        <div className="slide">
          <img src="https://www.ipmcareer.com/files/2020/06/iresults2-1-1536x610.jpg" alt="Slide 1" />
        </div>
        <div className="slide">
          <img src="https://www.ipmcareer.com/files/2020/06/iresults2-1-1536x610.jpg" alt="Slide 2" />
        </div>
        <div className="slide">
          <img src="https://www.ipmcareer.com/files/2020/06/iresults2-1-1536x610.jpg" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;

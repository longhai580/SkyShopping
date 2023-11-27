// SliderComponent.js
import React from "react";
import Slider from "react-slick";
import { Image } from 'semantic-ui-react';
import '../styles/slider.css'; // Import file CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderComponent = ({ arrImages, isSliderOpen }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={`slider-container ${isSliderOpen ? 'open' : 'closed'}`}>
      {isSliderOpen && (
        <Slider {...settings}>
          {arrImages.map(image => (
            <Image key={image} src={image} alt="slider" />
          ))}
        </Slider>
      )}
    </div>
  );
}

export default SliderComponent;

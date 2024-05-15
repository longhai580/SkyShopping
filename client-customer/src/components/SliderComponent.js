// SliderComponent.js
import React from "react";
import Slider from "react-slick";
import { Image } from 'semantic-ui-react';
import '../styles/Slider.scss'; // Import file CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderComponent = ({ arrImages, isSliderOpen }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000 // Set autoplay speed to 3 seconds
  };

  return (
    <div className={`slider-container ${isSliderOpen ? 'open' : 'closed'}`}>
    {isSliderOpen && (
      <Slider {...settings}>
        {arrImages.map((image, index) => (
          <div key={index} className="image-container">
            <Image src={image} alt={`slider-${index}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    )}
  </div>
    // <div className={`slider-container ${isSliderOpen ? 'open' : 'closed'}`}>
    //   {isSliderOpen && (
    //     <Slider {...settings}>
    //       {arrImages.map(image => (
    //         <Image key={image} src={image} alt="slider" />
    //       ))}
    //     </Slider>
    //   )}
    // </div>
  );
}

export default SliderComponent;

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './productSlider.css';

const ProductSlider = ({ products }) => {
    //settings for Slider component
    //including screen breakpoint
    const settings = {
        dots: true,
        infinite: false,
        speed: 350,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: 'linear',
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 3,
                infinite: false,
                dots: true,
                swipeToSlide: true,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
                infinite: false,
                swipeToSlide: true,
              }
            }
          ]
    };

    return <Slider {...settings}>
            {products}
        </Slider>
}

export default ProductSlider;

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './productSlider.css';

const ProductSlider = ({ products }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 350,
        slidesToShow: products.length <= 3 ? products.length : 4,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: 'linear',
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: products.length < 3 ? products.length : 3,
                slidesToScroll: 1,
                initialSlide: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: products.length < 2 ? products.length : 2,
                slidesToScroll: 1,
                initialSlide: 2,
                infinite: false
              }
            }
          ]
    };

    return <Slider {...settings}>
            {products}
        </Slider>
}

export default ProductSlider;

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = ({ products }) => {
    let displayProduct = null;
    let settings = null;

    if (products.constructor === Array){
        settings = {
            dots: true,
            infinite: true,
            speed: 100,
            slidesToShow: 4,
            slidesToScroll: 1,
            cssEase: 'linear',
            swipeToSlide: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 550,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        
        displayProduct = products;
    }
    else {
        settings = {
            dots: true,
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 0,
            cssEase: 'linear',
            swipeToSlide: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 0,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 0,
                    initialSlide: 1
                  }
                },
                {
                  breakpoint: 550,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 0
                  }
                }
              ]
        };
        displayProduct = <h2>No Product to Display</h2>
    }

    return <Slider {...settings}>
            {displayProduct}
        </Slider>
}

export default ProductSlider;

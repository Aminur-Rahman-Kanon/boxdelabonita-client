import React from 'react';
import './category.css';
import { Link } from 'react-router-dom';
import { category } from '../../Data/data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './productSlider.css';

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 250,
    initialSlide: 0,
    cssEase: 'linear',
    swipeToSlide: true,
    responsive: [
      {
          breakpoint: 2000,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1100,
          settings: {
            dots: true,
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
      ]
};

//this component renders the links of all item's categories such as backpack, bucket bag, shoulder bag etc
function Category() {
    const categoryDisplay = category.map(item => <Link to={`/bag/${item.route}`} key={item.title} className='categoryItem'>
        <div className='categoryImgContainer'>
            <img src={item.img} alt={item.title} className='categoryImg' />
        </div>
        <div className='categoryDetailsContainer'>
            <span className='categoryTitle'>{item.title}</span>
        </div>
    </Link>)

    return (
        <div className='categoryContainer'>
            {/* <div className={styles.category}>
                {categoryDisplay}
            </div> */}
            <Slider {...settings}>
                {categoryDisplay}
            </Slider>
        </div>
    )
}

export default Category

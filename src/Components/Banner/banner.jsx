import React, { useEffect, useState } from 'react';
import './banner.css';
import bag1 from '../../Assets/Banner/bags/test1.png';
import banner2img2 from '../../Assets/Banner/bags/banner2img2.png';
import banner2img3 from '../../Assets/Banner/bags/banner2img3.png';
import banner2main from '../../Assets/Banner/bags/banner2main.png';
import banner3main from '../../Assets/Banner/bags/testMain.png';
import banner3img1 from '../../Assets/Banner/bags/banner3img1.png';
import banner3img2 from '../../Assets/Banner/bags/banner3img2.png';
import { isElementInViewport } from '../../Utilities/utilities';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import bannerVideo from '../../Assets/videos/banner.mp4';

function Banner() {
    return (
        <div className='banner-container'>
            <div className='video-wrapper'>
                <video src={bannerVideo} type='video/mp4' autoPlay loop muted playsInline className='video'></video>
            </div>
            <div className='banner-header'>
                <h2 className='banner-h2'>Make your day with <span className='title'>Boxdelabonita</span></h2>
                <p className='banner-p'>Boxdelabonita proud to presents you all categories of luxurious bag with a unbeatable price.</p>
                <div className='btn-group'>
                    <Link to={'/bag/all bags'} className='btn'>
                        view all bags
                        {/* <span className='btn-slider'></span>
                        <span className='btn-text'>View All Bags</span> */}
                    </Link>
                    <Link to={'/about'} className='btn'>
                        about us
                        {/* <span className='btn-slider'></span>
                        <span className='btn-text'>About Us</span> */}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner

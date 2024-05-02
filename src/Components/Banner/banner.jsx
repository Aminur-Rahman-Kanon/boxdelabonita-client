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

    //initially we set banner-item1 in this state
    //in onSlideChange api of swiper component change this state variable from banner-item1 to banner-item2 so on andso forth
    //so we can pass the value of this variable to isElementInViewport api
    // const [carouselItem, setCarouselItem] = useState('banner-Item1-Inner');

    // useEffect(() => {
    //     //in this hook
    //     //isElementInViewport api takes the value from carouselItem which is the id of the inner slider component
    //     //so we can make some animation of the elements of the banner-item*-inner component
    //     //it return an timer id of setTimeOut api that we need to clear after each slide
    //     //all this happens everytime the carouselItem state variable change
    //     const timers = isElementInViewport(carouselItem);

    //     return () => {
    //         //after the animation completed of each slide we clear the timer that returns from isElementInViewport api
    //         if (timers !== undefined) {
    //             timers.forEach(timer => clearTimeout(timer));
    //         }
    //     }
    // }, [carouselItem]);

    // return (
    //     <div className="banner-container">
    //         <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
    //                 spaceBetween={50}
    //                 autoplay={{ delay: 7000, disableOnInteraction: false }}
    //                 slidesPerView={1}
    //                 navigation={true}
    //                 pagination={{ clickable: true }}
    //                 onSlideChange={(idx) => setCarouselItem(`banner-Item${idx.activeIndex+1}-Inner`)}>
    //             <SwiperSlide>
    //                 <div className="banner-Item2-Container">
    //                     <div className="banner-Item1-Inner" id='item1'>
    //                         <div className='banner-item2-side'>
    //                             <div className="banner-Item2-Header">
    //                                 <div className="banner-Item2-H2">N</div>
    //                                 <div className="banner-Item2-H2">E</div>
    //                                 <div className="banner-Item2-H2">W</div>
    //                                 <div className="banner-Item2-H2" style={{display: 'inline-block', margin: '0 5px'}}></div>
    //                                 <div className="banner-Item2-H2">A</div>
    //                                 <div className="banner-Item2-H2">R</div>
    //                                 <div className="banner-Item2-H2">R</div>
    //                                 <div className="banner-Item2-H2">I</div>
    //                                 <div className="banner-Item2-H2">V</div>
    //                                 <div className="banner-Item2-H2">A</div>
    //                                 <div className="banner-Item2-H2">L</div>
    //                                 <div className="banner-Item2-H2">S</div>
    //                             </div>
    //                             <div className='bannner-img2-side-img-container'>
    //                                 <img src={banner2img2} alt='new arrivals' className='banner-img2-side-img1'/>
    //                             </div>
    //                         </div>
    //                         <div className='banner-item2-main-img-container'>
    //                             <img src={banner2main} alt='new arrivals' className='banner-item2-main-img'/>
    //                         </div>
    //                         <div className='banner-item2-side'>
    //                             <div className='bannner-img2-side-img-container'>
    //                                 <img src={banner2img3} alt='new arrivals' className='banner-img2-side-img2'/>
    //                             </div>
    //                             <Link to={""} className='banner2-link'>Lets Shop</Link>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </SwiperSlide>
    //             <SwiperSlide>
    //                 <div className="banner-Item1-Container">
    //                     <div className="banner-Item2-Inner" id='item2'>
    //                         <div className="banner-Item-Inner-Details">
    //                             <div className="banner-Item-Header">
    //                                 <div className="banner-Item-H2">M</div>
    //                                 <div className="banner-Item-H2">O</div>
    //                                 <div className="banner-Item-H2">S</div>
    //                                 <div className="banner-Item-H2">T</div>
    //                                 <div className="banner-Item-H2" style={{display: 'inline-block', margin: '0 5px'}}></div>
    //                                 <div className="banner-Item-H2">P</div>
    //                                 <div className="banner-Item-H2">O</div>
    //                                 <div className="banner-Item-H2">P</div>
    //                                 <div className="banner-Item-H2">U</div>
    //                                 <div className="banner-Item-H2">L</div>
    //                                 <div className="banner-Item-H2">A</div>
    //                                 <div className="banner-Item-H2">R</div>
    //                             </div>
    //                             <h4 className="banner-Item-H4">Large Capacity Crossbody Bag</h4>
    //                             <div className='additional-details'>
    //                                 <ul className='additional-lists'>
    //                                     <li className='additional-list'>Height 8 inch</li>
    //                                     <li className='additional-list'>length 7,5 inch</li>
    //                                     <li className='additional-list'>1 single chamber</li>
    //                                     <li className='additional-list'>Emroidered on leather</li>
    //                                     <li className='additional-list'>Pu leather Long belt</li>
    //                                 </ul>
    //                             </div>
    //                             <button className="banner-Item-Btn">Buy Now</button>
    //                         </div>
    //                         <div className="banner-Item-Img-Container">
    //                             <img src={bag1} alt="large capacity crossbody bag" className="banner-Item-Img" />
    //                         </div>
    //                     </div>
    //                 </div>
    //             </SwiperSlide>
    //             <SwiperSlide>
    //                 <div className="banner-Item3-Container">
    //                     <div className="banner-Item3-Inner" id='item3'>
    //                         <div className='banner-Item3-Main'>
    //                             <div className='banner-item3-side'>
    //                                 <div className="banner-Item3-Header">
    //                                     <div className="banner-Item3-H2">B</div>
    //                                     <div className="banner-Item3-H2">O</div>
    //                                     <div className="banner-Item3-H2">X</div>
    //                                     {/* <div className="banner-Item3-H2" style={{display: 'inline-block', margin: '0 5px'}}></div> */}
    //                                     <div className="banner-Item3-H2">D</div>
    //                                     <div className="banner-Item3-H2">E</div>
    //                                     <div className="banner-Item3-H2">L</div>
    //                                     <div className="banner-Item3-H2">A</div>
    //                                     <div className="banner-Item3-H2">B</div>
    //                                     <div className="banner-Item3-H2">O</div>
    //                                     <div className="banner-Item3-H2">N</div>
    //                                     <div className="banner-Item3-H2">I</div>
    //                                     <div className="banner-Item3-H2">T</div>
    //                                     <div className="banner-Item3-H2">A</div>
    //                                 </div>
    //                                 <div className='banner3-side-imgs-container'>
    //                                     <div className='banner3-side-img-container'>
    //                                         <img src={banner3img1} alt="black friday sale" className='banner3-side-img'/>
    //                                     </div>
    //                                     <div className='banner3-side-img-container'>
    //                                         <img src={banner3img2} alt="black friday sale" className='banner3-side-img'/>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <div className='banner3-main-img-container'>
    //                                 <img src={banner3main} alt='black friday sale' className='banner3-main-img'/>
    //                             </div>
    //                         </div>
    //                         <div className='banner3-link-container'>
    //                             <Link to={''} className='banner3-link'>Shop Now</Link>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </SwiperSlide>
    //         </Swiper>
    //     </div>
    // )


    return (
        <div className='banner-container'>
            <div className='video-wrapper'>
                <video src={bannerVideo} type='video/mp4' autoPlay loop muted playsInline className='video'></video>
            </div>
            <div className='banner-header'>
                <h2 className='banner-h2'>Make your day with <span className='title'>Boxdelabonita</span></h2>
                <p className='banner-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque quam aperiam provident sed omnis quis</p>
                <div className='btn-group'>
                    <Link to={'/bag/all bags'} className='btn'>
                        <span className='btn-slider'></span>
                        <span className='btn-text'>View All Bags</span>
                    </Link>
                    <Link to={'/about'} className='btn'>
                        <span className='btn-slider'></span>
                        <span className='btn-text'>About Us</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner

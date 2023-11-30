import React, { useEffect, useState } from 'react';
import './banner.css';
import bag1 from '../../Assets/Banner/bags/bag1.png';
import bag2 from '../../Assets/Banner/bags/bag2.png';
import bag3 from '../../Assets/Banner/bags/bag3.png';
import bag4 from '../../Assets/Banner/bags/bag4.png';
import { isElementInViewport } from '../../Utilities/utilities';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import Swi {} from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Banner() {

    const [carouselItem, setCarouselItem] = useState('banner-Item1-Inner');

    useEffect(() => {
        const timers = isElementInViewport(carouselItem);

        return () => {
            if (timers.length) {
                timers.forEach(timer => clearTimeout(timer));
            }
        }
    }, [carouselItem]);

    return (
        <div className="banner-container">
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    autoplay={{ delay: 7000, disableOnInteraction: false }}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    onSlideChange={(idx) => setCarouselItem(`banner-Item${idx.activeIndex+1}-Inner`)}>
                <SwiperSlide>
                    <div className="banner-Item1-Container">
                        <div className="banner-Item1-Inner">
                            <div className="banner-Item-Inner-Details">
                                <div className="banner-Item-Header">
                                    <div className="banner-Item-H2">M</div>
                                    <div className="banner-Item-H2">O</div>
                                    <div className="banner-Item-H2">S</div>
                                    <div className="banner-Item-H2">T</div>
                                    <div className="banner-Item-H2" style={{display: 'inline-block', margin: '0 5px'}}></div>
                                    <div className="banner-Item-H2">P</div>
                                    <div className="banner-Item-H2">O</div>
                                    <div className="banner-Item-H2">P</div>
                                    <div className="banner-Item-H2">U</div>
                                    <div className="banner-Item-H2">L</div>
                                    <div className="banner-Item-H2">A</div>
                                    <div className="banner-Item-H2">R</div>
                                </div>
                                <h4 className="banner-Item-H4">Large Capacity Crossbody Bag</h4>
                                <button className="banner-Item-Btn">Buy Now</button>
                            </div>
                            <div className="banner-Item-Img-Container">
                                <img src={bag1} alt="large capacity crossbody bag" className="banner-Item-Img" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-Item2-Container">
                        <div className="banner-Item2-Inner">
                            <div className="banner-Item-Inner-Details">
                                <div className="banner-Item-Header">
                                    <div className="banner-Item-H2">M</div>
                                    <div className="banner-Item-H2">O</div>
                                    <div className="banner-Item-H2">S</div>
                                    <div className="banner-Item-H2">T</div>
                                    <div className="banner-Item-H2" style={{display: 'inline-block', margin: '0 5px'}}></div>
                                    <div className="banner-Item-H2">P</div>
                                    <div className="banner-Item-H2">O</div>
                                    <div className="banner-Item-H2">P</div>
                                    <div className="banner-Item-H2">U</div>
                                    <div className="banner-Item-H2">L</div>
                                    <div className="banner-Item-H2">A</div>
                                    <div className="banner-Item-H2">R</div>
                                </div>
                                <h4 className="banner-Item-H4" id='reverse-H4'>Large Capacity Crossbody Bag</h4>
                                <button className="banner-Item-Btn">Buy Now</button>
                            </div>
                            <div className="banner-Item-Img-Container">
                                <img src={bag2} alt="large capacity crossbody bag" className="banner-Item-Img" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-Item3-Container">
                        <div className="banner-Item3-Inner">
                            <div className="banner-Item-Inner-Details">
                                <div className="banner-Item-Header">
                                    <div className="banner-Item-H2">M</div>
                                    <div className="banner-Item-H2">O</div>
                                    <div className="banner-Item-H2">S</div>
                                    <div className="banner-Item-H2">T</div>
                                    <div className="banner-Item-H2" style={{display: 'inline-block', margin: '0 5px'}}></div>
                                    <div className="banner-Item-H2">P</div>
                                    <div className="banner-Item-H2">O</div>
                                    <div className="banner-Item-H2">P</div>
                                    <div className="banner-Item-H2">U</div>
                                    <div className="banner-Item-H2">L</div>
                                    <div className="banner-Item-H2">A</div>
                                    <div className="banner-Item-H2">R</div>
                                </div>
                                <h4 className="banner-Item-H4">Large Capacity Crossbody Bag</h4>
                                <button className="banner-Item-Btn">Buy Now</button>
                            </div>
                            <div className="banner-Item-Img-Container">
                                <img src={bag3} alt="large capacity crossbody bag" className="banner-Item-Img" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-Item4-Container">
                        <div className="banner-Item4-Inner">
                            <div className="banner-Item-Inner-Details">
                                <div className="banner-Item-Header">
                                    <div className="banner-Item-H2" style={{color: 'rgb(55,55,55'}}>M</div>
                                    <div className="banner-Item-H2" style={{color: 'rgb(55,55,55'}}>O</div>
                                    <div className="banner-Item-H2" style={{color: 'rgb(55,55,55'}}>S</div>
                                    <div className="banner-Item-H2" style={{color: 'rgb(55,55,55'}}>T</div>
                                    <div className="banner-Item-H2" style={{display: 'inline-block', margin: '0 5px'}}></div>
                                    <div className="banner-Item-H2" style={{color: 'rgb(55,55,55'}}>P</div>
                                    <div className="banner-Item-H2" style={{color: 'rgb(55,55,55'}}>O</div>
                                    <div className="banner-Item-H2" style={{color: 'rgb(55,55,55'}}>P</div>
                                    <div className="banner-Item-H2" style={{color: 'rgb(55,55,55'}}>U</div>
                                    <div className="banner-Item-H2" style={{color: 'rgb(55,55,55'}}>L</div>
                                    <div className="banner-Item-H2" style={{color: 'rgb(55,55,55'}}>A</div>
                                    <div className="banner-Item-H2" style={{color: 'rgb(55,55,55'}}>R</div>
                                </div>
                                <h4 className="banner-Item-H4" style={{color: 'rgb(55,55,55'}} id='reverse-H4'>Large Capacity Crossbody Bag</h4>
                                <button className="banner-Item-Btn" style={{ border: '1px solid rgb(55,55,55)', color: 'rgb(55,55,55)' }}>Buy Now</button>
                            </div>
                            <div className="banner-Item-Img-Container">
                                <img src={bag4} alt="large capacity crossbody bag" className="banner-Item-Img" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner

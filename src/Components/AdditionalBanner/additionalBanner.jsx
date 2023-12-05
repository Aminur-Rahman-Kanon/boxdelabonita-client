import React from 'react';
import styles from './additionalBanner.module.css';
import banner1 from '../../Assets/additionalBanner/a_banner_1.jpg';
import banner2 from '../../Assets/additionalBanner/a_banner_2.jpg';
import banner3 from '../../Assets/additionalBanner/a_banner_3.png';
import banner4 from '../../Assets/additionalBanner/a_banner_4.png';

const img = {
    casual: banner1,
    newArrivals: banner2,
    mostPopular: banner3,
    trending: banner4
}

const AdditionalBanner = ({ type }) => {
  return (
    <div className={styles.bannerImgContainer}>
        <img src={img[type]} alt="casual style ladies bag" className={styles.bannerImg}/>
    </div>
  )
}

export default AdditionalBanner;

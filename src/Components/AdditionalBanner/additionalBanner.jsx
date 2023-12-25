import React from 'react';
import styles from './additionalBanner.module.css';
import banner1 from '../../Assets/additionalBanner/a_banner_6.jpg';
import banner2 from '../../Assets/additionalBanner/a_banner_2.jpg';
import banner3 from '../../Assets/additionalBanner/a_banner_3.jpg';
import banner4 from '../../Assets/additionalBanner/a_banner_7.jpg';
import banner5 from '../../Assets/additionalBanner/a_banner_5.jpg';

const img = {
    casual: banner1,
    newArrivals: banner5,
    mostPopular: banner3,
    trending: banner4
}

const AdditionalBanner = ({ type }) => {
  return (
    <div className={styles.bannerImgContainer} style={{backgroundImage: `url(${img[type]})`}}>
      
    </div>
  )
}

export default AdditionalBanner;

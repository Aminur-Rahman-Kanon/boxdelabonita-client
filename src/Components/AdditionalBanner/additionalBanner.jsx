import React from 'react';
import styles from './additionalBanner.module.css';
import banner1 from '../../Assets/additionalBanner/a_banner_6.jpg';
import banner2 from '../../Assets/additionalBanner/a_banner_3.jpg';
import banner3 from '../../Assets/additionalBanner/a_banner_7.jpg';
import banner4 from '../../Assets/additionalBanner/a_banner_5.jpg';

//images are categorized as category so we can pass a prop to render different image
const img = {
    casual: banner1,
    newArrivals: banner4,
    mostPopular: banner2,
    trending: banner3
}

const AdditionalBanner = ({ type }) => {
  return (
    <div className={styles.bannerImgContainer} style={{backgroundImage: `url(${img[type]})`}}>
      
    </div>
  )
}

export default AdditionalBanner;

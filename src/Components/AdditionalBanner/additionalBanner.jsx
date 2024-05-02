import React from 'react';
import styles from './additionalBanner.module.css';
import banner from '../../Assets/additionalBanner/banner.jpg';
import img1 from '../../Assets/additionalBanner/img1.jpg';
import img2 from '../../Assets/additionalBanner/img2.jpg';
import img3 from '../../Assets/additionalBanner/img3.jpg';
import img4 from '../../Assets/additionalBanner/img4.jpg';

const AdditionalBanner = () => {
  return (
    <div className={styles.bannerImgContainer}>
        <div className={styles.imgContainer}>
            <img src={banner} alt='boxdelabonita' className={styles.img} />
        </div>
        <div className={styles.headerContainer}>
            <div className={styles.headerItem}>
                <div className={styles.headerImgContainer}>
                    <img src={img1} alt='boxdelabonita' className={styles.headerImg} />
                </div>
                <div className={styles.headerDetails}>
                    <h3 className={styles.headerH3}>Gorgeous</h3>
                    <p className={styles.headerP}>Boxdelabonita proud to offer a whole range of luxurious bags</p>
                </div>
            </div>
            <div className={styles.headerItem}>
                <div className={styles.headerImgContainer}>
                    <img src={img2} alt='boxdelabonita' className={styles.headerImg} />
                </div>
                <div className={styles.headerDetails}>
                    <h3 className={styles.headerH3}>Versatility</h3>
                    <p className={styles.headerP}>A backpack is much more than just a bag to carry your belongings.</p>
                </div>
            </div>
            <div className={styles.headerItem}>
                <div className={styles.headerImgContainer}>
                    <img src={img3} alt='boxdelabonita' className={styles.headerImg} />
                </div>
                <div className={styles.headerDetails}>
                    <h3 className={styles.headerH3}>Comfort</h3>
                    <p className={styles.headerP}>Bags from Boxdelabonita is not only stylish but also comparatively comfortable.</p>
                </div>
            </div>
            <div className={styles.headerItem}>
                <div className={styles.headerImgContainer}>
                    <img src={img4} alt='boxdelabonita' className={styles.headerImg} />
                </div>
                <div className={styles.headerDetails}>
                    <h3 className={styles.headerH3}>Spaciousness</h3>
                    <p className={styles.headerP}>All of our bags have ample space so you can carry all your essential belongings.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdditionalBanner;

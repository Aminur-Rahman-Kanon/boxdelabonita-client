import React from 'react';
import styles from './sideBackground.module.css';
import img1 from '../../../Assets/sideBackground/1.jpg';
import img2 from '../../../Assets/sideBackground/2.jpg';
import img3 from '../../../Assets/sideBackground/3.jpg';
import img4 from '../../../Assets/sideBackground/4.jpg';

const imgObj = {
    'new-arrivals': img1,
    'trending': img2,
    'popular-products': img3,
    'hot-deals': img4
}

const SideBackground = ({ content }) => {
  return (
    <div className={styles.sideBgImgContainer}>
        <img src={imgObj[content]} alt={content} className={styles.sideBgImg}/>
        <button className={styles.sideBgBtn}>Show Collection</button>
    </div>
  )
}

export default SideBackground;

import React from 'react';
import styles from './defaultRoute.module.css';
import img from '../../Assets/Others/404.jpg';

const DefaultRoute = () => {
    return (
        <div className={styles.defaultRouteContainer}>
            <img src={img} alt="not found" className={styles.img}/>
        </div>
    )
}

export default DefaultRoute;

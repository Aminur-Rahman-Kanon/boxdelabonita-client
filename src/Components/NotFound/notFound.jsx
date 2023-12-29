import React from "react";
import styles from './notFound.module.css';
import img from '../../Assets/Others/notFound.jpg';

const NotFound = ({ text }) => {

    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.imgContainer}>
                <img src={img} alt="not found" className={styles.img}/>
            </div>
            <h3>{text}</h3>
        </div>
    )
}

export default NotFound;

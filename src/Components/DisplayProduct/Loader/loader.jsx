import React, { useEffect, useState } from 'react';
import styles from './loader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader = () => {

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setInnerWidth(window.innerWidth)
        })
    }, []);

    let displayTopImgs = null;
    let displayBottomImgs = null;

    if (innerWidth <= 900){
        displayTopImgs = Array.from(Array(4)).map((item, idx) => <div key={idx} className={styles.sliderImgContainer}>
            <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.loader}/>
        </div>)

        displayBottomImgs = Array.from(Array(4)).map((item, idx) => <div key={idx} className={styles.productDetailsContainer}>
            <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.loader}/>
        </div>)
    }
    else {
        displayTopImgs = Array.from(Array(7)).map((item, idx) => <div key={idx} className={styles.sliderImgContainer}>
            <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.loader}/>
        </div>)

        displayBottomImgs = Array.from(Array(4)).map((item, idx) => <div key={idx} className={styles.productDetailsContainer}>
            <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.loader}/>
        </div>)
    }

    return (
        <div className={styles.loaderContainer}>
            <div className={styles.section1}>
                {displayTopImgs}
            </div>
            <div className={styles.section2}>
                <div className={styles.mainImageContainer}>
                    <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.loader}/>
                </div>
                <div className={styles.detailsContainer}>
                    {displayBottomImgs}
                </div>
            </div>
        </div>
    )
}

export default Loader

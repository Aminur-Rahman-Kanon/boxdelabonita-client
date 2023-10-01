import React from 'react';
import styles from './loader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader = () => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.section1}>
                {Array.from(Array(8)).map((item, idx) => <div key={idx} className={styles.sliderImgContainer}>
                    <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.loader}/>
                </div>)}
            </div>
            <div className={styles.section2}>
                <div className={styles.mainImageContainer}>
                    <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.loader}/>
                </div>
                <div className={styles.detailsContainer}>
                    {Array.from(Array(7)).map((item, idx) => <div key={idx} className={styles.productDetailsContainer}>
                        <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.loader}/>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Loader

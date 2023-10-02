import React from 'react';
import styles from './loader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader = () => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.imgContainer}>
                <FontAwesomeIcon icon={ faSpinner } spinPulse className={styles.img}/>
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.details}></div>
                <div className={styles.details}></div>
            </div>
        </div>
    )
}

export default Loader;

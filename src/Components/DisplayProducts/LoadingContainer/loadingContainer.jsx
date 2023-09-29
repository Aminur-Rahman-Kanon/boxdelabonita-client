import React from 'react';
import styles from './loadingContainer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingContainer = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.imgContainer}>
                <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.loadingIcon}/>
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.details}></div>
                <div className={styles.details}></div>
            </div>
        </div>
    )
}

export default LoadingContainer

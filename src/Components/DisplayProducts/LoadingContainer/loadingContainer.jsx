import React from 'react';
import styles from './loadingContainer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingContainer = () => {
    return (
        <div className={styles.loadingContainer}>
            <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.loadingIcon}/>
        </div>
    )
}

export default LoadingContainer

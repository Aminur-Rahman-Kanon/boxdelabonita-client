import React from 'react';
import styles from './loading.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.loadingIcon}/>
        </div>
    )
}

export default Loading;

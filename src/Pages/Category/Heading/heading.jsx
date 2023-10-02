import React from 'react';
import styles from './heading.module.css';

const Heading = ({ heading }) => {
    return (
        <div className={styles.headingContainer}>
            <h1 className={styles.heading}>{heading}</h1>
        </div>
    )
}

export default Heading

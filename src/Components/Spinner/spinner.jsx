import React from 'react';
import styles from './spinner.module.css';

const Spinner = ({ spinner }) => {
    
    if (!spinner) return;

    return (
        <section className={styles.spinnerContainer}>
            <div className={styles.spinner}>
                <span className={styles.spinnerItem}></span>
                <span className={styles.spinnerItem}></span>
                <span className={styles.spinnerItem}></span>
                <span className={styles.spinnerItem}></span>
            </div>
        </section>
    )
}

export default Spinner

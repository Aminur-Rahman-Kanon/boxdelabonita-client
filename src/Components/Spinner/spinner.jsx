import React from 'react';
import styles from './spinner.module.css';
import Logo from '../Logo/logo';

//this component display a loader spinner when spinner prop is true
const Spinner = ({ spinner }) => {
    //if spinner prop is false we dont render the component
    if (!spinner) return;

    return (
        <section data-testid='loading-spinner' className={styles.spinnerContainer}>
            <div className={styles.logoContainer}>
                <Logo width={'100%'}/>
            </div>
            <div className={styles.spinner}>
                <span className={styles.spinnerItem}></span>
                <span className={styles.spinnerItem}></span>
                <span className={styles.spinnerItem}></span>
                <span className={styles.spinnerItem}></span>
            </div>
        </section>
    )
}

export default Spinner;

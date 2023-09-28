import React from 'react';
import styles from './logo.module.css';
import logo from '../../Assets/Logo/logo.jpeg';

function Logo() {
    return (
        <div className={styles.logoContainer}>
            <img src={logo} alt="boxdelabonita" className={styles.logo}/>
        </div>
    )
}

export default Logo

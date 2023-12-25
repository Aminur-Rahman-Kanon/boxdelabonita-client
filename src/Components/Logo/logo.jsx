import React from 'react';
import styles from './logo.module.css';
import logo from '../../Assets/Logo/logo.png';

function Logo() {
    return (
        <a href="/" className={styles.logoContainer}>
            <img src={logo} alt="boxdelabonita" className={styles.logo}/>
        </a>
    )
}

export default Logo

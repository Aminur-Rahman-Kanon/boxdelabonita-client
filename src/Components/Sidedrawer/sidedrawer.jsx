import React from 'react';
import styles from './sidedrawer.module.css';
import Logo from '../Logo/logo';
import Navbar from '../Navbar/navbar';

function Sidedrawer({ sidedrawer }) {
    return (
        <div className={sidedrawer ? `${styles.sidedrawerContainer} ${styles.show}` : styles.sidedrawerContainer}>
            <Logo />
            <Navbar />
        </div>
    )
}

export default Sidedrawer

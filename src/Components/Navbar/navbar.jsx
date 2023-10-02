import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className={styles.navbarContainer}>
            <ul className={styles.navbarItems}>
                <li className={styles.navbarItem}>
                    <a href='/' className={styles.navbarLink}>HOME</a>
                </li>
                <li className={styles.navbarItem}>
                    <a href="" className={styles.navbarLink}>SHOP</a>
                </li>
                <li className={styles.navbarItem}>
                    <a href='' className={styles.navbarLink}>PRODUCT</a>
                </li>
                <li className={styles.navbarItem}>
                    <a href="" className={styles.navbarLink}>ABOUT</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

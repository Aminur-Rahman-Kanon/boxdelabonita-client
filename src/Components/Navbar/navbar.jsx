import React from 'react';
import styles from './navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbarContainer}>
            <ul className={styles.navbarItems}>
                <li className={styles.navbarItem}>
                    <a className={styles.navbarLink}>HOME</a>
                </li>
                <li className={styles.navbarItem}>
                    <a className={styles.navbarLink}>SHOP</a>
                </li>
                <li className={styles.navbarItem}>
                    <a className={styles.navbarLink}>PRODUCT</a>
                </li>
                <li className={styles.navbarItem}>
                    <a className={styles.navbarLink}>ABOUT</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className={styles.navbarContainer}>
            <ul className={styles.navbarItems}>
                <li className={styles.navbarItem}>
                    <Link to='/' className={styles.navbarLink}>HOME</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link to="" className={styles.navbarLink}>SHOP</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link to="" className={styles.navbarLink}>PRODUCT</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link to="" className={styles.navbarLink}>ABOUT</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

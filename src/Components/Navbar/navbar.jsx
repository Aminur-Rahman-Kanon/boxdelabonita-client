import React from 'react';
import styles from './navbar.module.css';
import Shop from './Shop/shop';
import Category from './Category/category';

function Navbar({ toggleSidedrawer }) {

    const location = window.location.pathname;

    return (
        <nav className={styles.navbarContainer}>
            <ul className={styles.navbarItems}>
                <li className={styles.navbarItem}>
                    <a href='/' className={location === '/' ? `${styles.navbarLink} ${styles.active}` : styles.navbarLink}>HOME</a>
                </li>
                <li className={styles.navbarItem}>
                    <div className={styles.navbarLink}>SHOP</div>
                    <div className={styles.shop}>
                        <Shop toggleSidedrawer={toggleSidedrawer} />
                    </div>
                </li>
                <li className={styles.navbarItem}>
                    <div className={styles.navbarLink}>CATEGORY</div>
                    <div className={styles.category}>
                        <Category toggleSidedrawer={toggleSidedrawer} />
                    </div>
                </li>
                <li className={styles.navbarItem}>
                    <a href="" className={styles.navbarLink}>ABOUT</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;

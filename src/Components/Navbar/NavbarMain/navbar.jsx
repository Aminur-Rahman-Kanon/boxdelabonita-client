import React, { useEffect, useState, useContext } from 'react';
import ContextApi from '../../ContextApi/contextApi';
import styles from './navbar.module.css';
import Shop from '../Shop/shop';
import Category from '../Category/category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    //storing the location pathname to this variable
    //so we can conditionaly identify the active route
    const { toggleCategory, setToggleCategory, toggleShop, setToggleShop } = useContext(ContextApi);
    
    const location = window.location.pathname;

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setInnerWidth(window.innerWidth));
    }, [])

    const toggleCategoryHandler = () => {
        if (innerWidth >= 850) return;
        setToggleCategory(true);
    }

    const toggleShopHandler = () => {
        if (innerWidth >= 850) return;
        setToggleShop(true);
    }

    return (
        <nav className={styles.navbarContainer}>
            <ul className={styles.navbarItems}>
                <li className={styles.navbarItem}>
                    <a href='/' className={location === '/' ? `${styles.navbarLink} ${styles.active}` : styles.navbarLink}>HOME</a>
                </li>
                <li className={styles.navbarItem}>
                    <div data-testid='shop' className={styles.navbarLink} onClick={toggleShopHandler}>SHOP</div>
                    <div className={styles.shop}>
                        <Shop />
                    </div>
                </li>
                <li className={styles.navbarItem}>
                    <div data-testid='category' className={styles.navbarLink} onClick={toggleCategoryHandler}>CATEGORY</div>
                    <div className={styles.category}>
                        <Category />
                    </div>
                </li>
                <li className={styles.navbarItem}>
                    <a href="/about" className={styles.navbarLink}>ABOUT</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;

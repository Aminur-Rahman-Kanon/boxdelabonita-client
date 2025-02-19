import React, { useContext } from 'react';
import ContextApi from '../ContextApi/contextApi';
import styles from './sidedrawer.module.css';
import Logo from '../Logo/logo';
import BottomNavItem from '../BottomNavItem/bottomNavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faX } from '@fortawesome/free-solid-svg-icons';
import Shop from '../Navbar/Shop/shop';
import Category from '../Navbar/Category/category';

function Sidedrawer() {

    const { sidedrawer,
        toggleSidedrawer,
        toggleShop,
        setToggleShop,
        toggleCategory,
        setToggleCategory
     } = useContext(ContextApi);
     console.log(sidedrawer);
     

    return (
        <div className={sidedrawer ? `${styles.sidedrawerContainer} ${styles.show}` : styles.sidedrawerContainer}>
            <div className={styles.container}>
                <div className={styles.xContainer} onClick={toggleSidedrawer}>
                    <FontAwesomeIcon icon={faX} className={styles.x}/>
                </div>
                <div className={styles.top}>
                    <Logo width={'150px'}/>
                    <ul className={styles.navbarContainer}>
                        <li className={styles.navbar}>
                            <a href='/' className={styles.link}>Home</a>
                        </li>
                        <li className={styles.parentList}>
                            <span className={styles.parent} onClick={() => setToggleShop(true)}>Shop</span>
                            <div className={toggleShop ? `${styles.child} ${styles.slideRight}` : styles.child}>
                                <div className={styles.angleLeftContainer} onClick={() => setToggleShop(false)}>
                                    <FontAwesomeIcon icon={ faAngleLeft } className={styles.angleIcon} />
                                </div>
                                <div className={styles.childContainer}>
                                    <Shop />
                                </div>
                            </div>
                        </li>
                        <li className={styles.parentList}>
                            <span className={styles.parent} onClick={() => setToggleCategory(true)}>Category</span>
                            <div className={toggleCategory ? `${styles.child} ${styles.slideRight}` : styles.child}>
                                <div className={styles.angleLeftContainer} onClick={() => setToggleCategory(false)}>
                                    <FontAwesomeIcon icon={ faAngleLeft } className={styles.angleIcon} />
                                </div>
                                <div className={styles.childContainer}>
                                    <Category />
                                </div>
                            </div>
                        </li>
                        <li className={styles.navbar}>
                            <a href='/about' className={styles.link}>About</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.bottom}>
                    <BottomNavItem />
                </div>
            </div>
        </div>
    )
}

export default Sidedrawer

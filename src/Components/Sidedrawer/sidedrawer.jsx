import React from 'react';
import styles from './sidedrawer.module.css';
import Logo from '../Logo/logo';
import Navbar from '../Navbar/NavbarMain/navbar';
import BottomNavItem from '../BottomNavItem/bottomNavItem';

function Sidedrawer({ sidedrawer }) {
    return (
        <div className={sidedrawer ? `${styles.sidedrawerContainer} ${styles.show}` : styles.sidedrawerContainer}>
            <Logo width={'150px'}/>
            <Navbar />
            <BottomNavItem />
        </div>
    )
}

export default Sidedrawer

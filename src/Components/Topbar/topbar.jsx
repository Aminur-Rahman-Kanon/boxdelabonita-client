import React from 'react';
import styles from './topbar.module.css';
import Logo from '../Logo/logo';
import Navbar from '../Navbar/navbar';
import TopbarPanel from '../TopbarPanel/topbarPanel';
import Drawtoogle from '../Drawtoggle/drawtoogle';

function Topbar({ toggleSidedrawer }) {
    return (
        <div className={styles.topbarContainer}>
            <Drawtoogle toggleSidedrawer={toggleSidedrawer} />
            <div className={styles.topbarItem}>
                <Logo />
            </div>
            <div className={styles.topbarItem}>
                <Navbar />
            </div>
            <div className={styles.topbarItem}>
                <TopbarPanel />
            </div>
        </div>
    )
}

export default Topbar

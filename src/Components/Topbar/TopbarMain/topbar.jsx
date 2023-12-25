import React from 'react';
import styles from './topbar.module.css';
import Logo from '../../Logo/logo';
import Navbar from '../../Navbar/navbar';
import TopbarPanel from '../TopbarPanel/topbarPanel';
import Drawtoogle from '../../Drawtoggle/drawtoogle';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Topbar({ toggleSidedrawer }) {
    return (
        <>
        <ToastContainer autoClose={1800} hideProgressBar={true} pauseOnHover theme='colored' style={{fontSize: '13px'}} transition={Slide}/>
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
        </>
    )
}

export default Topbar

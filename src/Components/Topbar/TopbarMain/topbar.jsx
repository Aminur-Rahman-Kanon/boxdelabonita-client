import React, { useState } from 'react';
import styles from './topbar.module.css';
import Logo from '../../Logo/logo';
import Navbar from '../../Navbar/navbar';
import TopbarPanel from '../TopbarPanel/topbarPanel';
import Drawtoogle from '../../Drawtoggle/drawtoogle';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../../Searchbar/SearchbarMain/searchbar';
import Backdrop from '../../Backdrop/backdrop';

function Topbar({ toggleSidedrawer }) {

    const [searchbar, setSearchbar] = useState(false);
    const [backdrop, setBackdrop] = useState(false);

    const toggleSearchbar = () => {
        setSearchbar(!searchbar);
        setBackdrop(!backdrop);
    }

    return (
        <>
        <ToastContainer autoClose={1800} hideProgressBar={true} pauseOnHover theme='colored' style={{fontSize: '13px'}} transition={Slide}/>
        <Backdrop backdrop={backdrop} closeBackdrop={toggleSearchbar} />
        <div className={styles.topbarContainer}>
            <Searchbar searchbar={searchbar} toggleSearchbar={toggleSearchbar} />
            <Drawtoogle toggleSidedrawer={toggleSidedrawer} />
            <div className={styles.topbarItem}>
                <Logo />
            </div>
            <div className={styles.topbarItem}>
                <Navbar />
            </div>
            <div className={styles.topbarItem}>
                <TopbarPanel toggleSearchbar={toggleSearchbar} />
            </div>
        </div>
        </>
    )
}

export default Topbar

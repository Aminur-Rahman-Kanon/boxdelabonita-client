import React, { useState } from 'react';
import styles from './topbar.module.css';
import Logo from '../../Logo/logo';
import Navbar from '../../Navbar/NavbarMain/navbar';
import TopbarPanel from '../TopbarPanel/topbarPanel';
import Drawtoogle from '../../Drawtoggle/drawtoogle';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../../Searchbar/SearchbarMain/searchbar';
import Backdrop from '../../Backdrop/backdrop';

//this component render the logo navbar and topbarpanel which contains the search, user and cart component
function Topbar({ toggleSidedrawer }) {
    //with this variable we control the visibility of searchbar component
    const [searchbar, setSearchbar] = useState(false);
    //with this variable we control the visibility of backdrop component
    const [backdrop, setBackdrop] = useState(false);
    //with this function we toggle the visibility of searchbar and backdrop component
    //if searchbar is not displayed then it display the searchbar and opposite when its displayed
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
                <Logo width={'112px'}/>
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

export default Topbar;

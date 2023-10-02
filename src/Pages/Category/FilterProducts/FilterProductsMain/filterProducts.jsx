import React, { useEffect, useState } from 'react';
import styles from './filterProducts.module.css';
import Filter from '../Filter/filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import CategoryContainer from '../CategoryContainer/categoryContainer';
import SidePanel from '../SidePanel/sidePanel';
import Backdrop from '../../../../Components/Backdrop/backdrop';
import { disableScroll } from '../../../../Utilities/utilities';

const FilterProducts = () => {

    const [sidePanel, setSidePanel] = useState(false);

    const [backdrop, setBackdrop] = useState(false);

    useEffect(() => {
        if (backdrop) {
            disableScroll();
        }
        else {
            window.onscroll = () => {};
        }
    }, [backdrop])

    const toggleSidePanel = () => {
        setSidePanel(!sidePanel);
        setBackdrop(!backdrop);
    }

    return (
        <>
        <Backdrop backdrop={backdrop} closeBackdrop={toggleSidePanel}/>
        <div className={styles.filterPrducts}>
            <SidePanel sidePanel={sidePanel} />
            <div className={styles.menuIconContainer}>
                <FontAwesomeIcon icon={faList} className={styles.menuIcon} onClick={toggleSidePanel}/>
            </div>
            <div className={styles.section1}>
                <CategoryContainer />
            </div>
            <div className={styles.section2}>
                <Filter />
            </div>
        </div>
        </>
    )
}

export default FilterProducts

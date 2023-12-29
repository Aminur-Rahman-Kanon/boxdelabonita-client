import React, { useEffect, useState } from 'react';
import styles from './filterProducts.module.css';
import Filter from '../Filter/filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import CategoryContainer from '../CategoryContainer/categoryContainer';
import SidePanel from '../SidePanel/sidePanel';
import Backdrop from '../../../../Components/Backdrop/backdrop';
import { disableScroll } from '../../../../Utilities/utilities';
import Categories from '../Categories/categories';

const FilterProducts = ({ filters, filterValue }) => {

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
        if (window.innerWidth <= 800){
            setSidePanel(sidePanel => !sidePanel);
            setBackdrop(backdrop => !backdrop);
        }
    }

    return (
        <>
        <Backdrop backdrop={backdrop} closeBackdrop={toggleSidePanel}/>
        <div className={styles.filterPrducts}>
            <SidePanel sidePanel={sidePanel} switchSidePanel={toggleSidePanel}/>
            <div className={styles.menuIconContainer}>
                <FontAwesomeIcon icon={faList} className={styles.menuIcon} onClick={toggleSidePanel}/>
            </div>
            <div className={styles.filterCategories}>
                <Categories switchPanel={toggleSidePanel}/>
            </div>
            <div className={styles.filterCategory}>
                <CategoryContainer toggleSidePanel={toggleSidePanel}/>
            </div>
            <div className={styles.filterProduct}>
                <Filter filters={filters} filterValues={filterValue} />
            </div>
        </div>
        </>
    )
}

export default FilterProducts

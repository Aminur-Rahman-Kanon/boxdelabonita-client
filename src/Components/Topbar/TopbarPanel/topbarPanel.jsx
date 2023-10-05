import React from 'react';
import styles from './topbarPanel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import CartContainer from '../CartContainer/cartContainer';

function TopbarPanel() {
    return (
        <div className={styles.topbarPanelContainer}>
            <div className={styles.topbarPanelItem}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.topbarPanelIcon} />
            </div>
            <div className={styles.topbarPanelItem}>
                <FontAwesomeIcon icon={faUser} className={styles.topbarPanelIcon} />
            </div>
            <div className={styles.topbarPanelItem}>
                <FontAwesomeIcon icon={faHeart} className={styles.topbarPanelIcon} />
            </div>
            <div className={styles.topbarPanelItem}>
                <FontAwesomeIcon icon={faShoppingBasket} className={styles.topbarPanelIcon} />
                <div className={styles.cart}>
                    <CartContainer />
                </div>
            </div>
        </div>
    )
}

export default TopbarPanel

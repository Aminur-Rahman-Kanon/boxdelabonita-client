import React, { useState, useContext, useEffect } from 'react';
import ContextApi from '../../ContextApi/contextApi';
import styles from './topbarPanel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import CartContainer from '../CartContainer/cartContainer';
import UserContainer from '../UserContainer/userContainer';

function TopbarPanel() {

    const context = useContext(ContextApi);
    const toggleItem = context.addItem;
    const toggleAddItem = context.setAddItem;

    const [products, setProducts] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        fetch('https://boxdelabonita-server-13dd.onrender.com/fetch-cart-item')
        .then(res => res.json())
        .then(data => {
                data.data.deviceId ? setIsLoggedIn(true) : setIsLoggedIn(false);
                data.data.product ? setProducts(data.data.product) : setProducts({});
        })
        .catch(err => console.log(err));
    }, [toggleItem]);
    
    const productCount = Object.keys(products).length ? Object.keys(products).length : 0

    return (
        <div className={styles.topbarPanelContainer}>
            <div className={styles.topbarPanelItem}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.topbarPanelIcon} />
            </div>
            <div className={styles.topbarPanelItem}>
                <FontAwesomeIcon icon={faUser} className={styles.topbarPanelIcon} />
                <div className={styles.user}>
                    <UserContainer isLoggedIn={isLoggedIn} />
                </div>
            </div>
            <div className={styles.topbarPanelItem}>
                <FontAwesomeIcon icon={faShoppingBasket} className={styles.topbarPanelIcon} />
                <div className={styles.productCount}>
                    <span className={styles.count}>{productCount}</span>
                </div>
                <div className={styles.cart}>
                    <CartContainer products={products} toggleAddItem={toggleAddItem} />
                </div>
            </div>
        </div>
    )
}

export default TopbarPanel

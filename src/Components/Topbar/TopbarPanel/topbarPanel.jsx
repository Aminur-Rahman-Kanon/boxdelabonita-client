import React, { useState, useContext, useEffect } from 'react';
import ContextApi from '../../ContextApi/contextApi';
import styles from './topbarPanel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import CartContainer from '../CartContainer/cartContainer';
import UserContainer from '../UserContainer/userContainer';
import { fetchCartItem } from '../../../Utilities/utilities';

function TopbarPanel({ toggleSearchbar }) {

    const context = useContext(ContextApi);
    const toggleItem = context.addItem;
    const toggleAddItem = context.setAddItem;

    const [products, setProducts] = useState({});

    useEffect(() => {
        const product = fetchCartItem();
        setProducts(product);
    }, [toggleItem]);
    
    const productCount = Object.keys(products).length ? Object.keys(products).length : 0

    return (
        <div className={styles.topbarPanelContainer}>
            <div className={styles.topbarPanelItem} onClick={toggleSearchbar}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.topbarPanelIcon} />
            </div>
            <div className={styles.topbarPanelItem}>
                <FontAwesomeIcon icon={faUser} className={styles.topbarPanelIcon} />
                <div className={styles.user}>
                    <UserContainer />
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

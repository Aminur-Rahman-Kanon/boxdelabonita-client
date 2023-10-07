import React, { useState, useContext, useEffect } from 'react';
import ContextApi from '../../ContextApi/contextApi';
import styles from './topbarPanel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import CartContainer from '../CartContainer/cartContainer';

function TopbarPanel() {

    const context = useContext(ContextApi);
    const toggleItem = context.addItem;
    const toggleAddItem = context.setAddItem;

    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch('http://localhost:8080/fetch-cart-item')
        .then(res => res.json())
        .then(data => {
            if (data.data){
                setProducts(data.data);
            }
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
            </div>
            {/* <div className={styles.topbarPanelItem}>
                <FontAwesomeIcon icon={faHeart} className={styles.topbarPanelIcon} />
            </div> */}
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

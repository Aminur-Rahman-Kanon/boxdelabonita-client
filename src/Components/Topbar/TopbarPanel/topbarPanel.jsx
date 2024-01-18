import React, { useState, useContext, useEffect } from 'react';
import ContextApi from '../../ContextApi/contextApi';
import styles from './topbarPanel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import CartContainer from '../CartContainer/cartContainer';
import UserContainer from '../UserContainer/userContainer';
import { fetchCartItem } from '../../../Utilities/utilities';

//this component render the search, user and cart container
//hovering on search, user and cart icon should render the searchbar, usercontainer and cartcontainer respectively
function TopbarPanel({ toggleSearchbar }) {
    //first we fetch the products from ContextApi
    const context = useContext(ContextApi);
    //see line 27 in App component for more details for toggleItem and toggleAddItem
    const toggleItem = context.addItem;
    const toggleAddItem = context.setAddItem;
    //when there is product in the context we store it to products variable
    const [products, setProducts] = useState({});
    //this hook execute everytime when:
    //toggleItem is changed and fetch the products from context
    useEffect(() => {
        const product = fetchCartItem();
        setProducts(product);
    }, [toggleItem]);
    //conditionaly figuring the amount of products that the user added
    const productCount = Object.keys(products).length ? Object.keys(products).length : 0

    return (
        <div className={styles.topbarPanelContainer}>
            <div className={styles.topbarPanelItem} onClick={toggleSearchbar}>
                <FontAwesomeIcon data-testid='search-icon' icon={faMagnifyingGlass} className={styles.topbarPanelIcon} />
            </div>
            <div className={styles.topbarPanelItem}>
                <FontAwesomeIcon data-testid='user-icon' icon={faUser} className={styles.topbarPanelIcon} />
                <div className={styles.user}>
                    <UserContainer />
                </div>
            </div>
            <div className={styles.topbarPanelItem}>
                <FontAwesomeIcon data-testid='cart-icon' icon={faShoppingBasket} className={styles.topbarPanelIcon} />
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

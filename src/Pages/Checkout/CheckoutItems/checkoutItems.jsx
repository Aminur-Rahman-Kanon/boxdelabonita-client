import React, { useEffect } from 'react';
import styles from './checkoutItems.module.css';

function CheckoutItems({ items, details, deliveryCharge, totalPrice }) {

    let displayCheckoutItems;
    if (items && Object.keys(items).length) {
        displayCheckoutItems = Object.keys(items).map(item => {
            return <div key={items[item][0]._id} className={styles.checkoutItem}>
                <div className={styles.checkoutImgContainer}>
                    <img src={Object.values(items[item][0].img)[0]} alt={items[item][0].title} className={styles.checkoutImg} />
                </div>
                <div className={styles.checkoutDetailsContainer}>
                    <p className={styles.checkoutP}>{items[item][0].title}</p>
                    <p className={styles.checkoutP}>{details[item].quantity} x {items[item][0].price.originalPrice-items[item][0].price.discountedPrice}</p>
                    <p className={styles.checkoutP}>&#2547;{details[item].quantity * (items[item][0].price.originalPrice-items[item][0].price.discountedPrice)}</p>
                    <div className={styles.colors}>{details[item].color ? details[item].color.map(clr => <span className={styles.color} style={{backgroundColor: `${clr}`}}></span>) : null}</div>
                </div>
            </div>
        })
    }
    else {
        displayCheckoutItems = <h4>No items</h4>
    }

    return (
        <div className={styles.checkoutItemsContainer}>
            <div className={styles.checkoutItemHeader}>
                <h3 className={styles.checkoutItemsH3}>Order Summary</h3>
                <span className={styles.editOrders} onClick={() => window.location.assign('/view-cart')}>(Edit)</span>
            </div>
            <div className={styles.outerBox}>
                <div className={styles.checkoutItems}>
                    {displayCheckoutItems}
                </div>
            </div>
            <div className={styles.outerBox}>
                <div className={styles.totalContainer}>
                    <div className={styles.totalItems}>
                        <span className={styles.totalItem}>Subtotal:</span>
                        <span className={styles.totalItem}>&#2547;{totalPrice}</span>
                    </div>
                    <div className={styles.totalItems}>
                        <span className={styles.totalItem}>Shipping:</span>
                        <span className={styles.totalItem}>&#2547;{deliveryCharge}</span>
                    </div>
                    <div className={styles.totalItems}>
                        <span className={styles.totalItem}>Subtotal:</span>
                        <span className={styles.totalItem}>&#2547;{totalPrice + deliveryCharge}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutItems

import React, { useEffect } from 'react';
import styles from './checkoutItems.module.css';

function CheckoutItems({ items, deliveryCharge, totalPrice }) {

    let displayCheckoutItems;
    if (Object.keys(items).length) {
        displayCheckoutItems = Object.values(items).map(item => {
            return <div key={item.product._id} className={styles.checkoutItem}>
                <div className={styles.checkoutImgContainer}>
                    <img src={item.product.img[0]} alt={item.product.title} className={styles.checkoutImg} />
                </div>
                <div className={styles.checkoutDetailsContainer}>
                    <p className={styles.checkoutP}>{item.product.title}</p>
                    <p className={styles.checkoutP}>{item.quantity} x ${item.price}</p>
                    <p className={styles.checkoutP}>&#2547;{item.quantity * item.price}</p>
                    <div className={styles.colors}>{item.color.length ? item.color.map((clr, idx) => <span key={idx} className={styles.color} style={{backgroundColor: `${clr}`}}></span>) : null}</div>
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
                        <span className={styles.totalItem}>Total:</span>
                        <span className={styles.totalItem}>&#2547;{totalPrice + deliveryCharge}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutItems

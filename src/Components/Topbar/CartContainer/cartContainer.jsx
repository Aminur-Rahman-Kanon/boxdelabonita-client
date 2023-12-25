import React from 'react';
import styles from './cartContainer.module.css';
import RemoveBtn from '../../RemoveButton/removeBtn';
import { Link } from 'react-router-dom';

const CartContainer = ({ products, toggleAddItem }) => {

    let displayCart = null;

    if (Object.keys(products).length){
        displayCart = Object.values(products).map(item => <div key={item.product._id} className={styles.displayCartItem}>
            <div className={styles.displayCartImgContainer}>
                <img src={item.product.img[0]} alt={item.product.title} className={styles.displayCartImg} />
            </div>
            <div className={styles.displayCartDetailsContainer}>
                <h4 className={styles.heading}>{item.product.title}</h4>
                <span className={styles.subHeading}>{`${item.quantity} x`} &#2547;{`${item.price}`}</span>
                <span className={styles.subHeading}>Total: &#2547;{item.price * item.quantity}</span>
                <div className={styles.removeBtn}>
                    <RemoveBtn product={item.product} title={"Remove"} cb={toggleAddItem} />
                </div>
            </div>
        </div>)
    }
    else{
        displayCart = <h3 className={styles.defaultHeading}>No Product's yet</h3>
    }

    return (
        <div className={styles.cartContainerMain}>
            <div className={styles.cartContainer}>
                {displayCart}
            </div>
            <div className={styles.actionContainer}>
                <Link to="/checkout" className={styles.actionBtn}>Checkout</Link>
                <Link to="/view-cart" className={styles.actionBtn}>View Cart</Link>
            </div>
        </div>
    )
}

export default CartContainer

import React from 'react';
import styles from './cartContainer.module.css';
import RemoveSingleBtn from '../../RemoveSingleItemBtn/removeSingleItemBtn';
import { Link } from 'react-router-dom';

//this component render the products that the user added to cart or render text 'Nothing in Cart'
//and it takes the product object and toggleAdditem(see line 16 in TopbarPanel component) as props
const CartContainer = ({ products, toggleAddItem }) => {
    //if there is products then we loop through the products and store in displayCart variable to display to the screen
    let displayCart = null;
    //looping through the products
    if (Object.keys(products).length){
        displayCart = Object.values(products).map(item => <div key={item.product._id} className={styles.displayCartItem}>
            <div className={styles.displayCartImgContainer}>
                <img src={Object.values(item.product.img)[0]} alt={item.product.title} className={styles.displayCartImg} />
            </div>
            <div className={styles.displayCartDetailsContainer}>
                <h4 className={styles.heading}>{item.product.title}</h4>
                <span className={styles.subHeading}>{`${item.quantity} x`} &#2547;{`${item.price}`}</span>
                <span className={styles.subHeading}>Total: &#2547;{item.price * item.quantity}</span>
                <div className={styles.removeBtn}>
                    <RemoveSingleBtn product={item.product} title={"Remove"} cb={toggleAddItem} />
                </div>
            </div>
        </div>)
    }
    else{
        displayCart = <h3 className={styles.defaultHeading}>Nothing in Cart</h3>
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

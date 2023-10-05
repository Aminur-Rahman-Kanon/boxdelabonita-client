import React, { useContext, useEffect, useState } from 'react';
import ContextApi from '../../ContextApi/contextApi';
import styles from './cartContainer.module.css';
import RemoveBtn from '../../RemoveButton/removeBtn';

const CartContainer = () => {

    const context = useContext(ContextApi);
    const toggleItem = context.addItem;

    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch('http://https://boxdelabonita-server-13dd.onrender.com/fetch-cart-item')
        .then(res => res.json())
        .then(data => {
            if (data.data){
                setProducts(data.data);
            }
        })
        .catch(err => console.log(err));
    }, [toggleItem]);

    let displayCart = null;

    if (Object.keys(products).length){
        displayCart = Object.values(products).map(item => <div key={item[0]._id} className={styles.displayCartItem}>
            <div className={styles.displayCartImgContainer}>
                <img src={Object.values(item[0].img)[0]} alt={item[0].title} className={styles.displayCartImg} />
            </div>
            <div className={styles.displayCartDetailsContainer}>
                <h4 className={styles.heading}>{item[0].title}</h4>
                <span className={styles.subHeading}>{`${item.length} x ${item[0].price.originalPrice-item[0].price.discountedPrice}`}</span>
                <span className={styles.subHeading}>Total: &#2547;{(item[0].price.originalPrice - item[0].price.discountedPrice) * item.length }</span>
                <div className={styles.removeBtn}>
                    <RemoveBtn product={item[0]}/>
                </div>
            </div>
        </div>)
    }

    return (
        <div className={styles.cartContainerMain}>
            <div className={styles.cartContainer}>
                {displayCart}
            </div>
            <div className={styles.actionContainer}>
                <button className={styles.actionBtn}>Checkout Now
                </button>
                <button className={styles.actionBtn}>View Cart
                </button>
            </div>
        </div>
    )
}

export default CartContainer

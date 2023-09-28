import React from 'react';
import styles from './product.module.css';

const Product = ({ product }) => {
    
    if (!product) return;

    console.log(product);

    return (
        <div className={styles.product}>
            <div className={styles.imgContainer}>
                <img src={product.img.others1} alt={product.title} className={styles.img}/>
                <div className={styles.discountContainer}>
                    <span className={styles.discount}>&#2547;{
                        product.price.discountedPrice ? product.price.discountedPrice : 0} Off</span>
                </div>
            </div>
            <div className={styles.detailsContainer}>
                <span className={styles.title}>{product.title}</span>
                <s className={styles.price}>&#2547;{product.price.originalPrice}</s>
                <span className={styles.price}>&#2547;{product.price.originalPrice - product.price.discountedPrice}</span>
            </div>
        </div>
    )
}

export default Product;

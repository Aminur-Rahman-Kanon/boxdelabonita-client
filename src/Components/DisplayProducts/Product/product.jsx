import React from 'react';
import { Link } from 'react-router-dom';
import styles from './product.module.css';

const Product = ({product}) => {
    
    if (!product) return;

    return (
        <Link to={`/bag/${product.category}/${product.title}`} className={styles.product}>
            <div className={styles.productImgContainer}>
                <img src={Object.values(product.img)[0]} alt={product.title} className={styles.productImg} />
                <span className={styles.discount}>&#2547;{
                    product.price.discountedPrice ? product.price.discountedPrice : 0} Off
                </span>
            </div>
            <div className={styles.productDetailsContainer}>
                <span className={styles.productTitle}>{product.title}</span>
                <span className={styles.productPrice}>	&#2547;{product.price.originalPrice - product.price.discountedPrice}</span>
                <s className={styles.productPrice} style={{ color: 'red' }}>	&#2547;{product.price.originalPrice}</s>
            </div>
        </Link>
    )
}

export default Product;

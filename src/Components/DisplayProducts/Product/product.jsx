import React from 'react';
import { Link } from 'react-router-dom';
import styles from './product.module.css';

const Product = ({product}) => {
    
    if (!product) return;

    return (
        <Link to={`/bag/${product.category}/${product.title}`} className={styles.product}>
            <div className={styles.productImgContainer}>
                <img src={product.img.others1} alt={product.title} className={styles.productImg} />
            </div>
            <div className={styles.productDetailsContainer}>
                <span className={styles.productTitle}>{product.title}</span>
                <span className={styles.productPrice}>	&#2547;{product.price.originalPrice}</span>
            </div>
        </Link>
    )
}

export default Product;

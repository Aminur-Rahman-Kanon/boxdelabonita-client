import React from 'react';
import styles from './product.module.css';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    
    if (!product) return;

    return (
        <Link to={`/bag/${product.category}/${product.title}`} className={styles.product}>
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
        </Link>
    )
}

export default Product;

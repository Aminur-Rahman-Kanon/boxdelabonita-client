import React from 'react';
import styles from './products.module.css';

const Products = ({ product }) => {
    return (
        <div className={styles.products}>
            <div className={styles.imgContainer}>
                <img src={Object.values(product.img)[0]} alt={product.title} className={styles.img}/>
            </div>
            <div className={styles.detailsContainer}>
                <span className={styles.title}>{product.title}</span>
                <span className={styles.price}>&#2547;{product.price.originalPrice}</span>
            </div>
        </div>
    )
}

export default Products

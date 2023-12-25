import React from 'react';
import styles from './products.module.css';
import { Link } from 'react-router-dom';
import SoldOut from '../../../SoldOut/soldOut';

const Products = ({ product }) => {
    return (
        <Link to={`/bag/${product.category}/${product.title}`} className={styles.products}>
            <div className={styles.imgContainer}>
                <img src={Object.values(product.img)[0]} alt={product.title} className={styles.img} style={product.stock ? {filter: 'contrast(1)'} : {filter: 'contrast(0.3)'}}/>
                <SoldOut show={!product.stock} />
            </div>
            <div className={styles.detailsContainer}>
                <span className={styles.title}>{product.title}</span>
                <span className={styles.price}>&#2547;{product.price.originalPrice - product.price.discountedPrice}</span>
            </div>
        </Link>
    )
}

export default Products

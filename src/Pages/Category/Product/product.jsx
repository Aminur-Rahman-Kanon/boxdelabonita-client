import React, { useState } from 'react';
import styles from './product.module.css';
import Rating from '../../../Components/DisplayProduct/Rating/rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    if(!product) return;

    return (
        <Link to={`/bag/${product.category}/${product.title}`} className={styles.productContainer}>
            <div className={styles.imgContainer}>
                <img src={Object.values(product.img)[0]} alt={product.title} className={styles.img} />
            </div>
            <div className={styles.detailsContainer}>
                <span className={styles.title}>{product.title}</span>
                <div className={styles.ratingContainer}>
                    <Rating rating={product.rating} align={"center"}/>
                </div>
                <div className={styles.productDetailsContainer}>
                    <div className={styles.priceContainer}>
                        <span className={styles.mainPrice}>	&#2547;{product.price.originalPrice - product.price.discountedPrice}</span>
                        <s className={styles.price}>&#2547;{product.price.originalPrice}</s>
                    </div>
                    <div className={styles.actionBtns}>
                        <FontAwesomeIcon icon={faShoppingCart} className={styles.actionIcon} />
                        <FontAwesomeIcon icon={faHeart} className={styles.actionIcon} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Product

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './product.module.css';
import SoldOut from '../../SoldOut/soldOut';
import Rating from '../../DisplayProduct/Rating/rating';

const Product = ({product}) => {
    
    if (!product) return;

    return (
        <Link to={`/bag/${product.category}/${product.title}`} className={styles.product}>
            <div className={styles.productImgContainer}>
                <img src={Object.values(product.img)[0]} alt={product.title} className={styles.productImg} style={product.stock ? {filter: 'contrast(1)'} : {filter: 'contrast(0.4)'}}/>
                <span className={styles.discount} style={product.price.discountedPrice ? {display: 'flex'} : {display: 'none'}}>&#2547;{
                    product.price.discountedPrice ? product.price.discountedPrice : 0} Off
                </span>
                <SoldOut show={!product.stock}/>
            </div>
            <div className={styles.ratingContainer}>
                <Rating rating={product.rating} align={'center'}/>
            </div>
            <div className={styles.colorContainer}>
                {product.color.map((clr, idx) => <span key={idx} className={styles.color} style={{backgroundColor: `${clr}`}}></span>)}
            </div>
            <div className={styles.productDetailsContainer}>
                <span className={styles.productTitle}>{product.title}</span>
                <span className={styles.productPrice}>	&#2547;{product.price.originalPrice - product.price.discountedPrice}</span>
                <s className={styles.productPrice} style={product.price.discountedPrice ? {display: 'block'} : {display: 'none'}}>	&#2547;{product.price.originalPrice}</s>
            </div>
        </Link>
    )
}

export default Product;

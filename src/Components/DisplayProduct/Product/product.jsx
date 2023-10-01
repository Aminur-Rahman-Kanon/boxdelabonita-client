import React, { useState } from 'react';
import styles from './product.module.css';
import Rating from '../Rating/rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faClock } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product }) => {

    const [imgIdx, setImgIdx] = useState(Object.keys(product.img)[0]);

    
    if (!product.title) return;

    return (
        <div className={styles.product}>
            <div className={styles.imageSliderContainer}>
                {Object.keys(product.img).map(item => <div key={item} className={imgIdx === item ? `${styles.sliderImageContainer} ${styles.activeImg}` : styles.sliderImageContainer}
                                                           onClick={() => setImgIdx(item)}>
                    <img src={product.img[item]} alt={product.title} className={styles.sliderImage}/>
                </div>)}
            </div>
            <div className={styles.section2}>
                <div className={styles.mainImageContainer}>
                    <img src={product.img[imgIdx]} alt={product.title} className={styles.mainImage}/>
                </div>
                <div className={styles.detailsContainer}>
                    <div className={styles.stockContainer}>
                        <span className={product.stock ? `${styles.stock} ${styles.available}` : `${styles.stock} ${styles.notAvailable}`}>{
                            product.stock ? 'In Stock' : 'Out of stock'
                        }</span>
                    </div>
                    <div className={styles.titleContainer}>
                        <span className={styles.title}>{product.title}</span>
                    </div>
                    <div className={styles.priceContainer}>
                        <span className={styles.mainPrice}>&#2547;{product.price.originalPrice - product.price.discountedPrice}</span>
                        <s className={styles.price}>&#2547;{product.price.originalPrice}</s>
                    </div>
                    <div className={styles.ratingContainer}>
                        <Rating rating={product.rating}/>
                    </div>
                    <div className={styles.productDetailsContainer}>
                        <p className={styles.productDetails}>{product.description}</p>
                    </div>
                    <div className={styles.colorContainer}>
                        <span className={styles.colorHeader}>Color</span>
                        <div className={styles.colors}>
                            {Object.values(product.color).map(color => <span key={color}
                                                                            className={styles.color}
                                                                            style={{backgroundColor: `${color}`}}
                                                                            onClick={() => setImgIdx(color)}></span>)}
                        </div>
                    </div>
                    <div className={styles.btnContainer}>
                        <button className={styles.btn}>Add To Bag</button>
                        <button className={styles.btn}>Add To Wishlist</button>
                    </div>
                    <div className={styles.informationContainer}>
                        <div className={styles.information}>
                            <FontAwesomeIcon icon={faTruck} className={styles.infoIcon}/>
                            <p className={styles.info}>Free Worldwide Shipping</p>
                        </div>
                        <div className={styles.information}>
                            <FontAwesomeIcon icon={faTruck} className={styles.infoIcon}/>
                            <p className={styles.info}>Easy 30 Days Returns</p>
                        </div>
                        <div className={styles.information}>
                            <FontAwesomeIcon icon={faClock} className={styles.infoIcon}/>
                            <p className={styles.info}>24/7 Customer Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Product

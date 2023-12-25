import React from 'react';
import styles from './product.module.css';
import Rating from '../../../Components/DisplayProduct/Rating/rating';
import { Link } from 'react-router-dom';
import AddToBag from '../../../Components/AddToBagBtn/addToBag';
import QuickBuyBtn from '../../../Components/QuckBuyBtn/quickBuyBtn';
import outOfStock from '../../../Assets/Others/sold_out_2.png'
import SoldOut from '../../../Components/SoldOut/soldOut';

const Product = ({ product, relatedProduct }) => {
    if(!product) return;

    return (
        <Link to={`/bag/${product.category}/${product.title}`} className={styles.productContainer}>
            <div className={styles.imgContainer}>
                <img src={Object.values(product.img)[0]} alt={product.title} className={styles.img} style={product.stock ? {filter: 'contrast(1)'} : {filter: 'contrast(0.3)'}}/>
                <SoldOut show={!product.stock}/>
            </div>
            <div className={styles.detailsContainer}>
                <span className={styles.title}>{product.title}</span>
                <div className={styles.ratingContainer}>
                    <Rating rating={product.rating} align={"center"}/>
                </div>
                <div className={styles.colorContainer}>
                    {product.color.map((clr, idx) => <span key={idx} className={styles.color} style={{backgroundColor: `${clr}`}}></span>)}
                </div>
                <div className={styles.productDetailsContainer}>
                    <div className={styles.priceContainer}>
                        <span className={styles.mainPrice}>	&#2547;{product.price.originalPrice - product.price.discountedPrice}</span>
                        <s className={styles.price}>&#2547;{product.price.originalPrice}</s>
                    </div>
                    <div className={styles.actionBtns} style={relatedProduct ? {display: 'none'} : {display: 'flex'}}>
                        <div className={styles.btn1}>
                            <AddToBag disable={product.stock} title={'Add to Cart'} product={product} color={product.color[0]}/>
                        </div>
                        <div className={styles.btn2}>
                            <QuickBuyBtn disable={product.stock} product={product} color={product.color[0]}/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Product

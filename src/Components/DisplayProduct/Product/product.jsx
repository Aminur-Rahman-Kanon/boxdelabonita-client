import React, { useEffect, useState } from 'react';
import styles from './product.module.css';
import Rating from '../Rating/rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faRotateLeft, faClock } from '@fortawesome/free-solid-svg-icons';
import AddToBagBtn from '../../AddToBagBtn/addToBagBtn';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ColorContainer from '../ColorContainer/colorContainer';
import QuickBuyBtn from '../../QuckBuyBtn/quickBuyBtn';
import SoldOut from '../../SoldOut/soldOut';

//this component render the product and all its related information
const Product = ({ product }) => {

    //each product has an image array containing all the images of the product
    //whenever user click on an image we store that image index to this variable
    //so we can display that image to the main image display
    const [imgIdx, setImgIdx] = useState(0);
    //this variable is for storing the color of the product that an user choose
    const [color, setColor] = useState('')
    //if there is no product then we dont render this component
    if (!product.title) return;

    return (
        <>
        <ToastContainer autoClose={1800} hideProgressBar={true} pauseOnHover theme='colored' style={{fontSize: '13px'}} transition={Slide}/>
        <div className={styles.product}>
            <div className={styles.imageSliderContainer}>
                {product.img.map((item, idx) => <div key={item} className={imgIdx === idx ? `${styles.sliderImageContainer} ${styles.activeImg}` : styles.sliderImageContainer}
                                                           onClick={() => setImgIdx(idx)}>
                    <img src={item} alt={product.title} className={styles.sliderImage}/>
                </div>)}
            </div>
            <div className={styles.section2}>
                <div className={styles.mainImageContainer}>
                    <img src={product.img[imgIdx]} alt={product.title} className={styles.mainImage}/>
                    <SoldOut show={!product.stock}/>
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
                        <s className={styles.price} style={product.price.discountedPrice > 0 ? {display:'block'} : {display: 'none'}}>&#2547;{product.price.originalPrice}</s>
                    </div>
                    <div className={styles.ratingContainer}>
                        <Rating rating={product.rating}/>
                    </div>
                    <div className={styles.productDetailsContainer}>
                        <div dangerouslySetInnerHTML={{__html: product.description}} />
                    </div>
                    <div className={styles.colorContainer}>
                        <span className={styles.colorHeader}>Select a Color</span>
                        <div className={styles.colors}>
                            {Object.values(product.color).map(clr => <ColorContainer key={clr} color={clr} imgIdx={color} cb={setColor}/>)}
                        </div>
                    </div>
                    <div className={styles.btnContainer}>
                        <div className={styles.btn1}>
                            <AddToBagBtn disable={product.stock} product={product} title={"Add to Cart"} color={color} />
                        </div>
                        <div className={styles.btn2}>
                            <QuickBuyBtn disable={product.stock} product={product} color={color} />
                        </div>
                    </div>
                    <div className={styles.informationContainer}>
                        <div className={styles.information}>
                            <FontAwesomeIcon icon={faTruck} className={styles.infoIcon}/>
                            <p className={styles.info}>Easy Shipping</p>
                        </div>
                        <div className={styles.information}>
                            <FontAwesomeIcon icon={faRotateLeft} className={styles.infoIcon}/>
                            <p className={styles.info}>Easy Returns</p>
                        </div>
                        <div className={styles.information}>
                            <FontAwesomeIcon icon={faClock} className={styles.infoIcon}/>
                            <p className={styles.info}>24/7 Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Product

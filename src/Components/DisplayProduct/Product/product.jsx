import React, { useEffect, useState, useContext } from 'react';
import styles from './product.module.css';
import Rating from '../Rating/rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faRotateLeft, faClock } from '@fortawesome/free-solid-svg-icons';
import AddToBag from '../../AddToBagBtn/addToBag';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ColorContainer from '../ColorContainer/colorContainer';
import QuickBuyBtn from '../../QuckBuyBtn/quickBuyBtn';
import SoldOut from '../../SoldOut/soldOut';

const Product = ({ product }) => {

    const [imgIdx, setImgIdx] = useState(null);
    const [color, setColor] = useState('')

    useEffect(() => {
        setImgIdx(Object.keys(product.img)[0]);
    }, [product])

    if (!product.title) return;

    return (
        <>
        <ToastContainer autoClose={1800} hideProgressBar={true} pauseOnHover theme='colored' style={{fontSize: '13px'}} transition={Slide}/>
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
                            <AddToBag disable={product.stock} product={product} title={"Add to Cart"} color={color} />
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

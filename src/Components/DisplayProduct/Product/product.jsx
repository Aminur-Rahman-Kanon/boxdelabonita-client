import React, { useEffect, useState, useContext } from 'react';
import ContextApi from '../../ContextApi/contextApi';
import styles from './product.module.css';
import Rating from '../Rating/rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faRotateLeft, faClock } from '@fortawesome/free-solid-svg-icons';
import AddToBag from '../../AddToBagBtn/addToBag';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ColorContainer from '../ColorContainer/colorContainer';

const Product = ({ product }) => {

    const context = useContext(ContextApi);

    const [imgIdx, setImgIdx] = useState(null);

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
                        <p className={styles.productDetails}>{product.description}</p>
                    </div>
                    <div className={styles.colorContainer}>
                        <span className={styles.colorHeader}>Color</span>
                        <div className={styles.colors}>
                            {Object.values(product.color).map(color => <ColorContainer key={color} color={color} imgIdx={imgIdx} cb={setImgIdx}/>)}
                        </div>
                    </div>
                    <div className={styles.btnContainer}>
                        <div className={styles.btns}>
                            <AddToBag product={product} title={"Add to Bag"} color={imgIdx} />
                        </div>
                        <div className={styles.btns}>
                            <button className={styles.btn}>Add To Wishlist</button>
                        </div>
                    </div>
                    <div className={styles.informationContainer}>
                        <div className={styles.information}>
                            <FontAwesomeIcon icon={faTruck} className={styles.infoIcon}/>
                            <p className={styles.info}>Free Worldwide Shipping</p>
                        </div>
                        <div className={styles.information}>
                            <FontAwesomeIcon icon={faRotateLeft} className={styles.infoIcon}/>
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
        </>
    )
};

export default Product

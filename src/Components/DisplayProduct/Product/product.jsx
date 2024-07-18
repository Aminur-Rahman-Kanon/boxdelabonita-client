import React, { useEffect, useState } from 'react';
import styles from './product.module.css';
import Rating from '../Rating/rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faRotateLeft, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import AddToBagBtn from '../../AddToBagBtn/addToBagBtn';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ColorContainer from '../ColorContainer/colorContainer';
import QuickBuyBtn from '../../QuckBuyBtn/quickBuyBtn';
import SoldOut from '../../SoldOut/soldOut';
import ReactWhatsapp from 'react-whatsapp';

//this component render the product and all its related information
const Product = ({ product }) => {

    //each product has an image array containing all the images of the product
    //whenever user click on an image we store that image index to this variable
    //so we can display that image to the main image display
    //this variable is for storing the color of the product that an user choose
    const [color, setColor] = useState(() => {
        if (product && product.color){
            if (product.color.length){
                return product.color[0];
            }
            else {
                return '';
            }
        }
        else {
            return '';
        }
    })
    //if there is no product then we dont render this component
    if (!product.title) return;

    return (
        <>
        <ToastContainer autoClose={1800} hideProgressBar={true} pauseOnHover theme='colored' style={{fontSize: '13px'}} transition={Slide}/>
        <div className={styles.product}>
            <div className={styles.imageSliderContainer}>
                <span className={styles.descriptionHeader}>Description</span>
                <div className={styles.sliderImgContainer}>
                    {Object.values(product.img || {}).map(item => <div key={item} className={styles.sliderImageContainer}>
                        <img src={item} alt={product.title} className={styles.sliderImage}/>
                    </div>)}
                </div>
            </div>
            <div className={styles.section2}>
                <div className={styles.mainImageContainer}>
                    <img src={Object.values(product.img)[0]} alt={product.title} className={styles.mainImage}/>
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
                    <div className={styles.callToOrderContainer}>
                        <h2 className={styles.callToOrderheading}>Order by Phone</h2>
                        <div className={styles.callToOrders}>
                            <div className={styles.callToOrder}>
                                <a href='tel:+8801911343436' className={styles.phone}>
                                    <FontAwesomeIcon icon={faPhone} className={styles.callIcon}/>
                                    <span className={styles.number}>+8801911343436</span>
                                </a>
                            </div>
                            <div className={styles.callToOrder}>
                                <ReactWhatsapp number='+8801911343436' className={styles.phone}>
                                    <FontAwesomeIcon icon={faWhatsapp} className={styles.callIcon} style={{fontSize: '25px'}}/>
                                    <span className={styles.number}>WhatsApp</span>
                                </ReactWhatsapp>
                            </div>
                        </div>
                    </div>
                    <div className={styles.deliveryChargeContainer}>
                        <span className={styles.charge}>Inside Dhaka: &#2547;80</span>
                        <span className={styles.charge}>Outside Dhaka: &#2547;150</span>
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

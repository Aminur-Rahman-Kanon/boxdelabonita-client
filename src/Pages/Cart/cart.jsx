import React, { useState, useContext, useEffect } from 'react';
import ContextApi from '../../Components/ContextApi/contextApi';
import styles from './cart.module.css';
import { useNavigate } from 'react-router-dom';
import bkash from '../../Assets/Others/bkash.png';
import visa from '../../Assets/Others/visa.png';
import cod from '../../Assets/Others/cod.png';
import AddToBag from '../../Components/AddToBagBtn/addToBag';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RemoveBtn from '../../Components/RemoveButton/removeBtn';
import RemoveAllProductsBtn from '../../Components/RemoveAllProductsBtn/removeAllProductsBtn';

function Cart() {
    const context = useContext(ContextApi);
    const toggleItem = context.addItem;

    const [products, setProducts] = useState({});
    const [coupon, setCoupon] = useState('');

    useEffect(() => {
        fetch('https://boxdelabonita-server-13dd.onrender.com/fetch-cart-item')
        .then(res => res.json())
        .then(data => {
            if (data.data){
                setProducts(data.data);
            }
        })
        .catch(err => console.log(err));
    }, [toggleItem]);

    const navigate = useNavigate();
    let subtotal = 0;
    let cartDisplay = null;
    
    if (products.product){
        cartDisplay = Object.values(products.product).map(item => {
            subtotal += (item[0].price.originalPrice - item[0].price.discountedPrice) * item.length;
            return <div key={item[0]._id} className={styles.cartItem}>
                <div className={styles.cartItemImgContainerMain}>
                    <div className={styles.cartImgContainer}>
                        <img src={Object.values(item[0].img)[0]} alt={item[0].title} className={styles.cartImg} />
                    </div>
                    <div className={styles.cartInfoContainer}>
                        <p className={styles.cartTitle}>{item[0].title}</p>
                        <p className={styles.cartTitle}>Item id: fghy22kl2</p>
                        <p className={styles.cartTitle}>price: &pound;{item[0].price.originalPrice - item[0].price.discountedPrice}</p>
                    </div>
                </div>
                <div className={styles.cartItemElements}>
                    <div className={styles.cartItemElement}>
                        <div className={styles.colorContainer}>
                            {
                                products.details ? products.details[item[0].title].color ? 
                                    products.details[item[0].title].color.map((clr, idx) => <div key={idx} className={styles.colors} style={{backgroundColor: `${clr}`}}></div>)
                                    :
                                    <span>No colors</span>
                                    :
                                    <span>No colors</span>
                            }
                        </div>
                    </div>
                    <div className={styles.cartItemElement}>
                        <div className={styles.quantityBtn}>
                            <AddToBag title={"+"} product={item[0]} />
                        </div>
                        <div className={styles.quantityCount}>{item.length}</div>
                        <div className={styles.quantityBtn}>
                            <RemoveBtn title={"-"} product={item[0]} cb={context.setAddItem}/>
                        </div>
                    </div>
                    <div className={styles.cartItemElement}>
                        <span className={styles.subtotal}>&#2547;{item[0].price.originalPrice - item[0].price.discountedPrice}</span>
                    </div>
                    <div className={styles.cartItemElement}>
                        <RemoveAllProductsBtn title={item[0].title} cb={context.setAddItem} />
                    </div>
                </div>
            </div>})
    }
    else {
        cartDisplay = <div>
            <h4 className={styles.cartH4}>No item in the cart</h4>
        </div>
    }

    return (
        <>
        <ToastContainer autoClose={1800} hideProgressBar={true} pauseOnHover theme='colored' style={{fontSize: '13px'}} transition={Slide}/>
        <section className={styles.cartContainerMain}>
            <div className={styles.cartContainer}>
                <div className={styles.cartItemContainer}>
                    <div className={styles.cartLabels}>
                        <div className={styles.cartLabel}>Product</div>
                        <div className={styles.cartLabel}>Colors</div>
                        <div className={styles.cartLabel}>Quantity</div>
                        <div className={styles.cartLabel}>Subtotal</div>
                        <div className={styles.cartLabel}>Action</div>
                    </div>
                    <div className={styles.cartItems}>
                        {cartDisplay}
                    </div>
                </div>
                <div className={styles.cartDetailsContainer}>
                    <div className={styles.couponContainer}>
                        <div className={styles.couponInputContainer}>
                            <input type='text'
                                   placeholder="Enter coupon code"
                                   className={styles.couponInput}
                                   onChange={(e) => setCoupon(e.target.value)} />
                            <button disabled={!coupon} className={styles.couponBtn}>Apply coupon</button>
                        </div>
                    </div>
                    <div className={styles.totalContainer}>
                        <div className={styles.totalItems}>
                            <div className={styles.totalItem}>
                                <span className={styles.totalLabel}>Subtotal: &#2547;{subtotal}</span>
                            </div>
                            <div className={styles.totalItem}>
                                {/* <span className={styles.totalLabel}>Discount: &pound;{discount}</span> */}
                            </div>
                            <div className={styles.totalItem}>
                                {/* <span className={styles.totalLabel} style={{fontWeight: '700', fontSize: '13px'}}>Total Price: &pound;{subtotal - discount}</span> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cartFooterContainer}>
                    <div className={styles.cartFooterItem}>
                        <img src={visa} alt="master card" className={styles.cartFooterImg} />
                        <img src={cod} alt="cash on delivery" className={styles.cartFooterImg} />
                        <img src={bkash} alt="biksah" className={styles.cartFooterImg} />
                    </div>
                    <div className={styles.cartFooterItem}>
                        <button onClick={() => navigate(-1)} className={styles.cartFooterBtn} >Continue Shopping</button>
                        <button onClick={() => navigate('/checkout')} className={styles.cartFooterBtn} >Checkout</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Cart

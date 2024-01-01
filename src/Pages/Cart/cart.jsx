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
import RemoveBtn from '../../Components/RemoveSingleItemButton/removeSingleItemBtn';
import RemoveAllProductsBtn from '../../Components/RemoveAllProductsBtn/removeAllProductsBtn';
import { fetchCartItem } from '../../Utilities/utilities';

function Cart() {
    //calling useContext so we get the data from the contextApi served from the App component
    const context = useContext(ContextApi);

    //Since we store the user added item to localStorage and adding item to localStorage doesn't rerender.
    //that's why declare a counter variable "addItem" to App component and everytime user add or remove an item from the cart
    //we increment or decrement the value so the App component rerender and so its child and we get the latest value from localStorage
    const toggleItem = context.addItem;

    //declaring a object to store the items that was stored in localStorage so the item can be displayed.
    const [products, setProducts] = useState({});
    
    //decalring a variable so coupon code can be stored
    const [coupon, setCoupon] = useState('');

    //this hook fetch cart items every time user add or remove an item from the cart so we can display those in the cart page.
    useEffect(() => {
        //extracting data from the localStorage and storing them.
        const product = fetchCartItem();
        setProducts(product);
    }, [toggleItem]);

    //calling useNavigate to get the navigate object so user can be redirected as need.
    const navigate = useNavigate();

    //assigning 0 initially and as the items in the products varible loop through
    //we add each item's price with the value of this variable so we get a total price amount.
    let subtotal = 0;

    //assigning null initially so we can later use this variable to:
    //store the items that return from the products array map method or
    //if there is no items in the products object then we leave it null so a "no item in the cart" text can be displayed.
    let cartDisplay = null;
    
    //looping through the items of the products object
    if (Object.keys(products).length){
        cartDisplay = Object.values(products).map(item => {
            //taking the item quantity and price and creating a subtotal amount
            subtotal += item.quantity * item.price;
            return <div key={item.product._id} className={styles.cartItem}>
                <div className={styles.cartItemImgContainerMain}>
                    <div className={styles.cartImgContainer}>
                        <img src={item.product.img[0]} alt={item.product.title} className={styles.cartImg} />
                    </div>
                    <div className={styles.cartInfoContainer}>
                        <p className={styles.cartTitle}>{item.product.title}</p>
                        <p className={styles.cartTitle}>Item id: fghy22kl2</p>
                        <p className={styles.cartTitle}>price: &pound;{item.price * item.quantity}</p>
                    </div>
                </div>
                <div className={styles.cartItemElements}>
                    <div className={styles.cartItemElement}>
                        <div className={styles.colorContainer}>
                            {
                                //looping through the colors and displaying to the UI
                                item.color.length ? 
                                    item.color.map((clr, idx) => <div key={idx} className={styles.colors} style={{backgroundColor: `${clr}`}}></div>)
                                    :
                                    <span>No colors</span>
                            }
                        </div>
                    </div>
                    <div className={styles.cartItemElement}>
                        <div className={styles.quantityBtn}>
                            {/*buttn to add more items in the cart*/}
                            <AddToBag disable={true} title={"+"} product={item.product} color={item.color[0]} />
                        </div>
                        <div className={styles.quantityCount}>{item.quantity}</div>
                        <div className={styles.quantityBtn}>
                            {/*button to remove single item from the cart*/}
                            <RemoveBtn title={"-"} product={item.product} cb={context.setAddItem}/>
                        </div>
                    </div>
                    <div className={styles.cartItemElement}>
                        <span className={styles.subtotal}>&#2547;{item.price}</span>
                    </div>
                    <div className={styles.cartItemElement}>
                        {/*button to remove all same product*/}
                        <RemoveAllProductsBtn title={item.product.title} cb={context.setAddItem} />
                    </div>
                </div>
            </div>})
    }
    else {
        //if no item found in the products object
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

export default Cart;

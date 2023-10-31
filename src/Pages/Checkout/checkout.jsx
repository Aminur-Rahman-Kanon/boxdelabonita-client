import React, { useEffect, useState, useMemo } from 'react';
import './checkout.css';
import CheckoutItems from './CheckoutItems/checkoutItems';
import { cities } from './Checkout-data/data';
import flag from '../../Assets/Others/flag.png';
import Spinner from '../../Components/Spinner/spinner';
import Backdrop from '../../Components/Backdrop/backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../Components/Modal/modal';
import { disableScroll } from '../../Utilities/utilities';

const citiesOption = Object.keys(cities).map(item => <option key={item} className='payment-option'>{item}</option>)

function Checkout() {

    const [products, setProducts] = useState({});
    const [userDetails, setUserDetails] = useState({});
    const [spinner, setSpinner] = useState(false);
    const [backdrop, setBackdrop] = useState(false);
    const [modal, setModal] = useState(false);

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [emailValidity, setEmailValidty] = useState(true)
    const [phone, setPhone] = useState('');
    const [phoneValidity, setPhoneValidity] = useState(true);
    const [city, setCity] = useState('Select City');
    const [area, setArea] = useState('Select Area');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [btnDisable, setBtnDisable] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);
    const [deliveryCharge, setDeliveryCharge] = useState(180);

    const [placeOrderStatus, setPlaceOrderStatus] = useState('');
    const [placeOrderDetails, setPlaceOrderDetails] = useState(null);

    useEffect(() => {
        fetch('https://boxdelabonita-server-13dd.onrender.com/fetch-cart-item')
        .then(res => res.json())
        .then(data => {
            if (data.data){
                // console.log(data.data);
                let totalPrice = 0;
                if (data.data.product){
                    setProducts(data.data.product);
                }
                if (data.data.details){
                    Object.values(data.data.details).forEach(item => {
                        totalPrice += item.price;
                    })
                    setTotalPrice(totalPrice);
                    setUserDetails(data.data.details);
                }
                if (data.data.user){
                    setName(data.data.user.name);
                    setAddress(data.data.user.address);
                    setEmail(data.data.user.email);
                    setPhone(data.data.user.phone);
                    if (data.data.user.city){
                        setCity(data.data.user.city);
                    }
                    if (data.data.user.area){
                        setArea(data.data.user.area);
                    }
                }
            }
        })
        .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (email) {
                const check1 = email.includes('@');
                const check2 = email.includes('.com');

                if (check1 && check2){
                    const domain = email.slice(email.indexOf('@') + 1, email.indexOf('.com'));

                    if (domain.length > 0){
                        setEmailValidty(true);
                    }
                }
                else {
                    setEmailValidty(false);
                }
            }
        }, 1200)

        //clearing the timeout
        return () => clearTimeout(timer);
    }, [email]);

    useEffect(() => {
        const phoneTimer = setTimeout(() => {
            if (phone){
                phone.length === 11 ? setPhoneValidity(true) : setPhoneValidity(false);
            }
        }, 1200)

        return () => clearTimeout(phoneTimer);
    }, [phone])

    useEffect(() => {
        if (name && address && (email && emailValidity) && phone && city && area && paymentMethod && Object.keys(products).length){
            setBtnDisable(false);
        }
        else {
            setBtnDisable(true);
        }
    }, [name, address, email, emailValidity, phone, paymentMethod]);

    useEffect(() => {
        if (backdrop){
            disableScroll();
        }
        else {
            window.onscroll = () => {}
        }
    }, [backdrop]);

    let areaOption = null;

    if (city !== 'Select City'){
        areaOption = cities[city].map((item, idx) => <option key={idx} className='payment-option'>{item}</option>)
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        setBackdrop(true);
        setSpinner(true);

        await fetch('https://boxdelabonita-server-13dd.onrender.com/place-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name, address, email, phone, city, area, paymentMethod, totalPrice, deliveryCharge, userDetails
            })
        })
        .then(res => res.json())
        .then(data => {
            setSpinner(false);
            setBackdrop(true);
            setPlaceOrderStatus(data.status);
            setPlaceOrderDetails(data.data)
            setModal(true);
        })
        .catch(err => {
            setSpinner(false);
            setBackdrop(true);
            setPlaceOrderStatus('server error');
        });
    }

    let displayStatusMsg = null;

    if (placeOrderStatus === 'success'){
        displayStatusMsg = <div className='place-order-container'>
            <div className='place-order-header'>
                <div className='place-order-icon-container'>
                    <FontAwesomeIcon icon={faCheck} className='place-order-icon' />
                </div>
                <div className='place-order-details-container'>
                    <h2 className='place-order-details-h2'>Order Placed</h2>
                    <p className='place-order-details-p'>Your order has been placed successfully</p>
                    <p className='place-order-details-p'>You can see the status of the order at any time</p>
                </div>
            </div>
            <hr className='hr-line'/>
            <div className='place-order-footer'>
                <div className='place-order-footer-row'>
                    <div className='place-order-footer-column'>
                        <h3 className='place-order-details-h3'>Date</h3>
                        <p className='place-order-details-p'>{placeOrderDetails.date}</p>
                    </div>
                    <div className='place-order-footer-column right-column'>
                        <h3 className='place-order-details-h3'>Order Id</h3>
                        <p className='place-order-details-p'>{placeOrderDetails.orderId}</p>
                    </div>
                </div>
                <div className='place-order-footer-row'>
                    <div className='place-order-footer-column'>
                        <h3 className='place-order-details-h3'>Shipping To</h3>
                        <p className='place-order-details-p'>{address}</p>
                    </div>
                    <div className='place-order-footer-column right-column'>
                        <h3 className='place-order-details-h3'>Payment Method</h3>
                        <p className='place-order-details-p'>{paymentMethod}</p>
                    </div>
                </div>
            </div>
            <button className='place-order-btn' onClick={() => window.location.reload()}>Done</button>
        </div>
    }

    return (
        <>
        <Backdrop backdrop={backdrop}/>
        <Spinner spinner={spinner}/>
        <Modal modal={modal}>
            {displayStatusMsg}
        </Modal>
        <section className='checkout-container-main'>
            <div className='checkout-container'>
                <div className='payment-container'>
                    <h3 className='checkout-h3'>Payment Details</h3>
                    <form className='payment-form' onSubmit={submitHandler}>
                        <fieldset className='payment-form-filedset'>
                            <input type='text'
                                   placeholder='Full Name'
                                   className='payment-form-input'
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}/>
                        </fieldset>
                        <fieldset className='payment-form-filedset'>
                            <input type='text'
                                   placeholder='Full Address'
                                   className='payment-form-input'
                                   value={address}
                                   onChange={(e) => setAddress(e.target.value)}/>
                        </fieldset>
                        <fieldset className={emailValidity ? 'payment-form-filedset' : 'payment-form-filedset wrong-input'}>
                            <input type='email'
                                   placeholder='Email'
                                   className='payment-form-input'
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}/>
                        </fieldset>
                        <fieldset className={phoneValidity ? 'payment-form-filedset' : 'payment-form-filedset wrong-input'}>
                            <div className='flag-container'>
                                <img src={flag} className='flag'/>
                                <span className='country-code'>+88</span>
                            </div>
                            <input type='number'
                                   placeholder='Phone Number'
                                   className='payment-form-input phone'
                                   value={phone}
                                   onChange={(e) => setPhone(e.target.value)}/>
                        </fieldset>
                        <fieldset className='payment-form-filedset'>
                            <select className='payment-select' value={city} onChange={(e) => setCity(e.target.value)}>
                                <option disabled className='payment-option'>Select City</option>
                                {citiesOption}
                            </select>
                        </fieldset>
                        <fieldset className='payment-form-filedset'>
                            <select className='payment-select' value={area} onChange={(e) => setArea(e.target.value)}>
                                <option className='payment-option'>Select Area</option>
                                {areaOption}
                            </select>
                        </fieldset>
                        <section className='payment-method-main'>
                            <h3 className='payment-h3'>Payment Method</h3>
                            <div className='payment-form-group'>
                                <fieldset className='payment-form-filedset payment'>
                                    <input id="cod" type='radio' name='payment-method' className='paymet-method' value='Cash on delivery' onChange={(e) => setPaymentMethod(e.target.value)}/>
                                    <label htmlFor='cod' className='payment-form-label'>Cash on Delivery</label>
                                </fieldset>
                                <fieldset className='payment-form-filedset payment'>
                                    <input id='bkash' type='radio' name='payment-method' className='paymet-method' value='bkash' onChange={(e) => setPaymentMethod(e.target.value)}/>
                                    <label htmlFor='bkash' className='payment-form-label'>Bkash</label>
                                </fieldset>
                            </div>
                        </section>
                        <button type='submit'
                                className='submit-btn'
                                disabled={btnDisable}
                                >Order Now</button>
                    </form>
                </div>
                <div className='vertical-line'></div>
                <div className='item-container'>
                    <CheckoutItems items={products} deliveryCharge={deliveryCharge} totalPrice={totalPrice} />
                </div>
            </div>
        </section>
        </>
    )
}

export default Checkout;

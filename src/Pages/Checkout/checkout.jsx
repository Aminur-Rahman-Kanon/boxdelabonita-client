import React, { useEffect, useState, useMemo } from 'react';
import './checkout.css';
import CheckoutItems from './CheckoutItems/checkoutItems';
import flag from '../../Assets/Others/flag.png';
import Spinner from '../../Components/Spinner/spinner';
import Backdrop from '../../Components/Backdrop/backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../Components/Modal/modal';
import { disableScroll } from '../../Utilities/utilities';
import { fetchCartItem } from '../../Utilities/utilities';

//this component fetch the products from contextApi
//display the products
//takes the user information and then finally place the order by making a http request
function Checkout() {
    
    const [products, setProducts] = useState({});
    const [spinner, setSpinner] = useState(false);
    const [backdrop, setBackdrop] = useState(false);
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [emailValidity, setEmailValidty] = useState(true)
    const [phone, setPhone] = useState('');
    const [phoneValidity, setPhoneValidity] = useState(true);
    const [city, setCity] = useState('Select Area');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [btnDisable, setBtnDisable] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);
    const [deliveryCharge, setDeliveryCharge] = useState(0);

    const [placeOrderStatus, setPlaceOrderStatus] = useState('');
    const [placeOrderDetails, setPlaceOrderDetails] = useState(null);
    //this hook execute on component mount and fetch the products from context
    //calculate the total price and store the products in products variable
    useEffect(() => {
        const product = fetchCartItem();
        if (Object.keys(product).length){
            let itemTotalPrice = 0;
            Object.values(product).forEach(item => itemTotalPrice += (item.quantity * item.price))
            setTotalPrice(itemTotalPrice);
        }
        setProducts(product);
    }, []);
    //this hook validate the email from user input. if email is correct form then
    //it set the emailValidity to true
    useEffect(() => {
        const timer = setTimeout(() => {
            if (email) {
                //checking if input contains a '@'
                const check1 = email.includes('@');
                //checking if the user input contains a '.com'
                const check2 = email.includes('.com');
                //input contains both '@' and '.com'then we move forward to the domain validation
                if (check1 && check2){
                    //checking whether any letter is present between the '@' and '.com'
                    //if any letter is present between '@' and '.com' then we know that there is a domain name
                    const domain = email.slice(email.indexOf('@') + 1, email.indexOf('.com'));
                    //i domain is present then we set the emailValidity to true
                    if (domain.length > 0){
                        setEmailValidty(true);
                    }
                }
                //otherwise we set it to true
                else {
                    setEmailValidty(false);
                }
            }
        //we delay the the validation after 1200ms so it does not execute immidiately
        }, 1200)
        //clearing the timeout
        return () => clearTimeout(timer);
    }, [email]);
    //this hook validate the phone number form user input
    useEffect(() => {
        //we validate the phone number by checking if the input length is equal to 11 
        const phoneTimer = setTimeout(() => {
            if (phone){
                phone.length === 11 ? setPhoneValidity(true) : setPhoneValidity(false);
            }
        //we delay it to 1200ms so it does not execute immidiately
        }, 1200)
        //clearing the timer
        return () => clearTimeout(phoneTimer);
    }, [phone])
    //this hook is the final validation process where if all input is correct then it enable the 'Order Now' button
    //where user can actually place the orders
    useEffect(() => {
        //setting the Order Now button enable
        if (name && address && phone && city !== 'Select Area' && paymentMethod && Object.keys(products).length){
            setBtnDisable(false);
        }
        //setting the Order Now button disable
        else {
            setBtnDisable(true);
        }
    }, [name, address, email, city, emailValidity, phone, paymentMethod]);
    //this hook toggle the scroll disability when backdrop is on/off respectively
    useEffect(() => {
        if (backdrop){
            disableScroll();
        }
        else {
            window.onscroll = () => {}
        }
    }, [backdrop]);
    
    //this function handle the http request, send the informations to the server and get the reply
    const submitHandler = async (e) => {
        //preventing reloading
        e.preventDefault();
        //enabling the backdrop and spinner
        setBackdrop(true);
        setSpinner(true);
        //make a http request and handle the response
        await fetch('https://boxdelabonita-server-13dd.onrender.com/place-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name, address, email, phone, city, paymentMethod, totalPrice, deliveryCharge, products
            })
        })
        .then(res => res.json())
        .then(data => {
            setSpinner(false);
            setBackdrop(true);
            setPlaceOrderStatus(data.status);
            setPlaceOrderDetails(data.data)
            setModal(true);
            //if the return status is successfull then we clear the user cart item
            localStorage.removeItem('cart');
        })
        .catch(err => {
            console.log(err);
            setSpinner(false);
            setBackdrop(true);
            setPlaceOrderStatus('server error');
        });
    }
    //we store the status message in displayStatusMsg variable if there is any and display to te screen
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
            <button className='place-order-btn' onClick={() => window.location.assign(`/profile/track/${phone}`)}>Done</button>
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
                                   data-testid='full-name'
                                   placeholder='Full Name'
                                   className='payment-form-input'
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}/>
                        </fieldset>
                        <fieldset className='payment-form-filedset'>
                            <input type='text'
                                   data-testid='full-address'
                                   placeholder='Full Address'
                                   className='payment-form-input'
                                   value={address}
                                   onChange={(e) => setAddress(e.target.value)}/>
                        </fieldset>
                        <fieldset className={emailValidity ? 'payment-form-filedset' : 'payment-form-filedset wrong-input'}>
                            <input type='email'
                                   data-testid='email'
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
                                   data-testid='phone-number'
                                   placeholder='Phone Number'
                                   className='payment-form-input phone'
                                   value={phone}
                                   onChange={(e) => setPhone(e.target.value)}/>
                        </fieldset>
                        <fieldset className='payment-form-filedset'>
                            <select data-testid='delivery-location' className='payment-select' value={city} onChange={(e) => {
                                if (e.target.value === 'Inside Dhaka ৳80'){
                                    setCity(e.target.value);
                                    setDeliveryCharge(80);
                                }
                                else {
                                    setCity(e.target.value);
                                    setDeliveryCharge(150);
                                }
                            }}>
                                <option disabled className='payment-option'>Select Area</option>
                                <option className='payment-option'>Inside Dhaka &#2547;80</option>
                                <option className='payment-option'>Outside Dhaka &#2547;150</option>
                            </select>
                        </fieldset>
                        <section className='payment-method-main'>
                            <h3 className='payment-h3'>Payment Method</h3>
                            <div className='payment-form-group'>
                                <fieldset className='payment-form-filedset payment'>
                                    <input data-testid='payment-method' id="cod" type='radio' name='payment-method' className='paymet-method' value='Cash on delivery' onChange={(e) => setPaymentMethod(e.target.value)}/>
                                    <label htmlFor='cod' className='payment-form-label'>Cash on Delivery</label>
                                </fieldset>
                                <fieldset className='payment-form-filedset payment'>
                                    <input data-testid='payment-method' id='bkash' type='radio' name='payment-method' className='paymet-method' value='bkash' onChange={(e) => setPaymentMethod(e.target.value)}/>
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

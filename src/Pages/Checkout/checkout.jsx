import React, { useEffect, useState, useContext } from 'react';
import './checkout.css';
import CheckoutItems from './CheckoutItems/checkoutItems';
// import { places } from './Checkout-data/data';

function Checkout() {

    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch('https://boxdelabonita-server-13dd.onrender.com/fetch-cart-item')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.data){
                setProducts(data.data);
            }
        })
        .catch(err => console.log(err))
    }, []);

    return (
        <section className='checkout-container-main'>
            <div className='checkout-container'>
                <div className='payment-container'>
                    <h3 className='checkout-h3'>Payment Details</h3>
                    <form className='payment-form'>
                        <fieldset className='payment-form-filedset'>
                            {/* <label className='payment-form-label'>Full Name</label> */}
                            <input type='text' placeholder='Full Name' className='payment-form-input'/>
                        </fieldset>
                        <fieldset className='payment-form-filedset'>
                            {/* <label className='payment-form-label'>Full Address</label> */}
                            <input type='text' placeholder='Full Address' className='payment-form-input'/>
                        </fieldset>
                        <fieldset className='payment-form-filedset'>
                            {/* <label className='payment-form-label'>Email Address</label> */}
                            <input type='email' placeholder='Email' className='payment-form-input'/>
                        </fieldset>
                        <fieldset className='payment-form-filedset'>
                            {/* <label className='payment-form-label'>Phone Number</label> */}
                            <input type='number' placeholder='Phone Number' className='payment-form-input'/>
                        </fieldset>
                        {/* <fieldset className='payment-form-filedset'>
                            <select className='payment-select' defaultValue="Select City">
                                <option className='payment-option'>Select City</option>
                                {
                                    places.map(item => <option key={item} className='payment-option'>{item}</option>)
                                }
                            </select>
                        </fieldset> */}
                        <button type='submit' className='submit-btn'>Pay Now</button>
                    </form>
                </div>
                <div className='vertical-line'></div>
                <div className='item-container'>
                    <CheckoutItems items={products} />
                </div>
            </div>
        </section>
    )
}

export default Checkout;

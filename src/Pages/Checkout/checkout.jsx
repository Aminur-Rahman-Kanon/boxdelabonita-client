import React, { useEffect, useState, useMemo } from 'react';
import './checkout.css';
import CheckoutItems from './CheckoutItems/checkoutItems';
import { cities } from './Checkout-data/data';

const citiesOption = Object.keys(cities).map(item => <option key={item} className='payment-option'>{item}</option>)

function Checkout() {

    const [products, setProducts] = useState({});

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('Select City');
    const [area, setArea] = useState('Select Area');
    const [paymentMethod, setPaymentMethod] = useState('');

    useEffect(() => {
        fetch('https://boxdelabonita-server-13dd.onrender.com/fetch-cart-item')
        .then(res => res.json())
        .then(data => {
            if (data.data){
                setProducts(data.data);
            }
        })
        .catch(err => console.log(err))
    }, []);

    let areaOption = null;

    if (city !== 'Select City'){
        areaOption = cities[city].map((item, idx) => <option key={idx} className='payment-option'>{item}</option>)
    }

    return (
        <section className='checkout-container-main'>
            <div className='checkout-container'>
                <div className='payment-container'>
                    <h3 className='checkout-h3'>Payment Details</h3>
                    <form className='payment-form'>
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
                        <fieldset className='payment-form-filedset'>
                            <input type='email'
                                   placeholder='Email'
                                   className='payment-form-input'
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}/>
                        </fieldset>
                        <fieldset className='payment-form-filedset'>
                            <input type='number'
                                   placeholder='Phone Number'
                                   className='payment-form-input'
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
                                <fieldset className='payment-form-filedset'>
                                    <input id="cod" type='radio' name='payment-method' className='paymet-method' value='cod' onChange={(e) => setPaymentMethod(e.target.value)}/>
                                    <label htmlFor='cod' className='payment-form-label'>Cash on Delivery</label>
                                </fieldset>
                                <fieldset className='payment-form-filedset'>
                                    <input id='bkash' type='radio' name='payment-method' className='paymet-method' value='bkash' onChange={(e) => setPaymentMethod(e.target.value)}/>
                                    <label htmlFor='bkash' className='payment-form-label'>Bkash</label>
                                </fieldset>
                            </div>
                        </section>
                        <button type='submit' className='submit-btn'>Order Now</button>
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

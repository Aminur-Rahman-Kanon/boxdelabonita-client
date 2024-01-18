import React, { useEffect, useMemo, useState } from 'react';
import styles from './address.module.css';
import { cities } from '../../Checkout/Checkout-data/data';

const Address = ({ user }) => {

    const [address, setAddress] = useState([]);
    const [city, setCity] = useState('');

    useEffect(() => {
        if (user.length){
            const tmpAddress = [];
            user.forEach(usr => {
                tmpAddress.push(usr.customerInfo.address);
            })
            setAddress(tmpAddress);
        }
    }, [user]);

    let displayAddress = 'No address';
    if (address.length){
        displayAddress = address.map((addr, idx) => <option key={idx}>{addr}</option>)
    }

    return (
        <form className={styles.addressContainer}>
            <div className={styles.formInputContainer}>
                <select data-testid='address' className={styles.formSelect}>
                    {displayAddress}
                </select>
            </div>
            <div className={styles.formInputContainer}>
                <select data-testid='city' value={city ? city : 'Please Select'} className={styles.formSelect} onChange={(e) => setCity(e.target.value)}>
                    <option disabled>Please Select</option>
                    <option>Inside Dhaka</option>
                    <option>Outside Dhaka</option>
                </select>
            </div>
            <button className={styles.btn}>Change Address</button>
        </form>
    )
}

export default Address;

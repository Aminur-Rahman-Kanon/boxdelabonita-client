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
            // setCity(user.customerInfo.city);
        }
    }, [user]);

    let displayAddress = 'No address';
    if (address.length){
        displayAddress = address.map(addr => <option>{addr}</option>)
    }

    return (
        <form className={styles.addressContainer}>
            <div className={styles.formInputContainer}>
                <select className={styles.formSelect}>
                    {displayAddress}
                </select>
                {/* <input type='text'
                       placeholder='Address'
                       value={address}
                       onChange={(e) => setAddress(e.target.value)}
                       className={styles.formInput} /> */}
            </div>
            <div className={styles.formInputContainer}>
                <select value={city ? city : 'Please Select'} className={styles.formSelect} onChange={(e) => setCity(e.target.value)}>
                    <option disabled>Please Select</option>
                    <option>Inside Dhaka</option>
                    <option>Outside Dhaka</option>
                </select>
            </div>
            {/* <div className={styles.formInputContainer}>
                <select value={area} className={styles.formSelect} onChange={(e) => setArea(e.target.value)}>
                    <option disabled>Please Select</option>
                        {areas}
                </select>
            </div> */}
            <button className={styles.btn}>Apply Changes</button>
        </form>
    )
}

export default Address;

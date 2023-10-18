import React, { useEffect, useMemo, useState } from 'react';
import styles from './address.module.css';
import { cities } from '../../Checkout/Checkout-data/data';

const cityOptions = Object.keys(cities).map((item, idx) => <option key={idx} className={styles.option}>{item}</option>)

const Address = ({ user }) => {

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [area, setArea] = useState('');

    useEffect(() => {
        if (user.user){
            setAddress(user.user.address);
            setCity(user.user.city);
            setArea(user.user.area);
        }
    }, [])

    const areas = useMemo(() => {
        return city ? cities[city].map((item ,idx) => <option key={idx} className={styles.option}>{item}</option>) : <option className={styles.option}>Please Select</option>
    }, [city]);

    return (
        <form className={styles.addressContainer}>
            <div className={styles.formInputContainer}>
                <input type='text'
                       placeholder='Address'
                       value={address}
                       onChange={(e) => setAddress(e.target.value)}
                       className={styles.formInput} />
            </div>
            <div className={styles.formInputContainer}>
                <select value={city} className={styles.formSelect} onChange={(e) => setCity(e.target.value)}>
                    <option disabled>Please Select</option>
                    {cityOptions}
                </select>
            </div>
            <div className={styles.formInputContainer}>
                <select value={area} className={styles.formSelect} onChange={(e) => setArea(e.target.value)}>
                    <option disabled>Please Select</option>
                        {areas}
                </select>
            </div>
            <button className={styles.btn}>Apply Changes</button>
        </form>
    )
}

export default Address;

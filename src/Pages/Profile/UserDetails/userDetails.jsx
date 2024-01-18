import React, { useEffect, useState, useMemo } from 'react';
import styles from './userDetails.module.css';

const UserDetails = ({ user }) => {
    const [fullName, setFullName] = useState('');
    // const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (user.length){
            setFullName(user.at(-1).customerInfo.name);
            setEmail(user.at(-1).customerInfo.email);
            setPhone(user.at(-1).customerInfo.phone);
        }
    }, [user]);

    const displayUserDetails = user ? <form className={styles.userDetailsContainer}>
        <div className={styles.formInputContainer}>
            <input type='text'
                   data-testid='full-name'
                   value={fullName}
                   placeholder='Full Name'
                   onChange={(e) => setFullName(e.target.value)}
                   className={styles.formInput} />
        </div>
        <div className={styles.formInputContainer}>
            <input type='email'
                   data-testid='email'
                   value={email}
                   placeholder='Email'
                   onChange={(e) => setEmail(e.target.value)}
                   className={styles.formInput} />
        </div>
        <div className={styles.formInputContainer}>
            <input type='number'
                   data-testid='phone-number'
                   value={phone}
                   placeholder='Phone Number'
                   onChange={(e) => setPhone(e.target.value)}
                   className={styles.formInput} />
        </div>
        <button className={styles.btn}>Apply Changes</button>
    </form>
    :
    <div className={styles.userDetailsContainer}>
        <span>User: Guest</span>
    </div>

    return (
        <div className={styles.userDetailsMain}>
            {displayUserDetails}
        </div>
    )
}

export default UserDetails;

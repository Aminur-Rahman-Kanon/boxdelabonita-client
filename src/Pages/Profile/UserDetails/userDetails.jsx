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
                   value={fullName}
                   placeholder='Full Name'
                   onChange={(e) => setFullName(e.target.value)}
                   className={styles.formInput} />
        </div>
        {/* <div className={styles.formInputContainer}>
            <input type='text'
                   value={lastName}
                   placeholder='Last Name'
                   onChange={(e) => setLastName(e.target.value)}
                   className={styles.formInput} />
        </div> */}
        <div className={styles.formInputContainer}>
            <input type='email'
                   value={email}
                   placeholder='Email'
                   onChange={(e) => setEmail(e.target.value)}
                   className={styles.formInput} />
        </div>
        <div className={styles.formInputContainer}>
            <input type='number'
                   value={phone}
                   placeholder='Phone Number'
                   onChange={(e) => setPhone(e.target.value)}
                   className={styles.formInput} />
        </div>
        <button className={styles.btn}>Apple Changes</button>
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

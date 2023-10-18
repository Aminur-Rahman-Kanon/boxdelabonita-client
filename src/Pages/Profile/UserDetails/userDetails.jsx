import React, { useEffect, useState, useMemo } from 'react';
import styles from './userDetails.module.css';

const UserDetails = ({ user }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (user.user){
            setFirstName(user.user.firstName);
            setLastName(user.user.lastName);
            setEmail(user.user.email);
            setPhone(user.user.phone);
        }
    }, [user]);

    const displayUserDetails = user ? <form className={styles.userDetailsContainer}>
        <div className={styles.formInputContainer}>
            <input type='text'
                   value={firstName}
                   placeholder='First Name'
                   onChange={(e) => setFirstName(e.target.value)}
                   className={styles.formInput} />
        </div>
        <div className={styles.formInputContainer}>
            <input type='text'
                   value={lastName}
                   placeholder='Last Name'
                   onChange={(e) => setLastName(e.target.value)}
                   className={styles.formInput} />
        </div>
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

import React from 'react';
import styles from './changePassword.module.css';

const ChangePassword = () => {
    return (
        <form className={styles.changePasswordContainer}>
            <div className={styles.formInputContainer}>
                <input type='password' placeholder='New Password' className={styles.formInput} />
            </div>
            <div className={styles.formInputContainer}>
                <input type='password' placeholder='Confirm Password' className={styles.formInput} />
            </div>
            <button className={styles.btn}>Change Password</button>
        </form>
    )
}

export default ChangePassword;

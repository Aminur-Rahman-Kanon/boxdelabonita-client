import React from 'react';
import styles from './profileNavigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLocationDot, faShieldHalved, faCube } from '@fortawesome/free-solid-svg-icons';

const ProfileNavigation = ({ changeFormType }) => {
    return (
        <div className={styles.profileNavigationContainer}>
            <div className={styles.profileNavigationItem} onClick={() => changeFormType('user-information')}>
                <span className={styles.navigation}>User Information</span>
                <FontAwesomeIcon icon={faUser} className={styles.navigationIcon}/>
            </div>
            <div className={styles.profileNavigationItem} onClick={() => changeFormType('address')}>
                <span className={styles.navigation}>Address</span>
                <FontAwesomeIcon icon={faLocationDot} className={styles.navigationIcon}/>
            </div>
            <div className={styles.profileNavigationItem} onClick={() => changeFormType('change-password')}>
                <span data-testid='change-password-header' className={styles.navigation}>Change Password</span>
                <FontAwesomeIcon icon={faShieldHalved} className={styles.navigationIcon}/>
            </div>
            <div className={styles.profileNavigationItem} onClick={() => changeFormType('orders')}>
                <span className={styles.navigation}>Orders</span>
                <FontAwesomeIcon icon={faCube} className={styles.navigationIcon}/>
            </div>
        </div>
    )
}

export default ProfileNavigation;

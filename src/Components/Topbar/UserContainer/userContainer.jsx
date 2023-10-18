import React from 'react';
import styles from './userContainer.module.css';
import icon from '../../../Assets/Others/user.png';
import { Link } from 'react-router-dom';

const UserContainer = ({ isLoggedIn }) => {
    return (
        <div className={styles.userContainer}>
            {
                isLoggedIn ? <div className={styles.user}>
                    <div className={styles.userIconContainer}>
                        <img src={icon} alt="user" className={styles.userIcon} />
                    </div>
                    <div className={styles.userDetailsContainer}>
                        <h3 className={styles.userDetailsHeading3}>Guest</h3>
                        <Link to="/profile" className={styles.userDetailsLink}>My Account</Link>
                        <Link to="" className={styles.userDetailsLink}>Login</Link>
                    </div>
                </div>
                :
                <div>
                    <Link to="" className={styles.userDetailsLink}>Login</Link>
                </div>
            }
        </div>
    )
}

export default UserContainer;

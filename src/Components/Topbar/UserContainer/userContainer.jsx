import React, { useEffect, useState } from 'react';
import styles from './userContainer.module.css';
import icon from '../../../Assets/Others/user.png';
import { Link } from 'react-router-dom';
import LoginBtn from '../../LoginBtn/loginBtn';
import { fetchUser } from '../../../Utilities/utilities';

const UserContainer = () => {

    const [userInput, setUserInput] = useState('');

    const [user, setUser] = useState('Guest');

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const user = fetchUser();
        if (user.length){
            setIsLoggedIn(true)
            setUser(user.at(-1).customerInfo.name)
        }
    }, []);

    const logouthandler = () => {
        const user = fetchUser();
        if (user.length) {
            localStorage.removeItem('user');
            window.location.reload();
        }
    }

    return (
        <div className={styles.userContainer}>
            {
                isLoggedIn ? <div className={styles.user}>
                    <div className={styles.userIconContainer}>
                        <img src={icon} alt="user" className={styles.userIcon} />
                    </div>
                    <div className={styles.userDetailsContainer}>
                        <h3 className={styles.userDetailsHeading3}>{user}</h3>
                        <Link to="/profile" className={styles.userDetailsLink}>My Account</Link>
                        <button className={styles.logoutBtn} onClick={logouthandler}>Logout</button>
                    </div>
                </div>
                :
                <div className={styles.loginContainer}>
                    <h3 className={styles.loginHeader}>Login to check your order's</h3>
                    <form className={styles.loginForm}>
                        <div className={styles.inputContainer}>
                            <input type='text' className={styles.input} placeholder='Enter your phone number' onChange={(e) => setUserInput(e.target.value)}/>
                        </div>
                        <LoginBtn btnDisable={!userInput} userInput={userInput} />
                    </form>
                </div>
            }
        </div>
    )
}

export default UserContainer;

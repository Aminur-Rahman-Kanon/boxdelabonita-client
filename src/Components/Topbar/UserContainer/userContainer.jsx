import React, { useEffect, useState } from 'react';
import styles from './userContainer.module.css';
import icon from '../../../Assets/Others/user.png';
import { Link } from 'react-router-dom';
import LoginBtn from '../../LoginBtn/loginBtn';
import { fetchUser } from '../../../Utilities/utilities';

//this component renders the link to profile page if logged in and
//a form where an user enter their phone number to login
const UserContainer = () => {
    //storing the user input in userInput variable
    const [userInput, setUserInput] = useState('');
    //storing the user name user variable so we can diplay the name
    const [user, setUser] = useState('');
    //if user is logged in then we set isLoggedIn to true so we can conditionaly render the user information to the screen
    //initially set to false meaning user not logged in so we can display the form where user can enter their information to login
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //this hook runs on component mount and fetch the user information from context if the user in logged in
    useEffect(() => {
        const user = fetchUser();
        if (user.length){
            setIsLoggedIn(true)
            setUser(user.at(-1).customerInfo.name)
        }
    }, []);
    //this function logout the user by removing the user object from localStorage
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
                            <input data-testid='login-input' type='text' className={styles.input} placeholder='Enter your phone number' onChange={(e) => setUserInput(e.target.value)}/>
                        </div>
                        <LoginBtn btnDisable={!userInput} userInput={userInput} />
                    </form>
                </div>
            }
        </div>
    )
}

export default UserContainer;

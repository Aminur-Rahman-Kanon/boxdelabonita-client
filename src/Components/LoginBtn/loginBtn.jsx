import React, { useState } from 'react';
import styles from './loginBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoginBtn = ({ btnDisable, userInput }) => {

    const [isLoading, setIsLoading] = useState(false);

    const loginSubmitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await fetch('https://boxdelabonita-server-13dd.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userInput})
        }).then(res => res.json()).then(data => {
            setIsLoading(false);
            if (data.data){
                localStorage.setItem('user', JSON.stringify({ user: data.data }));
                window.location.assign('/profile')
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <button disabled={btnDisable} className={styles.loginBtnContainer} onClick={loginSubmitHandler}>
            {isLoading ? <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.spinner}/> 
            :
            <span className={styles.btn}>Login</span>
            }
        </button>
    )
}

export default LoginBtn
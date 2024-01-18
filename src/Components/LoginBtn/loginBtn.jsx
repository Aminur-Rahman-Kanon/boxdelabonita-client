import React, { useState } from 'react';
import styles from './loginBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const LoginBtn = ({ btnDisable, userInput }) => {
    //with this variable we control the visibility of spinner
    //when true is shows the spinner and vice versa
    //initially we set it to false
    const [isLoading, setIsLoading] = useState(false);

    const loginSubmitHandler = async (e) => {
        e.preventDefault();
        //display the spinner first while the http request is pending
        setIsLoading(true);
        await fetch('https://boxdelabonita-server-13dd.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userInput})
        }).then(res => res.json()).then(data => {
            //hide the spinner when the http request is finish
            setIsLoading(false);
            if (data.status === 'success'){
                //store the user information to localstorage when the http request was successfull
                localStorage.setItem('user', JSON.stringify({ user: data.data }));
                //and redirect to the profile page
                window.location.assign('/profile')
            }
            else {
                //display a warning message if the request wasn't successfull
                return toast.warning('User not found', {style: {backgroundColor: '#067FD0', textTransform: 'capitalize', fontWeight: '600'}});
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <button disabled={btnDisable} className={styles.loginBtnContainer} onClick={loginSubmitHandler}>
            {isLoading ? <FontAwesomeIcon data-testid='spinner' icon={faSpinner} spinPulse className={styles.spinner}/> 
            :
            <span className={styles.btn}>Login</span>
            }
        </button>
    )
}

export default LoginBtn
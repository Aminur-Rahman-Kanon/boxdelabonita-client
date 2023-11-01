import React, { useState } from 'react';
import styles from './removeAllProducts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const RemoveAllProductsBtn = ({ title, cb }) => {

    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = async () => {
        setIsLoading(true);
        await fetch('https://boxdelabonita-server-13dd.onrender.com/remove-all-products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        }).then(res => res.json())
        .then(data => {
            if (data.status === 'success'){
                cb(addItem => addItem -1);
                setIsLoading(false);
                return toast.success(`${title} removed`);
            }
            else {
                setIsLoading(false);
                return toast.error(`Failed, try again`);
            }
        })
        .catch(err => {
            setIsLoading(false);
            return toast.error('Something went wrong');
        });
    }

    return (
        <button className={styles.removeAllProductsBtn} onClick={submitHandler} disabled={!title}>
            {
                isLoading ? 
                <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.spinner} />
                :
                <span className={styles.btnTitle}>Remove</span>
            }
        </button>
    )
}

export default RemoveAllProductsBtn;

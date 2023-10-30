import React, { useState } from 'react';
import styles from './removeBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const RemoveBtn = ({ product, title, cb }) => {

    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const price = product.price.originalPrice - product.price.discountedPrice;
        await fetch('http://localhost:8080/remove-single-item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ item: product.title, price })
        }).then(res => res.json())
        .then(data => {
            if (data.status === 'success'){
                cb(addItem => addItem -1);
                setIsLoading(false);
                return toast.success(`${product.title} removed`);
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
        <button className={styles.removeBtnContainer} onClick={submitHandler}>
            {isLoading ?
                <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.removeIcon} />
                :
                <span className={styles.removeBtn}>{title}</span>
            }
        </button>
    )
}

export default RemoveBtn;

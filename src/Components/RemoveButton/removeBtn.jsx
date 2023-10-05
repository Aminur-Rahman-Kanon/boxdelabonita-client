import React, { useState, useContext } from 'react';
import ContextApi from '../../Components/ContextApi/contextApi';
import styles from './removeBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const RemoveBtn = ({ product }) => {

    const context = useContext(ContextApi);

    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = async () => {
        setIsLoading(true);
        await fetch('https://boxdelabonita-server-13dd.onrender.com/remove-single-item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ item: product.title })
        }).then(res => res.json())
        .then(data => {
            if (data.status === 'success'){
                setIsLoading(false);
                context.setAddItem(addItem => addItem -1);
                toast.success(`1 ${product.title} removed`);
            }
        })
        .catch(err => {
            setIsLoading(false);
            toast.error('Operation failed')
        });
    }

    return (
        <button className={styles.removeBtnContainer} onClick={submitHandler}>
            {isLoading ?
                <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.removeIcon} />
                :
                <span className={styles.removeBtn}>Remove</span>
            }
        </button>
    )
}

export default RemoveBtn;

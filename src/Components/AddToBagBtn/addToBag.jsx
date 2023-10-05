import React, { useContext, useState } from 'react';
import ContextApi from '../ContextApi/contextApi';
import styles from './addToBag.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const AddToBag = ({ product }) => {
    const context = useContext(ContextApi);

    const [isLoading, setIsLoading] = useState(false);
    
    const submitHandler = async () => {
        setIsLoading(true);
        const user = context.user ? context.user : null;

        if (!user || !product.title){
            setIsLoading(false);
            return console.log('invalid request');
        }

        await fetch('https://boxdelabonita-server-13dd.onrender.com/add-item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: user, product:product })
        }).then(res => res.json())
        .then(result => {
            setIsLoading(false);
            message();
            context.setAddItem(addItem => addItem+1);
        })
        .catch(err => {
            setIsLoading(false);
            console.log(err);
        });
    }

    const message = () => {
        return toast.success(`${product.title} added to cart`)
    }

    return (
        <>
        <button className={styles.addToBagBtn} onClick={submitHandler}>
            {
                isLoading ? 
                <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.loader}/>
                :
                <span className={styles.btn}>Add to Bag</span>
            }
        </button>
        </>
    )
}

export default AddToBag;

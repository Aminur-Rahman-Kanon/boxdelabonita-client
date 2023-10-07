import React, { useContext, useState } from 'react';
import ContextApi from '../ContextApi/contextApi';
import styles from './addToBag.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const AddToBag = ({ product, title,  }) => {
    
    const context = useContext(ContextApi);
    const [isLoading, setIsLoading] = useState(false);
    
    const submitHandler = async () => {
        setIsLoading(true);

        if (!product.title){
            setIsLoading(false);
            return toast.error('Failed');
        }

        await fetch('https://boxdelabonita-server-13dd.onrender.com/add-item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ product })
        }).then(res => res.json())
        .then(result => {
            if (result.status === 'success'){
                setIsLoading(false);
                toast.success(`${product.title} added to cart`)
                context.setAddItem(addItem => addItem+1);
            }
            else {
                setIsLoading(false);
                toast.success(`${result.status}`);
            }
        })
        .catch(err => {
            setIsLoading(false);
            toast.error('Failed');
        });
    }

    return (
        <>
        <button className={styles.addToBagBtn} onClick={submitHandler}>
            {
                isLoading ? 
                <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.loader}/>
                :
                <span className={styles.btn}>{title}</span>
            }
        </button>
        </>
    )
}

export default AddToBag;

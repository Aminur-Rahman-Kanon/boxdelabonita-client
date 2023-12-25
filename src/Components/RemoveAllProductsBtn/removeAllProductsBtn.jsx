import React, { useState } from 'react';
import styles from './removeAllProducts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { removeAllProducts } from '../../Utilities/utilities';

const RemoveAllProductsBtn = ({ title, cb }) => {

    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = async () => {
        setIsLoading(true);
        const status = removeAllProducts(title);
        if (status === 'success'){
            cb(addItem => addItem -1);
            setIsLoading(false);
            return toast.success(`${title} removed`, {style: {backgroundColor: '#4b7d37', textTransform: 'capitalize', fontWeight: '600'}});
        }
        else {
            setIsLoading(false);
            return toast.error(`Failed, try again`, {style: {textTransform: 'capitalize', fontWeight: '600'}});
        }
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

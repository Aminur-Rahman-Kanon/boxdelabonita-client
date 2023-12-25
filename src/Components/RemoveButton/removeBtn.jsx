import React, { useState } from 'react';
import styles from './removeBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { removeSingleItem } from '../../Utilities/utilities';
import { toast } from 'react-toastify';

const RemoveBtn = ({ product, title, cb }) => {

    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const status = removeSingleItem(product.title);
        if (status === 'success'){
            cb(addItem => addItem - 1);
            setIsLoading(false);
            return toast.success(`${product.title} removed`, {style: {backgroundColor: '#4b7d37', textTransform: 'capitalize', fontWeight: '600'}});
        }
        else {
            setIsLoading(false);
            return toast.error('Failed, try again', {style: {textTransform: 'capitalize', fontWeight: 600}});
        }
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

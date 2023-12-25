import React, { useState } from 'react';
import styles from './quickBuyBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { addToCart } from '../../Utilities/utilities';

const QuickBuyBtn = ({ product, color }) => {

    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = async () => {
        setIsLoading(true);

        if (!product.title){
            setIsLoading(false);
            return toast.error('Failed', {style: {textTransform: 'capitalize'}});
        }

        if (!color){
            setIsLoading(false);
            return toast.info('Please Select a Color', {style: {backgroundColor: '#067FD0', textTransform: 'capitalize', fontWeight: '600'}});
        }

        const status = addToCart(product, color);
        
        if (status === 'success'){
            setIsLoading(false);
            toast.success(`${product.title} added to cart`, {style: {backgroundColor: '#4b7d37', textTransform: 'capitalize', fontWeight: '600'}})
            return window.location.assign('/checkout');
        }
        else {
            setIsLoading(false);
            toast.error('Failed', {style: {textTransform: 'capitalize', fontWeight: '600'}});
        }
    }

    return (
        <div className={styles.quickButBtn} onClick={submitHandler}>
            {isLoading ? <FontAwesomeIcon icon={faSpinner} spinPulse/> : <span>Quick Buy</span>}
        </div>
    )
}

export default QuickBuyBtn;

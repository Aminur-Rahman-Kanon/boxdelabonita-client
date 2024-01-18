import React, { useState } from 'react';
import styles from './quickBuyBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { addToCart } from '../../Utilities/utilities';

const QuickBuyBtn = ({ disable, product, color }) => {
    //with this variable we control the visibility of the spinner
    //initially set to false so it doesn't show the spinner
    const [isLoading, setIsLoading] = useState(false);
    //function to execute the process ob adding item to cart and continue to checkout
    const submitHandler = async () => {
        setIsLoading(true);
        //if no product passed then abort the process
        if (!product.title){
            setIsLoading(false);
            return toast.error('Failed', {style: {textTransform: 'capitalize'}});
        }
        //prompt user to select an item if snot selected
        if (!color){
            setIsLoading(false);
            return toast.info('Please Select a Color', {style: {backgroundColor: '#067FD0', textTransform: 'capitalize', fontWeight: '600'}});
        }
        //we store the status that is retuned from 'addToCart' api
        const status = addToCart(product, color);
        //if success then we display a success msg to the user
        if (status === 'success'){
            setIsLoading(false);
            toast.success(`${product.title} added to cart`, {style: {backgroundColor: '#4b7d37', textTransform: 'capitalize', fontWeight: '600'}})
            return window.location.assign('/checkout');
        }
        //if not then we show a 'failed' msg
        else {
            setIsLoading(false);
            toast.error('Failed', {style: {textTransform: 'capitalize', fontWeight: '600'}});
        }
    }

    return (
        <button disabled={!disable} className={styles.quickButBtn} onClick={submitHandler}>
            {isLoading ? <FontAwesomeIcon data-testid='spinner' icon={faSpinner} spinPulse/> : <span>Quick Buy</span>}
        </button>
    )
}

export default QuickBuyBtn;

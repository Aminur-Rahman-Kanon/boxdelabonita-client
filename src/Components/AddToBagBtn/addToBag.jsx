import React, { useContext, useState } from 'react';
import ContextApi from '../ContextApi/contextApi';
import styles from './addToBag.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { addToCart } from '../../Utilities/utilities';

const AddToBag = ({ product, title, color }) => {
    
    const context = useContext(ContextApi);
    const [isLoading, setIsLoading] = useState(false);
    
    const submitHandler = async () => {
        setIsLoading(true);

        if (!product.title){
            setIsLoading(false);
            return toast.error('Failed', {style: {textTransform: 'capitalize'}});
        }

        if (!color){
            setIsLoading(false);
            return toast.info('Please Select a Color', {style: {backgroundColor: '#067FD0', textTransform: 'capitalize'}});
        }

        const status = addToCart(product, color);
        
        if (status === 'success'){
            setIsLoading(false);
            toast.success(`${product.title} added to cart`, {style: {backgroundColor: '#4b7d37', textTransform: 'capitalize'}})
            context.setAddItem(addItem => addItem+1);
        }
        else {
            setIsLoading(false);
            toast.error(`${status}`);
        }
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

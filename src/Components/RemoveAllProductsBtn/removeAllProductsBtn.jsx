import React, { useState } from 'react';
import styles from './removeAllProducts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { removeAllProducts } from '../../Utilities/utilities';

//this is a button component which remove all similiar item from the cart and takes the following props:
//title: the name of the item to remove
//cb: a callback function. see line 27 in App component for details
const RemoveAllProductsBtn = ({ title, cb }) => {
    //decalring a variable with the value false so the spinner of the button doesn't show initially
    const [isLoading, setIsLoading] = useState(false);
    //remove item function
    const submitHandler = async () => {
        //activate the spinner initially
        setIsLoading(true);
        //executing the 'removeAllProducts' function which returns a text as status message.see line 275 in utilities.js for more info
        const status = removeAllProducts(title);
        //if the 'removeSingleItem' function return success
        if (status === 'success'){
            //deactivate the spinner
            setIsLoading(false);
            //execute the callback function. see line 27 in App component for details
            cb(addItem => addItem -1);
            //display a success message to the screen so user knows that the operation was successfull
            return toast.success(`${title} removed`, {style: {backgroundColor: '#4b7d37', textTransform: 'capitalize', fontWeight: '600'}});
        }
        //if the 'removeAllProducts' function return failed
        else {
            //deactivate the spinner
            setIsLoading(false);
            //display a failed message to the screen so the user knows that operation failed
            return toast.error(`Failed, try again`, {style: {textTransform: 'capitalize', fontWeight: '600'}});
        }
    }

    return (
        <button className={styles.removeAllProductsBtn} onClick={submitHandler} disabled={!title}>
            {
                isLoading ? 
                <FontAwesomeIcon data-testid='spinner' icon={faSpinner} spinPulse className={styles.spinner} />
                :
                <span className={styles.btnTitle}>Remove</span>
            }
        </button>
    )
}

export default RemoveAllProductsBtn;

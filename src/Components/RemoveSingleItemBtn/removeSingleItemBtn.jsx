import React, { useState } from 'react';
import styles from './removeSingleItemBtn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { removeSingleItem } from '../../Utilities/utilities';
import { toast } from 'react-toastify';

//this is a button component which remove a single item from the cart and takes following as props:
//product: the item object containting item details such as title, color, price etc
//cb: a callback function to force rerender the app component. details can be found in App component in line 27
const RemoveSingleBtn = ({ product, title, cb }) => {

    //decalring a variable with the value false so the spinner of the button doesn't show initially
    const [isLoading, setIsLoading] = useState(false);

    //remove item function
    const submitHandler = async () => {
        //show the spinner initially when the submitHandler function is triggered
        setIsLoading(true);
        //executing the 'removeSingleItem' function which returns a text as status message.see line 233 in utilities.js for more info
        const status = removeSingleItem(product.title);
        //if the 'removeSingleItem' function return success
        if (status === 'success'){
            //execute the callback function. see line 27 in App component for details
            cb(addItem => addItem - 1);
            //deactivating the spinner
            setIsLoading(false);
            //display a success message to the screen
            return toast.success(`${product.title} removed`, {style: {backgroundColor: '#4b7d37', textTransform: 'capitalize', fontWeight: '600'}});
        }
        //if fails
        else {
            //deactivating the spinner
            setIsLoading(false);
            //dislay a failed message to the screen
            return toast.error('Failed, try again', {style: {textTransform: 'capitalize', fontWeight: 600}});
        }
    }

    return (
        <button className={styles.removeBtnContainer} onClick={submitHandler}>
            {isLoading ?
                <FontAwesomeIcon data-testid='spinner' icon={faSpinner} spinPulse className={styles.removeIcon} />
                :
                <span className={styles.removeBtn}>{title}</span>
            }
        </button>
    )
}

export default RemoveSingleBtn;

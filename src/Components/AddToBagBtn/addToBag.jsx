import React, { useContext, useState } from 'react';
import ContextApi from '../ContextApi/contextApi';
import styles from './addToBag.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { addToCart } from '../../Utilities/utilities';

//this is a button component that add an item to the localStorage and take these following props:
//disable: a property to indicate whether the button should be disabled or not
//product: the product that need to add to the localStorage
//title: the text of the button
//color: the color of the item
const AddToBag = ({ disable, product, title, color }) => {
    //extracting the setAddItem from the context object because:
    //Since we store the user added item to localStorage and adding item to localStorage doesn't rerender.
    //that's why declare a counter variable "addItem" to App component and everytime user add or remove an item from the cart
    //we increment or decrement the value so the App component rerender and so its child and we get the latest value from localStorage
    const setItemCount = useContext(ContextApi).setAddItem;

    //declaring a varibale with value false so the the button doesn't show the spinner initially
    //and when user click the "Add to Cart" button this variale value change to true so the button show the spinner
    const [isLoading, setIsLoading] = useState(false);
    
    //declaring a function to add item to the cart
    const submitHandler = async () => {
        //it shows the spinner initially when the submitHandler function is triggered so
        //the user knows that the process has begun
        setIsLoading(true);
        //if no text for the button is provided then we abort the process.
        if (!product.title){
            //deactivate the spinner
            setIsLoading(false);
            //show a message to the display that the process has failed, meaning something is wrong.
            return toast.error('Failed', {style: {textTransform: 'capitalize', fontWeight: '600'}});
        }

        //if no color is provided then we abort
        if (!color){
            //deactivate the spinner
            setIsLoading(false);
            //show a prompt to choose a color.
            return toast.info('Please Select a Color', {style: {backgroundColor: '#067FD0', textTransform: 'capitalize', fontWeight: '600'}});
        }
        //after executing the addToCart function, it returns a string as status whether it succeed or not
        const status = addToCart(product, color);
        //if item adding item is successfull then we do the following:
        if (status === 'success'){
            //deactivate the spinner
            setIsLoading(false);
            //show a successfull message that item was added
            toast.success(`${product.title} added to cart`, {style: {backgroundColor: '#4b7d37', textTransform: 'capitalize', fontWeight: '600'}})
            //incrementing the value of addItem variable.
            //If its not clear why did we increment this variable then read line no 15 of this file or App component line no 27
            setItemCount(addItem => addItem+1);
        }
        //if its failed
        else {
            //deactivate the spinner
            setIsLoading(false);
            //show a message that operation failed
            toast.error(`${status}`, {style: {fontWeight: '600', textTransform: 'capitalize'}});
        }
    }

    return (
        <>
        <button disabled={!disable} className={styles.addToBagBtn} onClick={submitHandler}>
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

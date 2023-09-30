import React from 'react';
import styles from './displayProduct.module.css';

const DisplayProduct = ({ product }) => {
    
    if (!product) return;

    return (
        <div className={styles.displayProduct}>
        
        </div>
    )
}

export default DisplayProduct

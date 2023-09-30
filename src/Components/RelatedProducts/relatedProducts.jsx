import React, { useEffect } from 'react';
import styles from './relatedProducts.module.css';

const RelatedProducts = ({ product }) => {

    useEffect(() => {
        fetch(`https://boxdelabonita-server-13dd.onrender.com/fetch-related-products/${product}`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }, [])

    if (!product) return;

    return (
        <div className={styles.relatedProducts}>
        
        </div>
    )
}

export default RelatedProducts

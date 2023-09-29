import React, { useEffect } from 'react';
import styles from './displayProduct.module.css';
import { useParams } from 'react-router-dom';

const DisplayProduct = () => {

    const params = useParams();

    useEffect(() => {
        if (params.productId){
            fetch(`http://localhost:8080/fetch-product/${params.productId}`).then(res => console.log(res)).catch(err => console.log(err));
        }
    }, [])

    return (
        <div className={styles.displayProduct}>
            
        </div>
    )
}

export default DisplayProduct

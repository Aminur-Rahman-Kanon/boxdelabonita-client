import React from 'react';
import styles from './productsNavigation.module.css';
import { useLocation } from 'react-router-dom';

const ProductsNavigation = () => {

    const location = useLocation();
    const path = decodeURI(location.pathname).split('/').slice(1);

    let displayPath = null;

    if (path.length) {
        displayPath = path.map((item, idx) => {
            if (idx+1 === path.length){
                return <span key={item} className={styles.path}>{item}</span>
            }
            else {
                return <span key={idx}>
                    <span className={styles.path}>{item}</span>
                    <span className={styles.path}>&gt;</span>
                </span>
            }
        })
    }

    return (
        <div className={styles.productsNavigation}>
            {displayPath}
        </div>
    )
}

export default ProductsNavigation;

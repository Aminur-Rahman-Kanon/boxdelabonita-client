import React from 'react';
import styles from './productsNavigation.module.css';
import { useLocation, Link } from 'react-router-dom';

const ProductsNavigation = () => {

    const location = useLocation();
    const path = decodeURI(location.pathname).split('/').slice(1);

    let displayPath = null;

    if (path.length) {
        displayPath = [
            <Link key={1} to={`/bag/all bags`} className={styles.path}>{path[0]}</Link>,
            <Link key={2} to={`/bag/${path[1].toLowerCase()}`} className={styles.path}>{path[1]}</Link>,
            <span key={3} className={styles.path}>{path[2]}</span>
        ]
        // displayPath = path.map((item, idx) => {
        //     if (idx+1 === path.length){
        //         return <span key={item} className={styles.path}>{item}</span>
        //     }
        //     else {
        //         return <span key={idx}>
        //             <span className={styles.path}>{item}</span>
        //             <span className={styles.path}>&gt;</span>
        //         </span>
        //     }
        // })
    }

    return (
        <div className={styles.productsNavigation}>
            {displayPath}
        </div>
    )
}

export default ProductsNavigation;

import React from 'react';
import styles from './productsNavigation.module.css';
import { useLocation, Link } from 'react-router-dom';

//this component display the lexical path that an user visited
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
    }

    return (
        <div className={styles.productsNavigation}>
            {displayPath}
        </div>
    )
}

export default ProductsNavigation;

import React, { useEffect } from 'react';
import styles from './headingContainer.module.css';

//this component the category name of the products
const HeadingContainer = ({ type }) => {

    let heading = null;

    //conditionally display the name of the category
    switch(type){
        case 'new arrivals':
            heading = 'New Arrivals';
            break;
            
        case 'trending products':
            heading = 'Trending Products';
            break;

        case 'hot deals':
            heading = 'Hot Deals';
            break;

        case 'popular products':
            heading = 'Popular Products';
            break;

        case 'all bags':
            heading = 'All Bags';
            break;

        default:
            break;
    }

    return (
        <div className={styles.headerContainer}>
            <h2 className={styles.header2}>{heading}</h2>
        </div>
    )
}

export default HeadingContainer;

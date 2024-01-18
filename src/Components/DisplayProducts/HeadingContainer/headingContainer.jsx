import React, { useEffect } from 'react';
import styles from './headingContainer.module.css';

//this component the category name of the products
const HeadingContainer = ({ type }) => {

    let heading1 = null;

    //conditionally display the name of the category
    if (type === 'new arrivals'){
        heading1 = "New Arrivals";
    }
    else if (type === 'trending products'){
        heading1 = "Trending Products";
    }
    else if (type === 'hot deals'){
        heading1 = "Hot Deals";
    }
    else if (type === 'popular products'){
        heading1 = "Most Popular";
    }

    return (
        <div className={styles.headerContainer}>
            <h2 className={styles.header2}>{heading1}</h2>
        </div>
    )
}

export default HeadingContainer;

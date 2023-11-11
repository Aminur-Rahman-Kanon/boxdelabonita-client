import React, { useEffect } from 'react';
import styles from './headingContainer.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HeadingContainer = ({ type }) => {

    let heading1 = null;

    useEffect(() => {
        Aos.init({ duration: 2500 })
    }, []);

    if (type === 'new-arrivals'){
        heading1 = "New Arrivals";
    }
    else if (type === 'trending'){
        heading1 = "Trending Products";
    }
    else if (type === 'hot-deals'){
        heading1 = "Hot Deals";
    }
    else if (type === 'popular-products'){
        heading1 = "Most Popular";
    }

    return (
        <div className={styles.headerContainer}>
            <h2 className={styles.header2}>{heading1}</h2>
        </div>
    )
}

export default HeadingContainer;

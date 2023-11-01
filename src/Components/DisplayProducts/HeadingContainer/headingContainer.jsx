import React, { useEffect } from 'react';
import styles from './headingContainer.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HeadingContainer = ({ type }) => {

    console.log(type);

    let heading1 = null;
    let heading2 = null;

    useEffect(() => {
        Aos.init({ duration: 2500 })
    }, []);

    if (type === 'new-arrivals'){
        heading1 = "New Arrivals";
        heading2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    }
    else if (type === 'trending-products'){
        heading1 = "Trending Products";
        heading2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    }
    else if (type === 'hot-deals'){
        heading1 = "Hot Deals";
        heading2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    }

    return (
        <div className={styles.headerContainer}>
            <h2 className={styles.header2}>{heading1}</h2>
            {/* <h3 className={styles.header3}>{heading2}</h3> */}
        </div>
    )
}

export default HeadingContainer;

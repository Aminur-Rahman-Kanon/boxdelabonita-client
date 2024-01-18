import React, { useEffect, useState } from 'react';
import styles from './loader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

//this component render some spinner while the parent component loads the product
//it renders some spinner for the top where other images of the product are displayed
//and one big spinner where the first image of the product is displayed
//finally some spinner for the bottom where some other related products are displayed
const Loader = () => {

    //when browser window inner width is resized we store that to this variable
    //so we can control the number of spinner thst need to display in terms of pc, tablet and mobile display
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        //we are storing the size of the window inner width
        window.addEventListener('resize', () => {
            setInnerWidth(window.innerWidth)
        })
    }, []);

    let displayTopImgs = null;
    let displayBottomImgs = null;

    if (innerWidth <= 900){
        displayTopImgs = Array.from(Array(4)).map((item, idx) => <div key={idx} className={styles.sliderImgContainer}>
            <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.loader}/>
        </div>)

        displayBottomImgs = Array.from(Array(4)).map((item, idx) => <div key={idx} className={styles.productDetailsContainer}>
            <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.loader}/>
        </div>)
    }
    else {
        displayTopImgs = Array.from(Array(7)).map((item, idx) => <div key={idx} className={styles.sliderImgContainer}>
            <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.loader}/>
        </div>)

        displayBottomImgs = Array.from(Array(4)).map((item, idx) => <div key={idx} className={styles.productDetailsContainer}>
            <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.loader}/>
        </div>)
    }

    return (
        <div className={styles.loaderContainer}>
            <div className={styles.section1}>
                {displayTopImgs}
            </div>
            <div className={styles.section2}>
                <div className={styles.mainImageContainer}>
                    <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.loader}/>
                </div>
                <div className={styles.detailsContainer}>
                    {displayBottomImgs}
                </div>
            </div>
        </div>
    )
}

export default Loader

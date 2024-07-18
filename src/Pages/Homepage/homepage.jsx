import React from 'react';
import styles from './homepage.module.css';
import Banner from '../../Components/Banner/banner';
import Category from '../../Components/Category/category';
import DisplayProducts from '../../Components/DisplayProducts/DisplayProductsMain/displayProductsMain';
import AdditionalBanner from '../../Components/AdditionalBanner/additionalBanner';
import Journal from '../../Components/Journal/journal';

function Homepage() {
    return (
        <div className={styles.homapageContainer}>
            <Banner />
            <Category />
            {/* <AdditionalBanner /> */}
            <DisplayProducts productsType={"all bags"}/>
            <Journal />
        </div>
    )
    }

    export default Homepage

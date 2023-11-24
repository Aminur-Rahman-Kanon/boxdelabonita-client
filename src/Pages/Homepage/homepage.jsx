import React from 'react';
import styles from './homepage.module.css';
import Banner from '../../Components/Banner/banner';
import Category from '../../Components/Category/category';
import DisplayProducts from '../../Components/DisplayProducts/DisplayProductsMain/displayProductsMain';

function Homepage() {
    return (
        <div className={styles.homapageContainer}>
            <Banner />
            <Category />
            <DisplayProducts productsType={"new-arrivals"}/>
            <DisplayProducts productsType={"popular-products"}/>
            <DisplayProducts productsType={"hot-deals"}/>
            <DisplayProducts productsType={"trending"}/>
        </div>
    )
    }

    export default Homepage

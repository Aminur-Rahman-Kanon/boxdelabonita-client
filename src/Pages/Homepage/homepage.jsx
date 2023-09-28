import React from 'react';
import styles from './homepage.module.css';
import Banner from '../../Components/Banner/banner';
import Category from '../../Components/Category/category';
import DisplayProducts from '../../Components/DisplayProducts/DisplayProductsMain/displayProductsMain';
import HotdealsProducts from '../../Components/HotDealsProducts/HotdealsMain/hotdealsProducts';

function Homepage() {
    return (
        <div className={styles.homapageContainer}>
            <Banner />
            <Category />
            <DisplayProducts productsType={"new-arrivals"} row={"normal"} theme={"yellow"}/>
            <HotdealsProducts />
            <DisplayProducts productsType={"trending-products"} row={"reverse"} theme={"red"}/>
        </div>
    )
    }

    export default Homepage

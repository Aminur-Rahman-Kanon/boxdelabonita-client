import React from 'react';
import styles from './categoryContainer.module.css';
import { Link } from 'react-router-dom';
import Categories from '../Categories/categories';

const CategoryContainer = () => {
    return (
        <div className={styles.categoryContainer}>
            <Categories />
            <div className={styles.feauturedCategories}>
                <Link to="/bag/popular products" className={styles.featuredCategory}>Popular Products</Link>
                <Link to="/bag/hot-deals" className={styles.featuredCategory}>Hot Deals</Link>
                <Link to="/bag/new-arrivals" className={styles.featuredCategory}>New Arrivals</Link>
            </div>
        </div>
    )
}

export default CategoryContainer

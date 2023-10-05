import React from 'react';
import styles from './categoryContainer.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Categories from '../Categories/categories';

const CategoryContainer = ({ toggleSidePanel }) => {

    const navigate = useNavigate();

    return (
        <div className={styles.categoryContainer}>
            <Categories toggleSidePanel={toggleSidePanel} />
            <div className={styles.feauturedCategories}>
                <div className={styles.featuredCategory} onClick={() => {
                    toggleSidePanel();
                    navigate('/bag/popular-products');
                }}>Popular Products</div>
                <div className={styles.featuredCategory} onClick={() => {
                    toggleSidePanel();
                    navigate('/bag/hot-deals')
                }}>Hot Deals</div>
                <div className={styles.featuredCategory} onClick={() => {
                    toggleSidePanel();
                    navigate('/bag/new-arrivals')
                }}>New Arrivals</div>
            </div>
        </div>
    )
}

export default CategoryContainer;

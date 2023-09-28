import React from 'react';
import styles from './category.module.css';
import { category } from '../../Data/data';

function Category() {
    const categoryDisplay = category.map(item => <div key={item.title} className={styles.categoryItem}>
        <div className={styles.categoryImgContainer}>
            <img src={item.img} alt={item.title} className={styles.categoryImg} />
        </div>
        <div className={styles.categoryDetailsContainer}>
            <span className={styles.categoryTitle}>{item.title}</span>
        </div>
    </div>)

    return (
        <div className={styles.categoryContainer}>
            {categoryDisplay}
        </div>
    )
}

export default Category

import React from 'react';
import styles from './category.module.css';
import { categories } from '../../../Data/data';

const Category = () => {
    return (
        <div className={styles.categoryMain}>
            {categories.map(cat => <div className={styles.categories}>
                <div className={styles.imgContainer}>
                    <img src={cat.img} alt={cat.title} className={styles.img}/>
                </div>
                <div className={styles.headingContainer}>
                    <span className={styles.heading}>{cat.title}</span>
                </div>
            </div>)}
        </div>
    )
}

export default Category;

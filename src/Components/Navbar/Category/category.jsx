import React from 'react';
import styles from './category.module.css';
import { categories } from '../../../Data/data';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className={styles.categoryMain}>
            {categories.map(cat => <Link to={`/bag/${cat.title.toLowerCase()}`} key={cat.id} className={styles.categories}>
                <div className={styles.imgContainer}>
                    <img src={cat.img} alt={cat.title} className={styles.img}/>
                </div>
                <div className={styles.headingContainer}>
                    <span className={styles.heading}>{cat.title}</span>
                </div>
            </Link>)}
        </div>
    )
}

export default Category;

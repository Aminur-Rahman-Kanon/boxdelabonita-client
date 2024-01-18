import React from 'react';
import styles from './category.module.css';
import { Link } from 'react-router-dom';
import { category } from '../../Data/data';

//this component renders the links of all item's categories such as backpack, bucket bag, shoulder bag etc
function Category() {
    const categoryDisplay = category.map(item => <Link to={`/bag/${item.route}`} key={item.title} className={styles.categoryItem}>
        <div className={styles.categoryImgContainer}>
            <img src={item.img} alt={item.title} className={styles.categoryImg} />
        </div>
        <div className={styles.categoryDetailsContainer}>
            <span className={styles.categoryTitle}>{item.title}</span>
        </div>
    </Link>)

    return (
        <div className={styles.categoryContainer}>
            <div className={styles.category}>
                {categoryDisplay}
            </div>
        </div>
    )
}

export default Category

import React from 'react';
import styles from './shop.module.css';
import { shop } from '../../../Data/data';

const Shop = () => {
    return (
        <div className={styles.shopContainer}>
            <div className={styles.shopCategoryContainer}>
                {shop.map(cat => <a data-testid={`${cat.route}`} href={`/bag/${cat.route}`} key={cat.id} className={styles.category}>
                    <div className={styles.imgContainer}>
                        <img src={cat.img} alt={cat.title} className={styles.img}/>
                    </div>
                    <div className={styles.headingContainer}>
                        <span className={styles.heading}>{cat.title}</span>
                    </div>
                </a>)}
            </div>
        </div>
    )
}

export default Shop

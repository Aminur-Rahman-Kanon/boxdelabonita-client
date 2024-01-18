import React, { useContext } from 'react';
import styles from './category.module.css';
import { categories } from '../../../Data/data';
import { Link } from 'react-router-dom';
import ContextApi from '../../ContextApi/contextApi';

const Category = () => {
    
    const context = useContext(ContextApi);
    
    const switchSidedrawer = () => {
        if (window.innerWidth < 850){
            context.toggleSidedrawer();
        }
    }

    return (
        <div className={styles.categoryMain}>
            {categories.map(cat => <Link data-testid={`${cat.title}`} to={`/bag/${cat.title.toLowerCase()}`} key={cat.id} className={styles.categories} onClick={switchSidedrawer}>
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

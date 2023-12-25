import React, { useContext } from 'react';
import styles from './shop.module.css';
import { shop } from '../../../Data/data';
import { NavLink } from 'react-router-dom';
import ContextApi from '../../ContextApi/contextApi';

const Shop = () => {

    const context = useContext(ContextApi);
    
    const switchSidedrawer = () => {
        if (window.innerWidth < 850){
            context.toggleSidedrawer();
        }
    }

    return (
        <div className={styles.shopContainer}>
            <div className={styles.shopCategoryContainer}>
                {shop.map(cat => <NavLink to={`/bag/${cat.route}`} key={cat.id} className={styles.category} onClick={switchSidedrawer}>
                    <div className={styles.imgContainer}>
                        <img src={cat.img} alt={cat.title} className={styles.img}/>
                    </div>
                    <div className={styles.headingContainer}>
                        <span className={styles.heading}>{cat.title}</span>
                    </div>
                </NavLink>)}
            </div>
        </div>
    )
}

export default Shop

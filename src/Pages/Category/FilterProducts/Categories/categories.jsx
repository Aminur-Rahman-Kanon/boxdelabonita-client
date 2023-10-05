import React from 'react';
import styles from './categories.module.css';
import { categories } from '../../../../Data/data';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Categories = ({ toggleSidePanel }) => {
    
    const params = useParams();

    const navigate = useNavigate();

    return (
        <div className={styles.categoriesContainer}>
            <select className={styles.categories} onChange={(e) => {
                        toggleSidePanel();
                        navigate(`/bag/${e.target.value.toLowerCase()}`);
                    }} defaultValue="Select Category">
                <option disabled className={styles.category}>Select Category</option>
                {
                    categories.map((cat, idx) => <option key={idx}
                                                         className={params.categoryId === cat.toLowerCase() ? `${styles.category} ${styles.actice}` : styles.category}
                                                         value={cat}>{cat}</option>)
                }
            </select>
        </div>
    )
}

export default Categories;

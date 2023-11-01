import React from 'react';
import styles from './categories.module.css';
import { categories } from '../../../../Data/data';
import { useParams, useNavigate } from 'react-router-dom';

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
                    categories.map(cat => <option key={cat.id}
                                                         className={params.categoryId === cat.title.toLowerCase() ? `${styles.category} ${styles.actice}` : styles.category}
                                                         value={cat.title}>{cat.title}</option>)
                }
            </select>
        </div>
    )
}

export default Categories;

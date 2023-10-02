import React from 'react';
import styles from './filter.module.css';
import { categories, price, color } from '../../../../Data/data';

const Filter = () => {
    return (
        <div className={styles.filterContainer}>
            <div className={styles.filterBtnContainer}>
                <span className={styles.filterBtn}>Filter</span>
            </div>
            <div className={styles.filterDisplay}>
                <div className={styles.filter}>
                    <select className={styles.filterCategory}>
                        {
                            categories.map((cat, idx) => <option key={idx} className={styles.filterOption}>{cat}</option>)
                        }
                    </select>
                </div>
                <div className={styles.filter}>
                    <select className={styles.filterCategory}>
                        {
                            price.map((price, idx) => <option key={price} className={styles.filterOption}>{price}</option>)
                        }
                    </select>
                </div>
                <div className={styles.filter}>
                    <select className={styles.filterCategory}>
                        {
                            color.map((color, idx) => <option key={color} className={styles.filterOption}>{color}</option>)
                        }
                    </select>
                </div>
                <div className={styles.filter}>
                    <label htmlFor='discounted'>Discounted</label>
                    <input type='radio'
                           className={styles.discounted}
                           id="discounted"
                           onChange={() => console.log('discount')} />
                </div>
                <div className={styles.filter}>
                    <label htmlFor='offer'>Special Offer</label>
                    <input type='radio'
                           className={styles.discounted}
                           id='offer'
                           onChange={() => console.log('discount')} />
                </div>
            </div>
        </div>
    )
}

export default Filter

import React, { useEffect, useState } from 'react';
import styles from './filter.module.css';
import { prices, color } from '../../../../Data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const Filter = ({ filters, filterValues }) => {

    const resetFilters = () => {
        filters({ price: 'Please Select', color: 'Please Select', discount: false, specialOffer: false, isFilter: false });
    }

    return (
        <>
        <div className={styles.filterContainer}>
            <div className={styles.filterBtnContainer}>
                <FontAwesomeIcon icon={faFilter} className={styles.filterBtnIcon}/>
                <span className={styles.filterBtn}>Filter</span>
            </div>
            <div className={styles.filterDisplay}>
                <div className={styles.filter}>
                    <label htmlFor='price' className={styles.label}>Price</label>
                    <select data-testid='price' className={styles.filterCategory} id='price' onChange={(e) => filters((filter) => ({...filter, price: e.target.value, isFilter: true}))} value={filterValues.price}>
                        <option disabled>Please Select</option>
                        {
                            prices.map((item, idx) => <option key={idx} className={styles.filterOption} value={item}>&#2547;{`${item}`}</option>)
                        }
                    </select>
                </div>
                <div className={styles.filter}>
                    <label htmlFor='color' className={styles.label}>Color</label>
                    <select data-testid='color' className={styles.filterCategory} id='color' onChange={(e) => filters((filter) => ({...filter, color: e.target.value, isFilter: true}))} value={filterValues.color}>
                    <option disabled>Please Select</option>
                        {
                            color.map((color, idx) => <option key={color} className={styles.filterOption}>{color}</option>)
                        }
                    </select>
                </div>
                <div className={styles.filter}>
                    <label htmlFor='discounted' className={styles.label}>Discounted</label>
                    <input type='checkbox'
                           data-testid='discounted'
                           className={styles.discounted}
                           id="discounted"
                           value={filterValues.discount}
                           checked={filterValues.discount}
                           onChange={(e) => filters((filter) => ({...filter, discount: !filter.discount, isFilter: true}))} />
                </div>
                <div className={styles.filter}>
                    <label htmlFor='offer' className={styles.label}>Special Offer</label>
                    <input type='checkbox'
                           data-testid='special-offer'
                           className={styles.discounted}
                           id='offer'
                           checked={filterValues.specialOffer}
                           value={filterValues.specialOffer}
                           onChange={() => filters((filter) => ({...filter, specialOffer: !filter.specialOffer, isFilter: true}))} />
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.btn} onClick={resetFilters}>Reset</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Filter;

import React, { useEffect, useState } from 'react';
import styles from './filter.module.css';
import { price, color } from '../../../../Data/data';
import Backdrop from '../../../../Components/Backdrop/backdrop';
import { disableScroll } from '../../../../Utilities/utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const Filter = ({ filterApi }) => {

    const [showFilter, setShowFilter] = useState(false);

    const [backdrop, setBackdrop] = useState(false);

    useEffect(() => {
        if (backdrop) {
          disableScroll();
        }
        else {
          window.onscroll = () => {};
        }
    }, [backdrop])

    const togglefilterPanel = () => {
        setShowFilter(!showFilter);
        setBackdrop(!backdrop);
    }

    return (
        <>
        <Backdrop backdrop={backdrop} closeBackdrop={togglefilterPanel}/>
        <div className={styles.filterContainer}>
            <div className={styles.filterBtnContainer}>
                <FontAwesomeIcon icon={faFilter} className={styles.filterBtnIcon}/>
                <span className={styles.filterBtn} onClick={togglefilterPanel}>Filter</span>
            </div>
            <div className={showFilter ? `${styles.filterDisplay} ${styles.show}` : styles.filterDisplay}>
                <div className={styles.filter}>
                    <label htmlFor='price' className={styles.label}>Price</label>
                    <select className={styles.filterCategory} id='price' onChange={(e) => filterApi.setPrice(e.target.value)}>
                        {
                            price.map((price, idx) => <option key={price} className={styles.filterOption}>&#2547;{price}</option>)
                        }
                    </select>
                </div>
                <div className={styles.filter}>
                    <label htmlFor='color' className={styles.label}>Color</label>
                    <select className={styles.filterCategory} id='color' onChange={(e) => filterApi.setColor(e.target.value)}>
                        {
                            color.map((color, idx) => <option key={color} className={styles.filterOption}>{color}</option>)
                        }
                    </select>
                </div>
                <div className={styles.filter}>
                    <label htmlFor='discounted' className={styles.label}>Discounted</label>
                    <input type='radio'
                           className={styles.discounted}
                           id="discounted"
                           onChange={() => filterApi.setDiscount(true)} />
                </div>
                <div className={styles.filter}>
                    <label htmlFor='offer' className={styles.label}>Special Offer</label>
                    <input type='radio'
                           className={styles.discounted}
                           id='offer'
                           onChange={() => filterApi.setSpecialOffer(true)} />
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.btn}>Apply</button>
                    <button className={styles.btn} onClick={ togglefilterPanel }>Close</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Filter;

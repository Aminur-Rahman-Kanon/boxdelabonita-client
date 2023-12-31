import React from 'react';
import styles from './searchResult.module.css';
import Product from '../../DisplayProducts/Product/product';

const SearchResult = ({ products, input }) => {
    // if (!products.length && !input) return;

    let displayProducts = null;

    if (products.length){
        displayProducts = products.map(item => <Product key={item._id} product={item}/>)
    }
    else {
        displayProducts = "Nothing found";
    }

    return (
        <div className={styles.searchResultContainer} style={input ? {display: 'flex'} : {display: 'none'}}>
            <div className={styles.resultContainer}>
                <span className={styles.staticText}>Result for</span>
                <span className={styles.dynamicText}>"{input}"</span>
            </div>
            <div className={styles.displayProductContainer} style={products.length ? {display: 'grid'} : {display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'unset', overflowY: 'auto'}}>
                {displayProducts}
            </div>
        </div>
    )
}

export default SearchResult
import React, { useState, useTransition, useContext, useEffect } from 'react';
import ContextApi from '../../ContextApi/contextApi';
import styles from './searchbar.module.css';
import Logo from '../../Logo/logo';
import TopbarPanel from '../../Topbar/TopbarPanel/topbarPanel';
import SearchInput from '../SearchInput/searchInput';
import { Link } from 'react-router-dom';
import SearchResult from '../SearchResult/searchResult';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const Searchbar = ({ searchbar, toggleSearchbar }) => {

    const [isPending, startTransition] = useTransition();

    const [product, setProduct] = useState([]);

    const [filteredProducts, setFilteredProducts] = useState([]);

    const [userInput, setUserInput] = useState('');

    const context = useContext(ContextApi);
    const products = context.product;

    useEffect(() => {
        if (products.data){
            setProduct(products.data);
        }
    }, [products.data]);

    const searchHandler = () => {
        startTransition(() => {
            if (product.length && userInput){
                const filterProduct = product.filter(prd => prd.title.includes(userInput));
                setFilteredProducts(filterProduct);
            }
        })
    }

    useEffect(() => {
        searchHandler();
    }, [userInput]);

    return (
        <div className={searchbar ? `${styles.searchbarMain} ${styles.show}` : styles.searchbarMain}>
            <div className={styles.xBtnContainer} onClick={toggleSearchbar}>
                <FontAwesomeIcon icon={faX} className={styles.x}/>
            </div>
            <div className={styles.searchbarContainer}>
                <div className={styles.logoContainer}>
                    <Logo />
                </div>
                <div className={styles.search}>
                    <SearchInput isSearching={isPending} inputHandler={setUserInput}/>
                </div>
                <div className={styles.topbarItemContainer}>
                    <TopbarPanel />
                </div>
            </div>
            <div className={styles.popularSearchContainer}>
                <span className={styles.popularSearchLabel}>Popular Searches:</span>
                <span className={styles.popularSearchList}>
                    <Link to="/bag/shoulder bag" className={styles.popularSearchLink}>Shoulder Bag</Link>
                    <Link to="/bag/backpack" className={styles.popularSearchLink}>Backpack</Link>
                    <Link to="/bag/crossbody bag" className={styles.popularSearchLink}>Crossbody Bag</Link>
                </span>
            </div>
            <div className={styles.searchResultMain}>
                <SearchResult products={filteredProducts} input={userInput} />
            </div>
        </div>
    )
}

export default Searchbar
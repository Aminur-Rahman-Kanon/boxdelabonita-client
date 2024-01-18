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
//in this component we perform a search functionality based on user input
//when user enter an input the input is stored in userInput variable
//everytime userInput variable change we execute a function where
//we introduce useTranstition so the search functionality doesn't affect the user expereience
//if there is any result after executing the function we store that in filteredProducts variable
//and if there is any products in filteredProducts variable then we display them to the sccreen
const Searchbar = ({ searchbar, toggleSearchbar }) => {
    //we are using useTransaction here so
    //when user enter an input we let the immididate update to render before executing the search function
    //so we have a smooth user experience
    const [isPending, startTransition] = useTransition();
    //when the app component loads the products we get it here by ContextProvider
    //so when there is products we store those in product variable
    //and we perform the search functionality from the products store in this variable
    const [product, setProduct] = useState([]);
    //after the search operation we store the filtered products in filteredProducts variable
    const [filteredProducts, setFilteredProducts] = useState([]);
    //we store the user input in userInput variable
    const [userInput, setUserInput] = useState('');
    //we fetch the products using ContextProvider it either return the products or []
    const context = useContext(ContextApi);
    //navigating the product array from the context if there is any product
    const products = context.product;
    //this hook runs every time when products.data id changed
    useEffect(() => {
        if (products.data){
            setProduct(products.data);
        }
    }, [products.data]);
    //this is the function where we filter the products based on user inputs
    const searchHandler = () => {
        startTransition(() => {
            if (product.length && userInput){
                const filterProduct = product.filter(prd => prd.title.includes(userInput));
                setFilteredProducts(filterProduct);
            }
        })
    }
    //this hook runs in every user input and run the searchHandler function
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
                    <Logo width={'150px'}/>
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

export default Searchbar;

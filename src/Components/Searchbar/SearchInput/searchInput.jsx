import React from 'react';
import styles from './searchInput.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
//this component render an ui to take user input and store them to userInput variable in searchbar component
const SearchInput = ({ isSearching, inputHandler }) => {
  return (
    <div className={styles.searchInputContainer}>
        <input data-testid='search-input' type='text' className={styles.searchInput} placeholder='Search Products' onChange={(e) => inputHandler(e.target.value)} />
        <div className={styles.searchIconContainer}>
            {
                isSearching ? <FontAwesomeIcon data-testid='spinner' icon={faSpinner} spinPulse className={styles.searchIcon}/>
                :
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon}/>
            }
        </div>
    </div>
  )
}

export default SearchInput;

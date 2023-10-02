import React from 'react';
import styles from './rating.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const Rating = ({ rating, align }) => {

    const activeRating = 5-rating;
    
    let ratingDisplay = [];

    if (rating < 5){
        Array.from(Array(rating)).map((item, idx) => ratingDisplay.push(<FontAwesomeIcon key={idx} icon={faStar} className={`${styles.star} ${styles.active}`} />))
        Array.from(Array(activeRating)).map((item, idx) => ratingDisplay.push(<FontAwesomeIcon key={idx+rating} icon={faStar} className={`${styles.star} ${styles.inactive}`}/>))
    }
    else {
        Array.from(Array(rating)).map((item, idx) => ratingDisplay.push(<FontAwesomeIcon key={idx} icon={faStar} className={`${styles.star} ${styles.active}`} />))
    }


    return (
        <div className={styles.ratingContainer} style={align === 'center' ? {justifyContent: 'center'} : {justifyContent: 'flex-start'}}>
            {ratingDisplay}
        </div>
    )
}

export default Rating;

import React from 'react';
import styles from './underTesting.module.css';
import bg from '../../Assets/Others/maintenance.jpg';

const UnderTesting = () => {
    return (
        <div className={styles.userTestingContainer}>
            <img src={bg} alt='mainenance' className={styles.bg} />
            {/* <h1>Website is currently under maintenance</h1>
            <h2>We will be back soon</h2> */}
        </div>
    )
}

export default UnderTesting;

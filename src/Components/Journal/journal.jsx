import React from 'react';
import styles from './journal.module.css';
import { Link } from 'react-router-dom';

const Journal = () => {
  return (
    <div className={styles.journalContainer}>
        <div className={styles.headingContainer}>
            <h1 className={styles.journalHeading1}>Lifestyle Journal</h1>
            <p className={styles.journalP}>Here's Boxdelabonita lifestyle journal only for lifestyle enthusiasts like you.</p>
            <Link to="/about" className={styles.btn}>Read More</Link>
        </div>
    </div>
  )
}

export default Journal;

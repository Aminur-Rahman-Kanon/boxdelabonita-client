import React from 'react';
import styles from './drawtoggle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Drawtoogle({ toggleSidedrawer }) {
    return (
        <div className={styles.barsContainer} onClick={toggleSidedrawer}>
            <FontAwesomeIcon icon={faBars} className={styles.bars}/>
        </div>
    )
}

export default Drawtoogle

import React from 'react';
import styles from './drawtoggle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

//this component display a hamburger menu icon for tablet and mobile display
function Drawtoogle({ toggleSidedrawer }) {
    return (
        <div data-testid='drawtoggle' className={styles.barsContainer} onClick={toggleSidedrawer}>
            <FontAwesomeIcon icon={faBars} className={styles.bars}/>
        </div>
    )
}

export default Drawtoogle

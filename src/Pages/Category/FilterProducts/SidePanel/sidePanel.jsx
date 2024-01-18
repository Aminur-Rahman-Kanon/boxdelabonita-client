import React from 'react';
import styles from './sidePanel.module.css';
import CategoryContainer from '../CategoryContainer/categoryContainer';
import Categories from '../Categories/categories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const SidePanel = ({ sidePanel, switchSidePanel }) => {
    
    if (!sidePanel) return;

    return (
        <div className={styles.sidePanelContainer}>
            <FontAwesomeIcon icon={faX} className={styles.x} onClick={switchSidePanel}/>
            <CategoryContainer toggleSidePanel={switchSidePanel} />
            <Categories />
        </div>
    )
}

export default SidePanel;

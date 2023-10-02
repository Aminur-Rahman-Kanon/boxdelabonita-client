import React from 'react';
import styles from './sidePanel.module.css';
import CategoryContainer from '../CategoryContainer/categoryContainer';

const SidePanel = ({ sidePanel }) => {
    
    if (!sidePanel) return;

    return (
        <div className={styles.sidePanelContainer}>
            <CategoryContainer />
        </div>
    )
}

export default SidePanel;

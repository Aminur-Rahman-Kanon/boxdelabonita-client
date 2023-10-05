import React from 'react';
import styles from './sidePanel.module.css';
import CategoryContainer from '../CategoryContainer/categoryContainer';

const SidePanel = ({ sidePanel, switchSidePanel }) => {
    
    if (!sidePanel) return;

    return (
        <div className={styles.sidePanelContainer}>
            <CategoryContainer toggleSidePanel={switchSidePanel} />
        </div>
    )
}

export default SidePanel;

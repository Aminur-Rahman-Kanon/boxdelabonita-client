import React from 'react';
import styles from './sidePanel.module.css';
import CategoryContainer from '../CategoryContainer/categoryContainer';
import Categories from '../Categories/categories';

const SidePanel = ({ sidePanel, switchSidePanel }) => {
    
    if (!sidePanel) return;

    return (
        <div className={styles.sidePanelContainer}>
            <CategoryContainer toggleSidePanel={switchSidePanel} />
            <Categories />
        </div>
    )
}

export default SidePanel;

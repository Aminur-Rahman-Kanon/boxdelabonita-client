import React from 'react';
import styles from './colorContainer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

//this component render the color of the item's that are passed as props from parent
//and mark the color of item that the use choosen
const ColorContainer = ({ color, imgIdx, cb }) => {
    return (
        <div className={styles.colorContainer} style={{backgroundColor: `${color}`}} onClick={() => cb(color)}>
            <div className={styles.check} style={imgIdx === color ? {display: 'flex'} : {display: 'none'}}>
                <FontAwesomeIcon icon={faCheck} className={styles.checkIcon}/>
            </div>
        </div>
    )
}

export default ColorContainer

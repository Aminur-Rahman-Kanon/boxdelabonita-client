import React from 'react';
import styles from './soldOut.module.css';
import sold_out from '../../Assets/Others/sold_out_2.png';

const SoldOut = ({ show }) => {
  return (
    <div className={styles.soldOutContainer} style={show ? {display: 'flex'} : {display: 'none'}}>
        <img src={sold_out} alt="sold out" className={styles.soldOutImg}/>
    </div>
  )
}

export default SoldOut;

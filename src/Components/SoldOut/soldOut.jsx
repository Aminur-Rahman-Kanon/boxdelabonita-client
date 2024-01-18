import React from 'react';
import styles from './soldOut.module.css';
import sold_out from '../../Assets/Others/sold_out_2.png';
//this component show sold out image on the product image where the product is out of stock
const SoldOut = ({ show }) => {
  return (
    <div className={styles.soldOutContainer} style={show ? {display: 'flex'} : {display: 'none'}}>
        <img src={sold_out} alt="sold out item" className={styles.soldOutImg}/>
    </div>
  )
}

export default SoldOut;

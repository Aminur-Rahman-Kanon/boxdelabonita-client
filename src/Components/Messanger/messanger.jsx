import React, { useEffect } from 'react';
import styles from './messanger.module.css';
import messanger from '../../Assets/Others/messanger.png';

const Messanger = () => {
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         const el = document.getElementById('messanger');
    //         el.className = `${styles.messangerContainer} ${styles.animate}`;
    //         el.addEventListener('animationend', () => {
    //             el.className = styles.messangerContainer;
    //         })
    //     }, 5000);

    //     return () => clearInterval(intervalId);
    // }, []);

    return (
        <div className={styles.messangerContainer} id='messanger'>
            <img src={messanger} className={styles.messanger}/>
        </div>
    )
}

export default Messanger

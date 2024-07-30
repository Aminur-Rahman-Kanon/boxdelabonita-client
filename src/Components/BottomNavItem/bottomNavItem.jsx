import React from "react";
import styles from './bottomNavItem.module.css';
import { shop } from '../../Data/data';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const BottomNavItem = () => {

    const shopItem = shop.map(item => <a key={item.id} href={`/bag/${item.route}`} className={styles.itemContainer}>
        <div className={styles.imgContainer}>
            <img src={item.img} alt={item.title} className={styles.img}/>
        </div>
        <div className={styles.headerContainer}>
            <span className={styles.header}>{item.title}</span>
        </div>
    </a>)

    return (
        <div className={styles.main}>
            <div className={styles.items}>
                { shopItem }
            </div>
            <div className={styles.socialLinks}>
                <a data-testid="facebook" href="https://facebook.com/box.de.la.bonita" target="_blank" className={styles.socialLinkItem}><FontAwesomeIcon icon={faFacebook} className={styles.socialLinkIcon}/></a>
                <a data-testid='twitter' href="" className={styles.socialLinkItem}><FontAwesomeIcon icon={faTwitter} className={styles.socialLinkIcon}/></a>
                <a data-testid='instagram' href="https://www.instagram.com/p/CzB1FKmviM_/" target="_blank" className={styles.socialLinkItem}><FontAwesomeIcon icon={faInstagram} className={styles.socialLinkIcon}/></a>
            </div>
        </div>
    )
}

export default BottomNavItem;

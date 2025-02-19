import React from "react";
import styles from './bottomNavItem.module.css';
import { shop } from '../../Data/data';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const BottomNavItem = () => {

    return (
        <div className={styles.main}>
            <div className={styles.items}>
                <h3 className={styles.headingSmallBlack}>Contact us</h3>
                <p className={styles.textSmallBlack}>Office: 82/12/1 North Jatrabari, Dhaka, 1204</p>
                <p className={styles.textSmallBlack}>Email: boxdelabonita@gmail.com</p>
                <p className={styles.textSmallBlack}>Phone: +8801911343436</p>
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

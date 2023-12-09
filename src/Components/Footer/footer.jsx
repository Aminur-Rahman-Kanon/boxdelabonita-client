import React from "react";
import styles from './footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import bkash from '../../Assets/Others/bkash.png';
import visa from '../../Assets/Others/visa.png';
import cod from '../../Assets/Others/cod.png';

const Footer = () => {

    return (
        <div data-testid="footer" className={styles.footerMain}>
            <div className={styles.topSection}>
                <div className={styles.topSectionContainer}>
                    <h2 className={styles.headerH2}>CONTACT US</h2>
                    <div className={styles.topSectionContainerItem}>
                        <p className={styles.headerP}><strong>Head Office:</strong>&nbsp;82/12/1, North Jatrabari,  Dhaka 1204</p>
                        <p className={styles.headerP}><strong>Phone: </strong>&nbsp;+8801911343436</p>
                        <p className={styles.headerP}><strong>Email: </strong>&nbsp;boxdelabonita@gmail.com</p>
                    </div>

                    <div className={styles.socialLink}>
                        <a data-testid="boxdelabonita-facebook" href="https://facebook.com/box.de.la.bonita" target="_blank" className={styles.socialLinkItem}><FontAwesomeIcon icon={faFacebook} className={styles.socialLinkIcon}/></a>
                        <a href="" className={styles.socialLinkItem}><FontAwesomeIcon icon={faTwitter} className={styles.socialLinkIcon}/></a>
                        <a href="" className={styles.socialLinkItem}><FontAwesomeIcon icon={faInstagram} className={styles.socialLinkIcon}/></a>
                        <a href="" className={styles.socialLinkItem}><FontAwesomeIcon icon={faYoutube} className={styles.socialLinkIcon}/></a>
                    </div>
                </div>
                <div className={styles.topSectionContainer}>
                    <h2 className={styles.headerH2}>CUSTOMER SERVICES</h2>
                    <div className={styles.topSectionContainerItem}>
                        <a href="" className={styles.topSectionLink}>Contact Us</a>
                        <a href="" className={styles.topSectionLink}>Track Your Order</a>
                        <a href="" className={styles.topSectionLink}>Product Care & Repair</a>
                        <a href="" className={styles.topSectionLink}>Book and Appoinment</a>
                        <a href="" className={styles.topSectionLink}>Frequently Asked Questions</a>
                        <a href="" className={styles.topSectionLink}>Shipping & Returns</a>
                    </div>
                </div>
                <div className={styles.topSectionContainer}>
                    <h2 className={styles.headerH2}>ABOUT US</h2>
                    <div className={styles.topSectionContainerItem}>
                        <a href="/about" className={styles.topSectionLink}>About Us</a>
                        <a href="" className={styles.topSectionLink}>FAQ</a>
                        <a href="" className={styles.topSectionLink}>Our Producers</a>
                        <a href="" className={styles.topSectionLink}>Sitemap</a>
                        <a href="" className={styles.topSectionLink}>Terms & Conditions</a>
                        <a href="" className={styles.topSectionLink}>Privacy Policy</a>
                    </div>
                </div>
                <div className={styles.topSectionContainer}>
                    <h2 className={styles.headerH2}>CATEGORY</h2>
                    <div className={styles.topSectionContainerItem}>
                        <Link to="/bag/bucket bag" className={styles.topSectionLink}>Bucket Bag</Link>
                        <Link to="/bag/clutch bag" className={styles.topSectionLink}>Clutch Bag</Link>
                        <Link to="/bag/crossbody bag" className={styles.topSectionLink}>Crossbody Bag</Link>
                        <Link to="/bag/designer bag" className={styles.topSectionLink}>Designer Bag</Link>
                        <Link to="/bag/saddle bag" className={styles.topSectionLink}>Saddle Bag</Link>
                        <Link to="/bag/shoulder bag" className={styles.topSectionLink}>Shoulder Bag</Link>
                        <Link to="/bag/staw bag" className={styles.topSectionLink}>Staw Bag</Link>
                    </div>
                </div>
            </div>
            <div className={styles.bottomSection}>
                <div className={styles.bottomSectionItem}>
                    <p className={styles.copyright}>Copyright &copy; 2023 Boxdelabonita</p>
                </div>
                <div className={styles.bottomSectionItem}>
                    <img src={cod} alt="cash on delivery" className={styles.paymentImg}/>
                    <img src={bkash} alt="bikash" className={styles.paymentImg} />
                    <img src={visa} alt="master card" className={styles.paymentImg}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;

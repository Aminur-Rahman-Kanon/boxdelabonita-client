import React from "react";
import styles from './footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import bkash from '../../Assets/Others/bkash.png';
import visa from '../../Assets/Others/visa.png';

const Footer = () => {

    return (
        <div data-testid="footer" className={styles.footerMain}>
            <div className={styles.topSection}>
                <div className={styles.topSectionContainer}>
                    <h2 className={styles.headerH2}>CONTACT US</h2>
                    <div className={styles.topSectionContainerItem}>
                        <p className={styles.headerP}><strong>Head Office:</strong>&nbsp;North Jatrabari, Dhaka 1236</p>
                        <p className={styles.headerP}><strong>Phone: </strong>&nbsp;01911343436</p>
                        <p className={styles.headerP}><strong>Email: </strong>&nbsp;support@boxdelabonita.com</p>
                    </div>

                    <div className={styles.socialLink}>
                        <a data-testid="karkhana-facebook" href="https://www.facebook.com/karkhana1993" target="_blank" className={styles.socialLinkItem}><FontAwesomeIcon icon={faFacebook} className={styles.socialLinkIcon}/></a>
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
                        <a href="/about-us" className={styles.topSectionLink}>About Us</a>
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
                        <a href="/products/earring" className={styles.topSectionLink}>Bucket Bag</a>
                        <a href="/products/necklace" className={styles.topSectionLink}>Clutch Bag</a>
                        <a href="/products/bracelet" className={styles.topSectionLink}>Crossbody Bag</a>
                        <a href="/products/fingerring" className={styles.topSectionLink}>Designer Bag</a>
                        <a href="/products/toering" className={styles.topSectionLink}>Saddle Bag</a>
                        <a href="/products/nepali" className={styles.topSectionLink}>Shoulder Bag</a>
                        <a href="/products/other" className={styles.topSectionLink}>Staw Bag</a>
                    </div>
                </div>
            </div>
            <div className={styles.bottomSection}>
                <div className={styles.bottomSectionItem}>
                    <p className={styles.copyright}>Copyright &copy; 2023 Boxdelabonita</p>
                </div>
                <div className={styles.bottomSectionItem}>
                    <img src={bkash} alt="bikash" className={styles.paymentImg} />
                    <img src={visa} alt="master card" className={styles.paymentImg}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;

import React from 'react';
import styles from './about.module.css';
import a_1 from '../../Assets/about/1.jpg';
import a_2 from '../../Assets/about/2.jpg';
import a_3 from '../../Assets/about/3.jpg';
import a_4 from '../../Assets/about/4.jpg';
import a_5 from '../../Assets/about/5.jpg';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.headerContainer}>
                <h1 className={styles.header}>Boxdelabonita</h1>
                <p className={styles.headerP}>Boxdelabonita is a handbag brand that emerged with a vision of embellish fashion with the essence of modernity  that has both affordability and quality. Boxdelabonita is here to bring out the voguish you!</p>
            </div>
            <div className={styles.galleryContainer}>
                <div className={styles.gallery}>
                    <img src={a_1} alt='boxdelabonita' className={styles.galleryImg}/>
                </div>
                <div className={styles.gallery} style={{padding: '10px'}}>
                    <p className={styles.galleryP}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className={styles.gallery}>
                    <img src={a_2} alt='boxdelabonita' className={styles.galleryImg}/>
                </div>
                <div className={styles.gallery} style={{padding: '10px'}}>
                    <p className={styles.galleryP}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className={styles.gallery}>
                    <img src={a_3} alt='boxdelabonita' className={styles.galleryImg}/>
                </div>
                <div className={styles.gallery} style={{padding: '10px'}}>
                    <p className={styles.galleryP}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
    )
}

export default About;

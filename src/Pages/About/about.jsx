import React from 'react';
import styles from './about.module.css';
import a_1 from '../../Assets/about/1.jpg';
import a_2 from '../../Assets/about/2.jpg';
import a_3 from '../../Assets/about/3.jpg';
import a_5 from '../../Assets/about/5.jpg';
import about1 from '../../Assets/about/about_1.jpg';
import about2 from '../../Assets/about/about_2.jpg';
import about3 from '../../Assets/about/about_3.jpg';
import person1 from '../../Assets/about/shawon.jpg';
import person2 from '../../Assets/about/person2.jpg';

const About = () => {
    //this component should show some static data to the display and no logics or functions are needed.
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
                <div className={styles.gallery}>
                    <h3 className={styles.galleryH3}>The Classic</h3>
                    <p className={styles.galleryP}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className={styles.gallery}>
                    <img src={a_2} alt='boxdelabonita' className={styles.galleryImg}/>
                </div>
                <div className={styles.gallery}>
                    <h3 className={styles.galleryH3}>The Modern</h3>
                    <p className={styles.galleryP}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className={styles.gallery}>
                    <img src={a_3} alt='boxdelabonita' className={styles.galleryImg}/>
                </div>
                <div className={styles.gallery}>
                    <h3 className={styles.galleryH3}>The Innovation</h3>
                    <p className={styles.galleryP}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            
            <div className={styles.middlePartContainer}>
                <div className={styles.middlePartHeader}>
                    <h2 className={styles.middlePartH2}>OUR STORY</h2>
                    <div className={styles.middlePartDetails}>
                        <p className={styles.middlePartP}>Mollit ullamco magna eiusmod non sit cupidatat.Minim eu ipsum labore eu ad occaecat culpa.Irure fugiat anim ad dolore mollit ipsum non laboris ex nulla irure enim aute magna.Sunt ad in commodo non amet nulla id.Dolore labore sint anim ad officia.Sint ut consequat consequat tempor ullamco velit Lorem ex.Ea enim deserunt nisi voluptate ullamco duis laborum laboris est eu ex velit sunt dolore.Excepteur incididunt consequat amet pariatur nulla dolore commodo proident officia.Sunt dolore id quis incididunt enim non et est ullamco pariatur officia eiusmod.In commodo Lorem consectetur amet aliquip ex minim laboris.</p>
                        <div className={styles.signatureContainer}>
                            <div className={styles.signatureItem}>
                                <img src={person1} alt='karkhana' className={styles.signature} />
                                <h4 className={styles.middlePartH4}>Person 1</h4>
                                <p className={styles.middlePartP}>Co-Dounder</p>
                            </div>

                            <div className={styles.signatureItem}>
                                <img src={person2} alt='karkhana' className={styles.signature} />
                                <h4 className={styles.middlePartH4}>Person 2</h4>
                                <p className={styles.middlePartP}>Manager</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.middlePartImgContainer}>
                    <img data-testid="about-us-intro-2" src={a_5} alt="karkhana" className={styles.middlePartImg} />
                </div>
            </div>

            <div className={styles.bottomPartContainer}>
                <div className={styles.bottomPartHeader}>
                    <h2 className={styles.bottomPartHeading}>ABOUT BOXDELABONITA</h2>
                    <p className={styles.bottomPartP}>Veniam ipsum veniam Lorem minim nostrud ut eiusmod minim.Aliquip quis ut voluptate nisi.Irure consectetur in sint sint aute consequat incididunt est.Deserunt eiusmod officia sint deserunt nisi occaecat elit fugiat exercitation duis.Proident et sit fugiat sit in labore pariatur.</p>
                </div>

                <div className={styles.teamMemberContainer}>
                    <div className={styles.teamMember}>
                        <div className={styles.teamMemberImgContainer}>
                            <div className={styles.outerDiv}>
                                <div className={styles.imgContainer}>
                                    <img data-testid="about-us-author-1" src={about1} alt="karkhana" className={styles.teamImg}/>
                                </div>
                            </div>
                        </div>

                        <div className={styles.teamMemberDetails}>
                            <h3 className={styles.teamMemberDetailsH3}>OUR MISSION</h3>
                            <p className={styles.bottomPartP}>Cupidatat et pariatur quis dolor consectetur amet amet cillum sint elit ut enim.Quis cupidatat est ad eiusmod.Enim dolor ut in dolor laborum non exercitation occaecat laborum occaecat fugiat in laborum exercitation.Mollit dolore amet sit officia.</p>
                        </div>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.teamMemberImgContainer}>
                            <div className={styles.outerDiv}>
                                <div className={`${styles.imgContainer} ${styles.item2}`}>
                                    <img data-testid="about-us-author-2" src={about2} alt="karkhana" className={styles.teamImg}/>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.teamMemberDetails} ${styles.details2}`}>
                            <h3 className={styles.teamMemberDetailsH3}>OUR VISION</h3>
                            <p className={styles.bottomPartP}>Cupidatat et pariatur quis dolor consectetur amet amet cillum sint elit ut enim.Quis cupidatat est ad eiusmod.Enim dolor ut in dolor laborum non exercitation occaecat laborum occaecat fugiat in laborum exercitation.Mollit dolore amet sit officia.</p>
                        </div>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.teamMemberImgContainer}>
                            <div className={styles.outerDiv}>
                                <div className={styles.imgContainer}>
                                    <img data-testid="about-us-author-3" src={about3} alt="karkhana" className={styles.teamImg}/>
                                </div>
                            </div>
                        </div>

                        <div className={styles.teamMemberDetails}>
                            <h3 className={styles.teamMemberDetailsH3}>FROM THE AUTHOR</h3>
                            <p className={styles.bottomPartP}>Cupidatat et pariatur quis dolor consectetur amet amet cillum sint elit ut enim.Quis cupidatat est ad eiusmod.Enim dolor ut in dolor laborum non exercitation occaecat laborum occaecat fugiat in laborum exercitation.Mollit dolore amet sit officia.Ipsum ullamco deserunt laboris mollit labore sit nisi sit laborum culpa fugiat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;

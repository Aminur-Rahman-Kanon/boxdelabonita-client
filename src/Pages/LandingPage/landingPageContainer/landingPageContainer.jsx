import React, { useEffect, useState } from 'react';
import styles from './landingPageContainer.module.css';
import { category, prices, color } from '../../../Data/data';
import { Link } from 'react-router-dom';
import banner from '../../../Assets/videos/land_banner.mp4';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faX } from '@fortawesome/free-solid-svg-icons';
import Backdrop from '../../../Components/Backdrop/backdrop';
import { disableScroll } from '../../../Utilities/utilities';

const LandingPageContainer = ({ products }) => {

    
    const [prdCategory, setPrdCategory] = useState('');
    const [prdPrice, setPrdPrice] = useState('');
    const [prdColor, setPrdColor] = useState('');

    const [filteredPrd, setFilteredPrd] = useState([]);
    const [filterMode, setFilterMode] = useState(false);
    const [displaySlider, setDisplaySlider] = useState(false);
    const [backdrop, setBackdrop] = useState(false);

    useEffect(() => {
        Aos.init({ duration: '1800' })
    }, [])

    useEffect(() => {
        if (backdrop){
            disableScroll()
        }
        else {
            window.onscroll = () => {}
        }
    }, [backdrop])

    useEffect(() => {
        if (prdCategory){
            const toFilter = filteredPrd.length ? filteredPrd : products;

            const filtered = toFilter.filter(prd => prd.category === prdCategory.toLowerCase());
            if (filtered.length) setFilteredPrd(filtered);
            else setFilteredPrd([]);
        }
    }, [prdCategory]);

    useEffect(() => {
        if (prdPrice){
            const [head, tail] = prdPrice.split('-');
            const toFilter = filteredPrd.length ? filteredPrd : products;

            const filtered = toFilter.filter(prd => {
                return prd.price.originalPrice >=Number(head) && prd.price.originalPrice <= Number(tail)
            });
            if (filtered.length) setFilteredPrd(filtered);
            else setFilteredPrd([])
        }
    }, [prdPrice]);

    useEffect(() => {
        if (prdColor){
            const toFilter = filteredPrd.length ? filteredPrd : products;
            const filterd = [];

            toFilter.forEach(prd => {
                if (prd.color.length){
                    prd.color.forEach(clr => {
                        if (clr.trim() === prdColor.toLowerCase()){
                            filterd.push(prd)
                        }
                    })
                }
            });
            if (filterd.length) setFilteredPrd(filterd);
            else setFilteredPrd([]);
        }
    }, [prdColor]);

    useEffect(() => {
        if (prdCategory || prdColor || prdPrice){
            setFilterMode(true);
        }
        else {
            setFilterMode(false);
        }
    }, [prdCategory, prdColor, prdPrice])

    if (!products) return;
    
    const categories = category.map(c => <option key={c.id}>{c.title}</option>);

    const price = prices.map(p => <option key={p} className={styles.option}>{p}</option>);

    const colors = color.map(clr => <option key={clr} className={styles.option}>{clr}</option>);
    
    const toggleSlider = () => {
        setDisplaySlider((slider) => !slider);
        setBackdrop((backdrop) => !backdrop);
    }

    let displayProduct = <div className={styles.wrapper}>
        <h3 className={styles.headingSmallBlack}>Nothing found</h3>
    </div>

    if (filterMode && filteredPrd.length){
        displayProduct = <div className={styles.wrapper}>
            <div className={styles.productContainer}>
                {
                    filteredPrd.map(prd => <Link to={`/bag/${prd.category}/${prd.title}`} key={prd._id} className={styles.product}>
                        <div className={styles.bgContainer}><img src={Object.values(prd.img)[0] } alt={prd.title} className={styles.bg} /></div>
                        <div className={styles.banner}>
                            <h3 className={styles.headingSmallBlack}>{prd.title}</h3>
                            <div className={styles.priceContainer}>
                                <s style={prd.price.discountedPrice ? {display:'block'} : {display: 'none'}} className={styles.reducedPrice}>&#2547;{prd.price.discountedPrice ? prd.price.originalPrice + prd.price.discountedPrice : null}</s>
                                <span className={styles.mainPrice}>&#2547;{prd.price.originalPrice - prd.price.discountedPrice}</span>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    }
    else if (filterMode && !filteredPrd.length){
        <div className={styles.wrapper}>
            <h3 className={styles.headingSmallBlack}>Nothing found</h3>
        </div>
    }
    else {
        displayProduct = <div className={styles.wrapper}>
            <div className={styles.bodyTop}>
                <div className={styles.filterBtn} onClick={ toggleSlider }>
                    <FontAwesomeIcon icon={ faSliders } className={styles.sliderIcon} />
                    <span className={styles.sliderText}>Filters</span>
                </div>
                <div className={styles.statusContainer}>
                    <span className={styles.sliderText}>Showing {filteredPrd.length ? filteredPrd.length : products.length} products</span>
                </div>
            </div>
            <div className={styles.productContainer}>
                {
                    products.map(prd => <Link to={`/bag/${prd.category}/${prd.title}`} key={prd._id} className={styles.product}>
                        <div className={styles.bgContainer}><img src={Object.values(prd.img)[0] } alt={prd.title} className={styles.bg} /></div>
                        <div className={styles.banner}>
                            <h3 className={styles.productHeading}>{prd.title}</h3>
                            <div className={styles.priceContainer}>
                                <s style={prd.price.discountedPrice ? {display:'block'} : {display: 'none'}} className={styles.reducedPrice}>&#2547;{prd.price.discountedPrice > 0 ? prd.price.originalPrice + prd.price.discountedPrice : null}</s>
                                <span className={styles.mainPrice}>&#2547;{prd.price.originalPrice - prd.price.discountedPrice}</span>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    }


    return (
        <>
        <Backdrop backdrop={backdrop}/>
        <div className={styles.container}>
            <div className={displaySlider ? `${styles.slider} ${styles.display}` : styles.slider}>
                <div className={styles.sliderTop}>
                    <h2 className={styles.headingLargeGreen} style={{fontSize: '1.5rem'}}>Filters</h2>
                    <div className={styles.xBtn} onClick={ toggleSlider }>
                        <FontAwesomeIcon icon={ faX } className={styles.xIcon} />
                    </div>
                </div>
                <div className={styles.panelContainer}>
                    <h3 className={styles.headingSmallBlack}>Categories</h3>
                    <select defaultValue={'Please select a category'} className={styles.select} onChange={(e) => setPrdCategory(e.target.value)}>
                        <option disabled className={styles.option}>Please select a category</option>
                        {categories}
                    </select>
                </div>
                <div className={styles.panelContainer}>
                    <h3 className={styles.headingSmallBlack}>Price</h3>
                    <select defaultValue={'Please select a price range'} className={styles.select} onChange={(e) => setPrdPrice(e.target.value)}>
                        <option disabled className={styles.option}>Please select a price range</option>
                        {price}
                    </select>
                </div>
                <div className={styles.panelContainer}>
                    <h3 className={styles.headingSmallBlack}>Colors</h3>
                    <select defaultValue={'Please select a color'} className={styles.select} onChange={(e) => setPrdColor(e.target.value)}>
                        <option disabled className={styles.option}>Please select a color</option>
                        {colors}
                    </select>
                </div>
            </div>

            <div className={styles.top}>
                <div className={styles.videoContainer}>
                    <video src={banner} muted playsInline loop autoPlay className={styles.video}></video>
                </div>
                <div className={styles.mainBanner}>
                    <h1 data-aos='fade-down' data-aos-delay='100' className={styles.headingLargeGreen}>Boxdelabonita</h1>
                    <h2 data-aos='fade-up' data-aos-delay='300' className={styles.headingLargeWhite}>40% - 50% Off</h2>
                    <h3 data-aos='fade-up' data-aos-delay='500' className={styles.headingMediumWhite}>Shop now</h3>
                </div>
            </div>

            <div className={styles.body}>
                {displayProduct}
            </div>
        </div>
        </>
    )
}

export default LandingPageContainer;

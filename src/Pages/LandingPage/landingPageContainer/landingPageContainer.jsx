import React, { useEffect, useState } from 'react';
import styles from './landingPageContainer.module.css';
import { category, prices, color } from '../../../Data/data';
import { Link } from 'react-router-dom';

const LandingPageContainer = ({ products }) => {

    
    const [prdCategory, setPrdCategory] = useState('');
    const [prdPrice, setPrdPrice] = useState('');
    const [prdColor, setPrdColor] = useState('');

    const [filteredPrd, setFilteredPrd] = useState([]);
    const [filterMode, setFilterMode] = useState(false);

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
        <div className={styles.container}>
            <div className={styles.left}>
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

            <div className={styles.right}>
                {displayProduct}
            </div>
        </div>
    )
}

export default LandingPageContainer;

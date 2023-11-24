import React, { useEffect, useState } from 'react';
import styles from './displayProductsMain.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Product from '../Product/product';
import LoadingContainer from '../LoadingContainer/loadingContainer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import HeadingContainer from '../HeadingContainer/headingContainer';
import SideBackground from '../SideBackground/sideBackground';

const DisplayProducts = ({ productsType }) => {

    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [slideCount, setSlideCount] = useState(0);

    const totalPage = Math.ceil(products.length/6);

    const itemPerSlide = 6;

    let leftIndex = itemPerSlide*slideCount

    let rightIndex = (itemPerSlide*slideCount) + itemPerSlide;

    const [screenWidth, setScreenWidth] = useState(null);

    useEffect(() => {
        Aos.init({ duration: 2000 })
        setIsLoading(true);
        setScreenWidth(window.innerWidth);
        fetch(`https://boxdelabonita-server-13dd.onrender.com/fetch-products/${productsType}`)
        .then(res => res.json())
        .then(data => {
            if (data.data){
                setProducts(data.data);
                setIsLoading(false);
            }
        })
        .catch(err => {
            setIsLoading(false);
            console.log(err);
        });
        console.log('display product main');
    }, []);

    let displayProducts;
    
    if (products.length){
        displayProducts = products.slice(leftIndex, rightIndex).map(item => <Product key={item._id} product={item}/>)
    }
    else if (isLoading) {
        displayProducts = Array.from(Array(6)).map((item, idx) => <LoadingContainer key={idx}/>)
    }
    else {
        displayProducts = <div className={styles.displayProducts}>
            <h3 className={styles.displayProductsH3}>No Products to display</h3>
        </div>
    }

    const nextSlide = () => {
        setSlideCount(slideCount+1);
    }

    const prevSlide = () => {
        setSlideCount(slideCount-1);
    }


    return (
        <div className={styles.displayProductsMain}>
            <div className={styles.displayProductsContainer}>
                <HeadingContainer type={productsType}/>
                <div className={styles.displayContainer}>
                    <div className={styles.sideBg}>
                        <SideBackground content={productsType}/>
                    </div>
                    <div className={styles.displayProduct}>
                        {displayProducts}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayProducts;

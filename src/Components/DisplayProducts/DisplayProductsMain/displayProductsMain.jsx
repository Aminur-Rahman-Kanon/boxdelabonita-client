import React, { useEffect, useState } from 'react';
import styles from './displayProductsMain.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import DisplayProductContainer from '../Product/product';
import LoadingContainer from '../LoadingContainer/loadingContainer';
import BackgroundContainer from '../BackgroundContainer/backgroundContainer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import HeadingContainer from '../HeadingContainer/headingContainer';

const DisplayProducts = ({ productsType, row, theme }) => {

    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [slideCount, setSlideCount] = useState(0);

    const totalPage = Math.ceil(products.length/3);

    const itemPerSlide = 3;

    let leftIndex = itemPerSlide*slideCount

    let rightIndex = (itemPerSlide*slideCount) + itemPerSlide;

    const [screenWidth, setScreenWidth] = useState(null);

    useEffect(() => {
        Aos.init({ duration: 2300 })
        setIsLoading(true);
        setScreenWidth(window.innerWidth);
        fetch(`https://boxdelabonita-server-13dd.onrender.com/fetch-products/${productsType}`)
        .then(res => res.json())
        .then(data => {
            if (data.length){
                setProducts(data);
                setIsLoading(false);
            }
        })
        .catch(err => {
            setIsLoading(false);
            console.log(err);
        });

        window.addEventListener('resize', () => {
            setScreenWidth(window.innerWidth);
        })
    }, []);

    if (screenWidth <= 767){
        leftIndex = 0;
        rightIndex = undefined
    }

    let displayProducts;
    
    if (products.length){
        displayProducts = products.slice(leftIndex, rightIndex).map(item => <DisplayProductContainer product={item}/>)
        // displayProducts = products.map(item => <DisplayProductContainer product={item}/>)
    }
    else if (isLoading) {
        displayProducts = Array.from(Array(3)).map(item => <LoadingContainer />)
    }
    else {
        displayProducts = <div className={styles.displayProducts}>
            <h3 className={styles.displayProductsH3}>No Products to display</h3>
        </div>
    }

    const nextSlide = () => {
        setSlideCount(slideCount+1);
        animateProduct('display-product-container');
    }

    const prevSlide = () => {
        setSlideCount(slideCount-1);
        animateProduct('display-product-container');
    }

    const animateProduct = (id) => {
        const element = document.getElementById(id);
        element.className = `${styles.displayProduct} ${styles.animateProduct}`;
        element.addEventListener('animationend', () => {
            element.className = `${styles.displayProduct}`;
        })
    }

    return (
        <div className={styles.displayProductsMain}>
            <div className={`${styles.backgroundContainer} ${styles[theme]}`}
                 style={row === 'normal' ? {flexDirection: 'row'} : {flexDirection: 'row-reverse'}}>
                <BackgroundContainer type={productsType} row={row} theme={theme} />
                <div className={styles.displayProductsContainer}>
                    <HeadingContainer type={productsType} row={row}/>
                    <div data-aos={row === 'normal' ? "fade-left" : "fade-right"} className={styles.displayProducts}>
                        <div className={styles.displayProduct} id="display-product-container">
                            {displayProducts}
                        </div>
                        <div className={styles.arrowContainer}>
                            <button className={styles.arrowBtn}
                                    onClick={prevSlide}
                                    disabled={!slideCount}>
                                <FontAwesomeIcon icon={faChevronLeft} className={styles.arrow}/>
                            </button>
                            <button className={styles.arrowBtn}
                                    onClick={nextSlide}
                                    disabled={slideCount+1 >= totalPage}>
                                <FontAwesomeIcon icon={faChevronRight} className={styles.arrow}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayProducts;

import React, { useEffect, useState } from 'react';
import styles from './hotdealsProducts.module.css';
import Product from '../Product/product';
import LoadingContainer from '../../DisplayProducts/LoadingContainer/loadingContainer';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HotdealsProducts = () => {

    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 2500 })
        setIsLoading(true);
        fetch('https://boxdelabonita-server-13dd.onrender.com/hotdeals-products')
        .then(res => res.json())
        .then(data => {
            if (data.length){
                setProducts(data);
                setIsLoading(false);
            }
        })
        .catch(err => {
            console.log(err);
            setIsLoading(false);
        });
    }, [])

    let displayProducts = null;

    if (products.length){
        displayProducts = products.map(item => <Product key={item._id} product={item}/>)
    }
    else if (isLoading) {
        displayProducts = Array.from(Array(8)).map((item, idx) => <LoadingContainer key={idx}/>)
    }
    else {
        displayProducts = <h3>Nothing to display</h3>
    }

    return (
        <div className={styles.hotDealsMain}>
            <div data-aos="fade-right" className={styles.headingContainer}>
                <h2 className={styles.heading1}>Hot Deals</h2>
                <h2 className={styles.heading2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
            </div>
            <div data-aos="fade-left" className={styles.productDisplay}>
                {displayProducts}
            </div>
        </div>
    )
}

export default HotdealsProducts

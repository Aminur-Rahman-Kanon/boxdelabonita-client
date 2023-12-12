import React, { useState, useEffect } from 'react';
import styles from './relatedProducts.module.css';
import Products from '../Products/products';
import ProductSlider from '../../../ProductSlider/productSlider';

const RelatedProducts = ({ category, productId }) => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://boxdelabonita-server-13dd.onrender.com/fetch-related-products')
        .then(res => res.json())
        .then(data => {
            if (data.data){
                setProduct(data.data);
            }
        })
        .catch(err => console.log(err));
    }, [productId]);

    if (!product) return;

    let displayProduct = null;

    if (product.length){
        displayProduct = product.map(item => <Products key={item._id} product={item}/>)
    }
    else {
        displayProduct = <h2>Nothing to display</h2>
    }

    return (
        <div className={styles.relatedProducts}>
            <h2 className={styles.header1}>Recommended for you</h2>
            <div className={styles.productDisplay}>
                <ProductSlider products={displayProduct} />
            </div>
        </div>
    )
}

export default RelatedProducts;

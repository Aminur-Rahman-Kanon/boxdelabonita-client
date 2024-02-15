import React, { useState, useEffect } from 'react';
import styles from './relatedProducts.module.css';
import Products from '../Products/products';
import ProductSlider from '../../../ProductSlider/productSlider';

//this component renders all different categories of product except the product that an user visit
const RelatedProducts = ({ products, header }) => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        if (products.length){
            setProduct(products);
        }
    }, [products]);

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
            <h2 className={styles.header1}>{header}</h2>
            <div className={styles.productDisplay}>
                {displayProduct}
            </div>
        </div>
    )
}

export default RelatedProducts;

import React, { useState, useEffect } from 'react';
import styles from './relatedProducts.module.css';
import Products from '../Products/products';

const RelatedProducts = ({ category, productId }) => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/fetch-related-products/${category.toLowerCase()}`)
        .then(res => res.json())
        .then(data => {
            if (data.length){
                const filteredData = data.filter(item => item.title !== productId);
                setProduct(filteredData);
            }
        })
        .catch(err => console.log(err));
        console.log('related product');
    }, [productId]);

    if (!product) return;

    let displayProduct = null;

    if (product.length){
        if (product.length > 4){
            displayProduct = product.slice(0, 4).map(item => <Products key={item._id} product={item}/>)
        }
        else {
            displayProduct = product.map(item => <Products key={item._id} product={item}/>)
        }
    }
    else {
        displayProduct = <h2>Nothing to display</h2>
    }

    return (
        <div className={styles.relatedProducts}>
            <h2 className={styles.header1}>Recommended for you</h2>
            <div className={styles.productDisplay}>
                {displayProduct}
            </div>
        </div>
    )
}

export default RelatedProducts;

import React, { useEffect, useState } from 'react';
import styles from './displayProduct.module.css';
import { useParams } from 'react-router-dom';
import RelatedProducts from '../../Components/RelatedProducts/relatedProducts';
import ProductsNavigation from '../../Components/DisplayProduct/ProductsNavigation/productsNavigation';
import Product from '../../Components/DisplayProduct/Product/product';

const DisplayProduct = () => {

    const { categoryId, productId } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        if (productId){
            fetch(`https://boxdelabonita-server-13dd.onrender.com/fetch-product/${productId}`)
            .then(res => res.json())
            .then(data => {
                if (data){
                    setProduct(data);
                }
            })
            .catch(err => console.log(err));
        }
    }, [])

    let displayProduct = null;

    if (Object.keys(product).length){
        displayProduct = <Product product={product}/>
    }

    return (
        <div className={styles.displayProduct}>
            <ProductsNavigation />
            {displayProduct}
            {/* <RelatedProducts product={categoryId} /> */}
        </div>
    )
}

export default DisplayProduct

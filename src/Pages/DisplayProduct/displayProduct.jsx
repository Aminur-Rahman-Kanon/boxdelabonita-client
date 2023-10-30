import React, { useEffect, useState } from 'react';
import styles from './displayProduct.module.css';
import { useParams } from 'react-router-dom';
import RelatedProducts from '../../Components/DisplayProduct/RelatedProducts/RelatedProductMain/relatedProducts';
import ProductsNavigation from '../../Components/DisplayProduct/ProductsNavigation/productsNavigation';
import Product from '../../Components/DisplayProduct/Product/product';
import Loader from '../../Components/DisplayProduct/Loader/loader';

const DisplayProduct = () => {

    const { categoryId, productId } = useParams();

    const [product, setProduct] = useState({});

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (productId){
            setIsLoading(true);
            fetch(`http://localhost:8080/fetch-product/${productId}`)
            .then(res => res.json())
            .then(data => {
                if (data){
                    setProduct(data);
                    setIsLoading(false);
                }
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err);
            });
        }
    }, [categoryId, productId])

    let displayProduct = null;

    if (Object.keys(product).length){
        displayProduct = <Product product={product}/>
    }
    else if (isLoading){
        displayProduct = <Loader />
    }
    else {
        displayProduct = <h2>Nothing to display</h2>
    }

    return (
        <div className={styles.displayProduct}>
            <ProductsNavigation />
            {displayProduct}
            <RelatedProducts category={categoryId} productId={productId}/>
        </div>
    )
}

export default DisplayProduct

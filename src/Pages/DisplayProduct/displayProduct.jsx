import React, { useEffect, useState, useContext } from 'react';
import ContextApi from '../../Components/ContextApi/contextApi';
import styles from './displayProduct.module.css';
import { useParams } from 'react-router-dom';
import RelatedProducts from '../../Components/DisplayProduct/RelatedProducts/RelatedProductMain/relatedProducts';
import ProductsNavigation from '../../Components/DisplayProduct/ProductsNavigation/productsNavigation';
import Product from '../../Components/DisplayProduct/Product/product';
import Loader from '../../Components/DisplayProduct/Loader/loader';

const DisplayProduct = () => {

    const context = useContext(ContextApi);
    
    const products = context.product;

    const { categoryId, productId } = useParams();

    const [product, setProduct] = useState({});

    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (products.data && productId){
            const copiedItems = JSON.parse(JSON.stringify(products.data));
            const itemIdx = copiedItems.findIndex(item => item.title === productId);
            if (itemIdx >= 0){
                const filteredItem = copiedItems.splice(itemIdx, 1);
                if (filteredItem){
                    setProduct(filteredItem[0]);
                    setRelatedProducts(copiedItems);
                }
            }
        }
    }, [categoryId, productId, products.data])

    let displayProduct = null;

    if (Object.keys(product).length){
        displayProduct = <Product product={product}/>
    }
    else if (products.isLoading){
        displayProduct = <Loader />
    }
    else {
        displayProduct = <h2>Nothing to display</h2>
    }

    return (
        <div className={styles.displayProduct}>
            <ProductsNavigation />
            {displayProduct}
            <RelatedProducts category={categoryId} productId={productId} products={relatedProducts}/>
        </div>
    )
}

export default DisplayProduct

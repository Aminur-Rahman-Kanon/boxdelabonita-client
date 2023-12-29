import React, { useEffect, useState, useContext } from 'react';
import './displayProductsMain.css';
import Product from '../Product/product';
import LoadingContainer from '../LoadingContainer/loadingContainer';
import 'aos/dist/aos.css';
import HeadingContainer from '../HeadingContainer/headingContainer';
import ProductSlider from '../../ProductSlider/productSlider';
import ContextApi from '../../ContextApi/contextApi';

const DisplayProducts = ({ productsType }) => {

    const context = useContext(ContextApi);

    const products = context.product;

    const [product, setrProduct] = useState([]);
    
    useEffect(() => {
        if (productsType && products.data){
            const filteredProducts = products.data.length ? products.data.filter(item => item.subCategory === productsType) : [];
            setrProduct(filteredProducts);
        }
    }, [products]);

    let displayProducts;
    
    if (product.length){
        displayProducts = product.map(item => <Product key={item._id} product={item}/>)
    }
    else if (products.isLoading) {
        displayProducts = Array.from(Array(6)).map((item, idx) => <LoadingContainer key={idx}/>)
    }
    else {
        displayProducts = <div className="display-products">
            <h3 className="display-products-h3">No Products to display</h3>
        </div>
    }

    return (
        <div className="display-products-main">
            <div className="display-products-container">
                <HeadingContainer type={productsType}/>
                <div className="display-product">
                    <ProductSlider products={displayProducts} />
                </div>
            </div>
        </div>
    )
}

export default DisplayProducts;

import React, { useEffect, useState, useContext } from 'react';
import './displayProductsMain.css';
import Product from '../Product/product';
import LoadingContainer from '../LoadingContainer/loadingContainer';
import HeadingContainer from '../HeadingContainer/headingContainer';
import ContextApi from '../../ContextApi/contextApi';

//this component renders a list of products
const DisplayProducts = ({ productsType }) => {

    const context = useContext(ContextApi);
    const products = context.product;
    const [product, setProduct] = useState([]);
    console.log(products);
    
    useEffect(() => {
        if (productsType && products.data){
            // const filteredProducts = products.data.length ? products.data.filter(item => item.subCategory === productsType) : [];
            setProduct(products.data);
        }
    }, [products]);

    let displayProducts;
    
    //when there are products we then display those
    if (product.length){
        displayProducts = product.map(item => <Product key={item._id} product={item}/>)
    }
    //while loading we display a spinner component
    else if (products.isLoading) {
        displayProducts = Array.from(Array(6)).map((item, idx) => <LoadingContainer key={idx}/>)
    }
    //if no products found then we display this
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
                    {displayProducts}
                </div>
            </div>
        </div>
    )
}

export default DisplayProducts;

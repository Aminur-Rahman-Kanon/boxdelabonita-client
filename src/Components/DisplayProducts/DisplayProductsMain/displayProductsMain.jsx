import React, { useEffect, useState } from 'react';
import './displayProductsMain.css';
import Product from '../Product/product';
import LoadingContainer from '../LoadingContainer/loadingContainer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import HeadingContainer from '../HeadingContainer/headingContainer';
import ProductSlider from '../../ProductSlider/productSlider';

const DisplayProducts = ({ productsType }) => {

    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 2000 })
        setIsLoading(true);
        fetch(`https://boxdelabonita-server-13dd.onrender.com/fetch-products/${productsType}`)
        .then(res => res.json())
        .then(data => {
            if (data.data){
                setProducts(data.data.product);
                setIsLoading(false);
            }
        })
        .catch(err => {
            setIsLoading(false);
            console.log(err);
        });
        console.log('display product main');
    }, []);

    let displayProducts;
    
    if (products.length){
        displayProducts = products.map(item => <Product key={item._id} product={item}/>)
    }
    else if (isLoading) {
        displayProducts = Array.from(Array(6)).map((item, idx) => <LoadingContainer key={idx}/>)
    }
    else {
        displayProducts = <div className="display-products">
            <h3 className="display-products-h3">No Products to display</h3>
        </div>
    }

    console.log(products);

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

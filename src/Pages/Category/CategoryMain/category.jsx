import React, { useEffect, useState } from 'react';
import styles from './category.module.css';
import { useParams } from 'react-router-dom';
import Heading from '../Heading/heading';
import Product from '../Product/product';
import Loader from '../../../Components/DisplayProduct/Loader/loader';
import FilterProducts from '../FilterProducts/FilterProductsMain/filterProducts';

const Category = () => {

    const params = useParams();

    const [product, setProduct] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (params.categoryId){
            setIsLoading(true);
            fetch(`https://boxdelabonita-server-13dd.onrender.com/fetch-products/${params.categoryId}`)
            .then(res => res.json())
            .then(data => {
                if (data.length){
                    setProduct(data);
                    setIsLoading(false);
                }
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err);
            });
        }
    }, [params])

    if (!params.categoryId) return;

    let displayProduct = null;

    if (product.length){
        displayProduct = product.map(item => <Product key={item._id} product={item} />)
    }
    else if (isLoading){
        displayProduct = Array.from(Array(6)).map((item, idx) => <Loader key={idx} />)
    }
    else {
        displayProduct = <h2>Nothing to display</h2>
    }

    return (
        <div className={styles.categoryContainer}>
            <Heading heading={params.categoryId}/>
            <FilterProducts />
            <div className={styles.productDisplayContainer}>
                {displayProduct}
            </div>
        </div>
    )
}

export default Category

import React, { useEffect, useState } from 'react';
import styles from './category.module.css';
import { useParams } from 'react-router-dom';
import Heading from '../Heading/heading';
import Product from '../Product/product';
import Loader from '../Loader/loader';
import FilterProducts from '../FilterProducts/FilterProductsMain/filterProducts';

const Category = () => {

    const params = useParams();

    const [product, setProduct] = useState([]);

    const [filteredProduct, setFilteredProduct] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [filter, setFilter] = useState({
        price: 'Please Select',
        color: 'Please Select',
        discount: false,
        specialOffer: false,
        isFilter: false
    })

    const filterValue = {
        price: filter.price,
        color: filter.color,
        discount: filter.discount,
        specialOffer: filter.specialOffer
    }

    useEffect(() => {
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
    }, [params.categoryId]);

    useEffect(() => {
        let filteredItem = [];
        if (filter.price !== 'Please Select'){
            const filtered = product.filter(item => {
                const totalPrice = item.price.originalPrice - item.price.discountedPrice;
                const priceRange = filter.price.split('-').map(item => Number(item));
                if (totalPrice >= priceRange[0] && totalPrice <= priceRange[1]){
                    return item
                }
            });
            filteredItem.push(...filtered);
        }
        else {
            filteredItem = product;
        }
        if (filter.color !== 'Please Select'){
            const filtered = filteredItem.filter(item => Object.values(item.color).includes(filter.color.toLowerCase()))
            filteredItem = [];
            filteredItem.push(...filtered);
        }
        if (filter.discount){
            const filtered = filteredItem.filter(item => item.price.discountedPrice > 0);
            filteredItem = [];
            filteredItem.push(...filtered);
        }
        if (filter.specialOffer){
            const filtered = filteredItem.filter(item => item.specialOffer === true);
            filteredItem = [];
            filteredItem.push(...filtered);
        }
        setFilteredProduct(filteredItem);
    }, [filter])
    
    if (!params.categoryId) return;

    let displayProduct = null;

    if (product.length){
        if (filter.isFilter){
            if (filteredProduct.length){
                displayProduct = filteredProduct.map(item => <Product key={item._id} product={item} />)
            }
            else {
                displayProduct = <h2>Nothing found</h2>
            }
        }
        else {
            displayProduct = product.map(item => <Product key={item._id} product={item} />)
        }
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
            <FilterProducts filters={setFilter} filterValue={filterValue}/>
            <div className={styles.productDisplayContainer}>
                {displayProduct}
            </div>
        </div>
    )
}

export default Category;

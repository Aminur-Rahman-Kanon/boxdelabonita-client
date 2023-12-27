import React, { useEffect, useState } from 'react';
import styles from './category.module.css';
import { useParams } from 'react-router-dom';
import Heading from '../Heading/heading';
import Product from '../Product/product';
import Loader from '../Loader/loader';
import FilterProducts from '../FilterProducts/FilterProductsMain/filterProducts';
import ProductSlider from '../../../Components/ProductSlider/productSlider';

const Category = () => {

    const params = useParams();

    const [product, setProduct] = useState([]);

    const [otherProducts, setOtherProducts] = useState([]);

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
        window.scrollTo(0, 0);
        setIsLoading(true);
        fetch(`https://boxdelabonita-server-13dd.onrender.com/fetch-products/${params.categoryId}`)
        .then(res => res.json())
        .then(data => {
            if (data.data.product){
                setProduct(data.data.product);
                setIsLoading(false);
            }
            if (data.data.others){
                setOtherProducts(data.data.others);
            }
        })
        .catch(err => {
            setIsLoading(false);
            console.log(err);
        });
    }, [params.categoryId]);

    console.log(product);

    useEffect(() => {
        //initialize empty array
        let filteredItem = [];
        if (filter.price !== 'Please Select'){
            //looping through the products
            const filtered = product.filter(item => {
                //calculating the actual price by deducting the discount amount
                const totalPrice = item.price.originalPrice - item.price.discountedPrice;
                //omiting the price range from user input by removing the '-' and convering to nunber
                const priceRange = filter.price.split('-').map(item => Number(item));
                //then checking if the product price fall between the price rannge
                if (totalPrice >= priceRange[0] && totalPrice <= priceRange[1]){
                    //if product price fall between the price range then return the product
                    return item
                }
            });
            //and pushing the product into the product array
            filteredItem.push(...filtered);
        }
        else {
            //if price range is not selected then return the product array
            filteredItem = product;
        }
        //if color is selected for filtering
        if (filter.color !== 'Please Select'){

            const filtered = filteredItem.filter(item => item.color.includes(filter.color))
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
    let displayOtherProducts = [];

    if (product.length){
        if (filter.isFilter){
            if (filteredProduct.length){
                displayProduct = filteredProduct.map(item => <Product key={item._id} product={item} relatedProduct={false}/>)
            }
            else {
                displayProduct = <h2>Nothing found</h2>
            }
        }
        else {
            displayProduct = product.map(item => <Product key={item._id} product={item} relatedProduct={false} />)
        }
    }
    else if (isLoading){
        displayProduct = Array.from(Array(6)).map((item, idx) => <Loader key={idx} />)
    }
    else {
        displayProduct = <h2>Nothing to display</h2>
    }

    if (otherProducts.length){
        displayOtherProducts = otherProducts.map((item, idx) => <Product id={idx} product={item} relatedProduct={true} />)
    }

    return (
        <div className={styles.categoryContainer}>
            <Heading heading={params.categoryId}/>
            <FilterProducts filters={setFilter} filterValue={filterValue}/>
            <div className={styles.productDisplayContainer}>
                {displayProduct}
            </div>
            <div className={styles.otherProductsContainer} style={otherProducts.length ? {display: 'flex'} : {display: 'none'}}>
                <h2 className={styles.othersH2}>You May Also Like</h2>
                <div className={styles.otherProducts}>
                    <ProductSlider products={displayOtherProducts} />
                </div>
            </div>
        </div>
    )
}

export default Category;

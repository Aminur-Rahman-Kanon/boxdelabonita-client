import React, { useEffect, useState, useContext } from 'react';
import ContextApi from '../../../Components/ContextApi/contextApi';
import styles from './category.module.css';
import { useParams } from 'react-router-dom';
import Heading from '../Heading/heading';
import Product from '../Product/product';
import Loader from '../Loader/loader';
import FilterProducts from '../FilterProducts/FilterProductsMain/filterProducts';
import ProductSlider from '../../../Components/ProductSlider/productSlider';
import { subCategory } from '../../../Data/data';
import NotFound from '../../../Components/NotFound/notFound';

const Category = () => {

    const context = useContext(ContextApi);

    const products = context.product;

    const params = useParams();

    const [product, setProduct] = useState([]);

    const [otherProducts, setOtherProducts] = useState([]);

    const [filteredProduct, setFilteredProduct] = useState([]);


    const [filter, setFilter] = useState({
        price: 'Please Select',
        color: 'Please Select',
        discount: false,
        specialOffer: false,
        isFilter: false
    })

    // const filterValue = {
    //     price: filter.price,
    //     color: filter.color,
    //     discount: filter.discount,
    //     specialOffer: filter.specialOffer
    // }

    //this hook filter products according to the params.categoryId and store values to the product state variable
    //additionally, it scrolls to the top 
    useEffect(() => {
        window.scrollTo(0, 0);
        if (products.data && params.categoryId) {
            if (subCategory.includes(params.categoryId)){
                console.log(params.categoryId);
                if (params.categoryId === 'all bags'){
                    setProduct(products.data);
                }
                else {
                    const filteredItem = products.data.filter(item => item.subCategory === params.categoryId);
                    setProduct(filteredItem);
                }
            }
            else {
                const filterdItem = products.data.filter(item => item.category === params.categoryId);
                setProduct(filterdItem);
            }
        }
    }, [params.categoryId, products.data]);

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
            //filtering the item color with the user input color
            const filtered = filteredItem.filter(item => item.color.includes(filter.color.toLowerCase()));
            //empty up the filteredItem array
            filteredItem = [];
            //and then push filtered items to the filteredItem array
            filteredItem.push(...filtered);
        }
        //if discount is selected
        if (filter.discount){
            //checking whether item has discount property or not
            const filtered = filteredItem.filter(item => item.price.discountedPrice > 0);
            //empty up the filterdItem array
            filteredItem = [];
            //and then push the filtered items to filteredItem array
            filteredItem.push(...filtered);
        }
        //if special offer is selected
        if (filter.specialOffer){
            //checking whether item has special offer property or not
            const filtered = filteredItem.filter(item => item.specialOffer === true);
            //empty up the filteredItem array
            filteredItem = [];
            //and then push the items to the filteredItem array
            filteredItem.push(...filtered);
        }
        //finally, we store the filtered items to the filteredProducts state variable
        //from where we can loop through the items and display those to the user
        setFilteredProduct(filteredItem);
    }, [filter])
    
    //we are checking whether url contains the url param 'categoryId' or not
    //if no categoryId in url param then we dont want the component to be rendered
    if (!params.categoryId) return;

    //declaring a variable with a value null so we can later use this variable to show the product to the display
    let displayProduct = null;
    //declaring a variable with a value null so we can later use this variable to show the product to the display
    let displayOtherProducts = null;

    //if products array contains item
    if (product.length){
        //if user select any of the filter property
        if (filter.isFilter){
            //if filterProduct array contains item
            if (filteredProduct.length){
                //then we loop through items and show those to the display
                displayProduct = filteredProduct.map(item => <Product key={item._id} product={item} relatedProduct={false}/>)
            }
            else {
                //otherwise show nothing found to the dsiplay
                displayProduct = <h2>Nothing found</h2>
            }
        }
        else {
            //if no filter properties are selected
            displayProduct = product.map(item => <Product key={item._id} product={item} relatedProduct={false} />)
        }
    }
    //while the fetching process is pending
    else if (products.isLoading){
        //then loop through and show some loader to the display
        displayProduct = Array.from(Array(6)).map((item, idx) => <Loader key={idx} />)
    }
    else {
        //if data fetching is complete and no data found then this to the display
        displayProduct = <NotFound text={"No Product Found"}/>
    }

    //if otherProducts array contains data then show those to the display
    if (otherProducts.length){
        displayOtherProducts = otherProducts.map((item, idx) => <Product id={idx} product={item} relatedProduct={true} />)
    }

    return (
        <div className={styles.categoryContainer}>
            <Heading heading={params.categoryId}/>
            <FilterProducts filters={setFilter} filterValue={filter}/>
            <div className={styles.productDisplayContainer} style={!product.length ? {display: 'flex', justifyContent: 'center', alignItems: 'center'} : {display: 'grid'}}>
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

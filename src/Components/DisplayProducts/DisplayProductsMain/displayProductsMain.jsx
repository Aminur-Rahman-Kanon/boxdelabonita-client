import React, { useEffect, useState } from 'react';
import './displayProductsMain.css';
import Product from '../Product/product';
import LoadingContainer from '../LoadingContainer/loadingContainer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import HeadingContainer from '../HeadingContainer/headingContainer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
                setProducts(data.data);
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'linear',
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    };

    const SliderComponent = () => {
        return <Slider {...settings}>
            {displayProducts}
        </Slider>
    }

    return (
        <div className="display-products-main">
            <div className="display-products-container">
                <HeadingContainer type={productsType}/>
                <div className="display-product">
                    <SliderComponent />
                </div>
            </div>
        </div>
    )
}

export default DisplayProducts;

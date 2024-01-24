import React, { useContext, useEffect, useState } from "react";
import styles from './landingPage.module.css';
import ContextApi from "../../Components/ContextApi/contextApi";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faRotateLeft, faClock } from '@fortawesome/free-solid-svg-icons';
import ProductSlider from "../../Components/ProductSlider/productSlider";
import Product from '../../Components/DisplayProducts/Product/product';
import Aos from "aos";
import 'aos/dist/aos.css';

const LandingPage = () => {
    const context = useContext(ContextApi);
    const product = context.product.data ? context.product.data : [];
    const { productId } = useParams();
    
    const [ productObj, setProductObj ] = useState({});
    const [otherProducts, setOtherProduct] = useState([]);
    //this hook initiate the Aos so elements in this compoent can use Aos dist
    useEffect(() => {
        Aos.init({ duration: 2000, once:true });
    });
    //this hook store the product to the productObj variable that the user want to visit from the context and all other products to the otherProducts variable
    useEffect(() => {
        //if there is product in the context
        if (product.length){
            //making a deep copy of the product object from context so we can manipulate
            const copiedProductObj = JSON.parse(JSON.stringify(product));
            //we get the index of the product from the copiedProductObj array
            const prdIndex = copiedProductObj.findIndex(prd => prd.title === productId);
            //if there is product
            if (prdIndex >= 0){
                //we take out the product from the copiedProductObj array
                const item = copiedProductObj.splice(prdIndex, 1);
                //storing the product to the productObj variable
                if (item){
                    setProductObj(item[0]);
                }
                //and store all other products to the otherProduct variable
                setOtherProduct(copiedProductObj);
            }
        }
    }, [product, productId])
    //when there is product then we display it to the screen
    const displaypage = Object.keys(productObj).length ? <div className={styles.displayContentMain}>
        <div className={styles.headingIntro}>
            <div data-aos='fade-left' className={styles.headingIntroImgContainer}>
                <img data-testid='product-main-img' src={productObj.img[0]} alt={productObj.title} className={styles.headingIntroImg} />
            </div>
            <div data-aos='fade-right' className={styles.headingIntroDetails}>
                <h1 className={styles.header1}>{productObj.title}</h1>
                <span className={styles.introDetails}>{productObj.description}</span>
                <div className={styles.colorContainerMain}>
                    <span className={styles.introDetails}>Color:</span>
                    <div className={styles.colorContainer}>
                        {productObj.color.map((clr, idx) => <span key={idx} className={styles.color} style={{backgroundColor: `${clr}`}}></span>)}
                    </div>
                </div>
                <div className={styles.deliveryContainer}>
                    <span className={styles.introDetails}>Deliveries:</span>
                    <div className={styles.deliveryAddressGroup}>
                        <span className={styles.deliveryDetails}>Inside Dhaka: &#2547;80</span>
                        <span className={styles.deliveryDetails}>Outside Dhaka: &#2547;150</span>
                    </div>
                </div>
                <div className={styles.linkContainer}>
                    <Link to={`/bag/${productObj.category}/${productObj.title}`} className={styles.orderNowBtn}>Order Now</Link>
                    <Link to={'/about'} className={styles.orderNowBtn}>Contact Us</Link>
                </div>
            </div>
        </div>
        <div className={styles.middlePartContainer}>
            <div data-aos='fade-down-right' className={styles.middlePart}>
                <FontAwesomeIcon icon={faTruck} className={styles.middlePartIcon}/>
                <h3 className={styles.middlePartH3}>Easy Shipping</h3>
                <span className={styles.middlePartDetails}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis illum incidunt</span>
            </div>
            <div data-aos='fade-down-right' className={styles.middlePart}>
                <FontAwesomeIcon icon={faRotateLeft} className={styles.middlePartIcon}/>
                <h3 className={styles.middlePartH3}>Easy Return</h3>
                <span className={styles.middlePartDetails}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis illum incidunt</span>
            </div>
            <div data-aos='fade-down-right' className={styles.middlePart}>
                <FontAwesomeIcon icon={faClock} className={styles.middlePartIcon}/>
                <h3 className={styles.middlePartH3}>24/7 Support</h3>
                <span className={styles.middlePartDetails}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
        </div>
        <div className={styles.aboutProductContainer}>
            <div data-aos='fade-right' className={styles.aboutImgContainer}>
                <img src={productObj.img[1]} alt={productObj.title} className={styles.aboutImg} />
            </div>
            <div data-aos='fade-left' className={styles.aboutDetailsContainer}>
                <h2 className={styles.aboutHeader}>About {productObj.title}</h2>
                <span className={styles.aboutPara}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed dui mollis, finibus odio eget, cursus nibh. Ut accumsan, ipsum a hendrerit tempor, ex tortor consectetur tortor, at viverra leo enim at tortor. Mauris tristique purus purus, sit amet tempor lacus suscipit at. Quisque tristique orci magna, vitae tincidunt lacus maximus vitae. Lorem ipsum dolor sit amet, consectetur.
                </span>
                <ul className={styles.aboutListContainer}>
                    <li className={styles.aboutList}>Nunc quis justo sed odio scelerisque.</li>
                    <li className={styles.aboutList}>Nunc quis justo sed odio scelerisque.</li>
                    <li className={styles.aboutList}>Nunc quis justo sed odio scelerisque.</li>
                </ul>
                <Link to={'/'} className={styles.aboutLink}>Learn More</Link>
            </div>
        </div>
        <div className={styles.galleryContainer}>
            <h2 className={styles.galleryHeading1}>Product Gallery</h2>
            <div className={styles.galleryImgs}>
                {productObj.img.map((img, idx) => <div key={idx} data-aos='zoom-in-up' className={styles.galleryImgContainer}>
                    <img src={img} alt={productObj.title} className={styles.galleryImg}/>
                </div>)}
            </div>
        </div>
    </div>
    :
    //loader
    <div>

    </div>
    //displaying other products
    const displayOtherProducts = otherProducts.length ? otherProducts.map((prd, idx) => <Product key={idx} product={prd}/>)
    :
    <div>
        <h2>No Product to Display</h2>
    </div>

    return (
        <div className={styles.landingPageMain}>
            {displaypage}
            <div className={styles.otherProductContainer}>
                <h2 className={styles.otherProductHeading}>Our Other Products</h2>
                <div className={styles.otherProductsSlider}>
                    <ProductSlider products={displayOtherProducts}/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;

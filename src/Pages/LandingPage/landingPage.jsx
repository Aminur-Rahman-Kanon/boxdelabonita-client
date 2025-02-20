import React, { useContext, useEffect, useState } from "react";
import styles from './landingPage.module.css';
import ContextApi from "../../Components/ContextApi/contextApi";
import Spinner from "../../Components/Spinner/spinner";
import LandingPageContainer from "./landingPageContainer/landingPageContainer";

const LandingPage = () => {
    const { product } = useContext(ContextApi);

    const isLoading = true;

    const display = product.isLoading ? <div className={styles.container}>
        <Spinner spinner={isLoading}/>
    </div>
    :
    <div className={styles.container}>
        {product.data ? <LandingPageContainer products={product.data}/> : <h2 className={styles.headingMediumBlack}>Nothing to display</h2>}
    </div>

    return (
        <div className={styles.wrapper}>
            {display}
        </div>
    )
}

export default LandingPage;

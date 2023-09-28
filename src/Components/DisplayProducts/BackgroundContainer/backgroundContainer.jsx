import React, { useEffect } from 'react';
import styles from './backgroundContainer.module.css';
import tem1 from '../../../Assets/Others/tem1.png';
import tem2 from '../../../Assets/Others/tem2.png';
// import tem3 from '../../../Assets/Others/tem3.jpg';
// import tem4 from '../../../Assets/Others/tem4.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const BackgroundContainer = ({type, row}) => {

    useEffect(() => {
        Aos.init({ duration: 2600 });
    }, [])

    let img;

    if (type === 'new-arrivals'){
        img = tem1;
    }

    else if (type === 'trending-products'){
        img = tem2;
    }

    else if (type === 'top-sellers'){
        img = tem1;
    }

    return (
        <div data-aos={row === 'normal' ? "fade-right" : "fade-left"}
             className={styles.backgroundContainer}>
            <img src={img} alt="" className={styles.backgroundImg}/>
        </div>
    )
}

export default BackgroundContainer;

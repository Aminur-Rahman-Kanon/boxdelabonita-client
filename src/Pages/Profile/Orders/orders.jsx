import React, { useEffect, useState } from 'react';
import styles from './orders.module.css';

const Orders = ({ user }) => {

    const email = user.user ? user.user.email : undefined;

    const [orders, setOrders] = useState({});

    useEffect(() => {
        fetch('https://boxdelabonita-server-13dd.onrender.com/fetch-placed-orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success'){
                setOrders(data.data);
            }
        })
        .catch(err => console.log(err));
    }, []);

    const displayOrders = orders._id ? <div className={styles.displayOrderContainer}>
        <div className={styles.displayHeader}>
            <span className={styles.orderId}>Order Id: {orders.orderInfo.orderId}</span>
            <span className={styles.orderId}>Purchase Date: {orders.orderInfo.date}</span>
        </div>
        <hr className={styles.hr}/>
        <div className={styles.productContainer}>
            {Object.values(orders.products).map(item => <div key={item.title} className={styles.product}>
                <div className={styles.productImgContainer}>
                    <img src={item.img} alt={item.title} className={styles.productImg}/>
                </div>
                <div className={styles.productDetailsContainer}>
                    <span className={styles.details}>{item.title}</span>
                    <div className={styles.details}>Color: {item.color.map(clr => <span key={clr} className={styles.color} style={{backgroundColor: `${clr}`}}></span>)}</div>
                    <span className={styles.details}>Quantity: {item.quantity}</span>
                    <span className={styles.details}>Price: {item.price}</span>
                </div>
            </div>)}
        </div>
        <hr className={styles.hr}/>
        <div className={styles.displayFooter}>
            <div className={styles.footerItem}>
                <h4 className={styles.footerHeading4}>Payment Method</h4>
                <span className={styles.details}>{orders.orderInfo.paymentMethod}</span>
            </div>
            <div className={styles.footerItem}>
                <h4 className={styles.footerHeading4}>Delivery to:</h4>
                <span className={styles.details}>{orders.customerInfo.name}</span>
                <span className={styles.details}>{orders.customerInfo.address}</span>
                <span className={styles.details}>{orders.customerInfo.city}</span>
                <span className={styles.details}>{orders.customerInfo.area}</span>
            </div>
        </div>
    </div>
    :
    <div>
        <h3>No Orders</h3>
    </div>

    return (
        <div className={styles.ordersContainer}>
            {displayOrders}
        </div>
    )
}

export default Orders

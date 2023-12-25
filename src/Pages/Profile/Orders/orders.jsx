import React, { useEffect, useState } from 'react';
import styles from './orders.module.css';

const Orders = ({ user }) => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user.length){
            setOrders(user);
        }
    }, [user]);

    const displayOrders = orders.length ? orders.map((items, idx) => {
        let grandTotal = 0;
        return <div key={idx} className={styles.displayOrderContainer}>
            <div className={styles.idContainer}>
                <span className={styles.id}>{idx+1}</span>
            </div>
            <div className={styles.displayHeader}>
                <span className={styles.orderId}>Order Id: {items.orderInfo.orderId}</span>
                <span className={styles.orderId}>Purchase Date: {items.orderInfo.dateTime}</span>
                <div className={styles.orderStatusContainer}>
                    <span className={styles.orderId} style={{textTransform: 'capitalize'}}>Order Status:</span>
                    <span className={`${styles.orderStatus} ${styles[items.orderInfo.orderStatus]}`}>{items.orderInfo.orderStatus ? items.orderInfo.orderStatus : 'No information'}</span>
                </div>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.productContainer}>
                {Object.values(items.products).map(item => {
                    grandTotal += item.quantity * item.price;
                    return <div key={item._id} className={styles.product}>
                        <div className={styles.productImgContainer}>
                            <img src={item.product.img} alt={item.title} className={styles.productImg}/>
                        </div>
                        <div className={styles.productDetailsContainer}>
                            <span className={styles.details}>{item.title}</span>
                            <div className={styles.details}>Color: {item.color.map(clr => <span key={clr} className={styles.color} style={{backgroundColor: `${clr}`}}></span>)}</div>
                            <span className={styles.details}>Quantity: {item.quantity}</span>
                            <span className={styles.details}>Price: &#2547;{item.price}</span>
                            <span className={styles.details}>Total: &#2547;{item.quantity * item.price}</span>
                        </div>
                    </div>})
                }
            </div>
            <div className={styles.grandTotal}>
                <span className={styles.details}>Delivery Charge: &#2547;{items.orderInfo.deliveryCharge}</span>
                <span className={styles.grandTotalPrice}>Total to Pay: &#2547;{grandTotal + items.orderInfo.deliveryCharge}</span>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.displayFooter}>
                <div className={styles.footerItem}>
                    <h4 className={styles.footerHeading4}>Payment Method</h4>
                    <span className={styles.details}>{items.orderInfo.paymentMethod}</span>
                </div>
                <div className={styles.footerItem}>
                    <h4 className={styles.footerHeading4}>Delivery to:</h4>
                    <span className={styles.details}>{items.customerInfo.name}</span>
                    <span className={styles.details}>{items.customerInfo.address}</span>
                    <span className={styles.details}>{items.customerInfo.city}</span>
                    {/* <span className={styles.details}>{items.customerInfo.area}</span> */}
                </div>
            </div>
        </div>
    })
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

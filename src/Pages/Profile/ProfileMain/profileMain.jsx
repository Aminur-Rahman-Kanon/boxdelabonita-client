import React, { useEffect, useState } from "react";
import styles from './profileMain.module.css';
import Avatar from "../Avatar/avatar";
import ProfileNavigation from "../ProfileNavigation/profileNavigation";
import UserDetails from "../UserDetails/userDetails";
import Address from "../Address/address";
import ChangePassword from "../ChangePassword/changePassword";
import Orders from "../Orders/orders";
import { useParams } from 'react-router-dom';
import { fetchUser } from "../../../Utilities/utilities";

//this component display all the user information such as name, address and orders
//this component renders on 2 routes: 1. where user visit the profile url and
//2. where user place an order. in this case user are redirected here programmatically
const ProfileMain = () => {
    const params = useParams();
    const [userData, setUserData] = useState([]);
    const [formType, setFormType] = useState('user-information');

    //this hook execute on component mount and user are redirected here due to placing order
    useEffect(() => {
        //when user's are redirected here then the url contains a track property and value in it 
        //then this executes
        if (params.track && params.phone){
            //navigate to the orders section of this page
            setFormType('orders')
            //make a http request
            fetch(`https://boxdelabonita-server-13dd.onrender.com/fetch-cart-item/${params.phone}`)
            .then(res => res.json())
            .then(data => {
                setUserData(data.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
        const user = fetchUser();
        setUserData(user);
    }, []);

    return (
        <div className={styles.profileMainContainer}>
            <div className={styles.avatarMain}>
                <Avatar user={userData} />
            </div>
            <div className={styles.panelContainer}>
                <div className={styles.panel}>
                    <ProfileNavigation changeFormType={setFormType}/>
                </div>
                <div className={styles.detailsContainer}>
                    <div className={styles.details} style={formType === 'user-information' ? {display: 'block'} : {display: 'none'}}>
                        <UserDetails user={userData} />
                    </div>
                    <div className={styles.details} style={formType === 'address' ? {display: 'block'} : {display: 'none'}}>
                        <Address user={userData} />
                    </div>
                    <div className={styles.details} style={formType === 'change-password' ? {display: 'block'} : {display: 'none'}}>
                        <ChangePassword user={userData} />
                    </div>
                    <div className={styles.details} style={formType === 'orders' ? {display: 'block'} : {display: 'none'}}>
                        <Orders user={userData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileMain;

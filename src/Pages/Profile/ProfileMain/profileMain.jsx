import React, { useEffect, useState } from "react";
import styles from './profileMain.module.css';
import Avatar from "../Avatar/avatar";
import ProfileNavigation from "../ProfileNavigation/profileNavigation";
import UserDetails from "../UserDetails/userDetails";
import Address from "../Address/address";
import ChangePassword from "../ChangePassword/changePassword";
import Orders from "../Orders/orders";

const ProfileMain = () => {

    const [userData, setUserData] = useState({});
    const [loggedInUser, setLoggedInUser] = useState({});

    const [formType, setFormType] = useState('user-information');

    useEffect(() => {
        fetch('https://boxdelabonita-server-13dd.onrender.com/fetch-cart-item')
        .then(res => res.json())
        .then(data => {
            if (data.data.deviceId){
                setUserData(data.data);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div className={styles.profileMainContainer}>
            <div className={styles.avatarMain}>
                <Avatar user={userData.user} />
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
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProfileMain;

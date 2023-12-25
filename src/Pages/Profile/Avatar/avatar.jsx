import React, { useEffect, useState } from 'react';
import styles from './avatar.module.css';
import avatar from '../../../Assets/Others/user.jpg';

const Avatar = ({ user }) => {

    const [name, setName] = useState('Guest');

    useEffect(() => {
        if (user.length){
            const userName = user.at(-1).customerInfo.name;
            setName(userName);
        }
    }, [user])

    return (
        <div className={styles.avatarContainer}>
            <div className={styles.avatarIconContainer}>
                <img src={avatar} alt="avatar" className={styles.avatar} />
            </div>
            <div className={styles.avatarDetailsContainer}>
                <span className={styles.name}>
                    {name}
                </span>
            </div>
        </div>
    )
}

export default Avatar;

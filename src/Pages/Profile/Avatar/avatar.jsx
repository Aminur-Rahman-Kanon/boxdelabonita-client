import React from 'react';
import styles from './avatar.module.css';
import avatar from '../../../Assets/Others/user.png';

const Avatar = ({ user }) => {
    return (
        <div className={styles.avatarContainer}>
            <div className={styles.avatarIconContainer}>
                <img src={avatar} alt="avatar" className={styles.avatar} />
            </div>
            <div className={styles.avatarDetailsContainer}>
                <span>
                    {user ? `${user.firstName} ${user.lastName}` : 'Guest'}
                </span>
            </div>
        </div>
    )
}

export default Avatar;

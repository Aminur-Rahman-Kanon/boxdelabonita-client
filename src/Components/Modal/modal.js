import React from 'react';
import ReactDom from 'react-dom';
import styles from './modal.module.css';

const Modal = ({ modal, children }) => {
    //if modal is false then abort
    if (!modal) return modal;

    return ReactDom.createPortal(
    <div className={styles.modal}>
        {children}
    </div>,
    document.getElementById('portal'));
}

export default Modal;

import React from 'react';
import logo from '../../Assets/Logo/logo.png';

function Logo({width}) {

    const logoContainer = {
        textDecoration: 'none',
        width: width,
        padding: '5px',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const logoImg = {
        width: '100%'
    }

    return (
        <a data-testid='logo' href="/" style={logoContainer}>
            <img src={logo} alt="boxdelabonita" style={logoImg} />
        </a>
    )
}

export default Logo

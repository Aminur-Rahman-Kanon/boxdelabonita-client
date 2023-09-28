import React from 'react';

const style = {
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '300',
    backgroundColor: '#00000061'
}

const Backdrop = ({ backdrop, closeBackdrop }) => {
    if (!backdrop) return;
    return (
        <div style={style} onClick={closeBackdrop}>
        
        </div>
    )
}

export default Backdrop;

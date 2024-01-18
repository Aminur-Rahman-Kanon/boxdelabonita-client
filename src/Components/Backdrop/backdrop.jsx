import React from 'react';

//styles for backdrop component
const style = {
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '400',
    backgroundColor: '#3838388a'
}

const Backdrop = ({ backdrop, closeBackdrop }) => {
    if (!backdrop) return;
    return (
        <div data-testid='backdrop' style={style} onClick={closeBackdrop}>
        
        </div>
    )
}

export default Backdrop;

// ClickExample.jsx
import React from 'react';

const ClickExample = () => {
    const handleClick = () => {
        alert('¡Botón presionado!');
    };

    return (
        <button onClick={handleClick}>
            Click
        </button>
    );
};

export default ClickExample;

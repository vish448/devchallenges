import React from 'react';

const Button = ({color, 
    disabled, 
    icon_back, 
    icon_front,
    name,
    onClick, 
    size, 
    text,
    type,
    value,
    variant } ) => {
    return (
        
        <button>
         {text}
        </button>
    )
}

export default Button
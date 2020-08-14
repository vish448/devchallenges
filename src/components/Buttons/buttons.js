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
    variant,
    shadow} ) => {
    return (
        <button 
            className={`btn ${name} ${shadow}`}
            color= {color}
            >
         {text}
        </button>
    )
}

export default Button
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
    disabledshadow,
    title} ) => {
    return (
        <button 
            className={`btn ${name} ${color}`}
            disabledshadow = {disabledshadow}
            variant={variant}
            onClick= {onClick}
            title={title}
            disabled={disabled}
            >
         {text}
        </button>
    )
}

export default Button
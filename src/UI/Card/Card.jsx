import React from 'react'
import './Card.css';

const Card = ({ children, className = "", style, onClick, selected = false }) => {
    return (
        <div 
            className={`Card ${className} ${selected && 'selected'}`} 
            style={style}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default Card;
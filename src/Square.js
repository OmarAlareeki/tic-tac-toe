import React from 'react'
import './App.css';

const Square = ({value, onClick}) => {

    return (
        <div>
            <button className="square" onClick={onClick}>
            {value}
            </button>
        </div>
    )
}

export default Square;

import React from 'react';
import './TextBox.css';

const TextBox = ({text}) => {
    return(
        <div className='textBox'>
            <p>{text}</p>
        </div>
    );  
};

export default TextBox;
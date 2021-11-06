import React from 'react';
import './TextCard.css'

const TextCard = ({text}) => {
    return(
        <div className='card pa3 f2 white'>
           <h>{text}</h> 
        </div>
    );  
};

export default TextCard;
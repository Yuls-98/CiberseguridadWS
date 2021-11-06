import React from 'react';
import './TitleCard.css'

const TitleCard = ({text}) => {
    return(
        <div className='card pa3 f1 white'>
           <h>{text}</h> 
        </div>
    );  
};

export default TitleCard;
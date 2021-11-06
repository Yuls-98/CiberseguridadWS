import React from 'react';

const Container = (props) => {
    return (
        <div className='pt4 flex-row'>
            {props.children}
        </div>
    );
}

export default Container;
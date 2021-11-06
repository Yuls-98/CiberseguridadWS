import React, { Component } from 'react';

class Button extends Component {
    GoTo = () => {
        window.location.href = "https://forms.gle/K89rovKhrUTg5C127";
    }

    render(){
        return (
            <div className='pt4'>
                <button onClick={this.GoTo} 
                    className='f4 grow no-underline br-pill ph3 pv2 mb2 bw0 dib white bg-dark-green'
                    style={{cursor: 'pointer'}}
                >
                    Responder encuesta
                </button>
            </div>
        );
    }
}

export default Button;
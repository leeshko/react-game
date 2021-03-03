import '../css/button.css';
import React from 'react';


export default function StartButton(props) {
    
    return (
      <a className="buttonLink" href="#" onClick={props.onClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        
        {props.name}
      </a>
    )
}



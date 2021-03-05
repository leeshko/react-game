import '../css/button.css';
import React from 'react';


export default function StartButton(props) {
    
    return (
      <button className="buttonLink"  onClick={props.onClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        
        {props.name}
      </button>
    )
}



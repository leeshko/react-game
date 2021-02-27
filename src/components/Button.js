import '../css/button.css';
import React from 'react';


export default function StartButton(props) {
    
    return (
        <a href={props.link}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        
        {props.name}
      </a>
    )
}



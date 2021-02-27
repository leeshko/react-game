// import '../css/card.css';
import React from 'react';
import s from '../css/card.module.css';


export default function Card(props) {

  return (
    <div className={s.flipcard}>
      <div className={s.front}>
        {props.number}
      </div>
      <div className={s.back}>
        This is the back side
      </div>
    </div>
  )
}



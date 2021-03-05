import React from "react";
import s from "../css/game.module.css";
import logo from '../images/logo.png';


export default function ResultScreen(props) {

    return (
        <div className={s.main}>
            <div className={s.logo}>
            <img className={s.logoimg} src={logo} alt="Logo"></img>
                <span className={s.logoName}>RESULT:  <span>{props.score} pts</span></span>
                <div >
                    
                {props.children}
               

                </div>
            </div>
        
        <div className={s.footer}> 
        </div>
        </div>
    )
}

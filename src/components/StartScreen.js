import logo from "../images/logo.png";
import s from "../css/game.module.css";
import React from "react";

export default function StartScreen(props) {
  return (
    <div className={s.main}>
      <div className={s.logo}>
        <img className={s.logoimg} src={logo} alt="Logo"></img>
        <span className={s.logoName}>Memory Game</span>
        <div className={s.buttons}>{props.children}</div>
      </div>

      <div className={s.footer}>
        <img
          className={s.logoRS}
          src="https://rs.school/images/rs_school_js.svg"
          alt="Logo"
        ></img>
        <a className={s.link} href="https://github.com/leeshko/">
          https://github.com/leeshko/
        </a>
        <span className={s.logoRS}>2021 year</span>
      </div>
    </div>
  );
}

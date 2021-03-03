import logo from '../images/logo.png';
import StartButton from './Button';
import s from '../css/game.module.css';
import React from 'react';
import OptionsScreen from "./OptionsScreen";
import GameScreen from './GameScreen'
import StartScreen from './StartScreen';
import st from '../css/options.module.css';




export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            screen: 1
        };
    }


    handleClick(screen) {
        this.setState({ screen });
    }


    render() {
        const screenNum = this.state.screen;

        if (screenNum === 1) {
            return (
                <StartScreen>
                    <StartButton onClick={() => this.handleClick(2)} name='START' />
                </StartScreen>
            )

        } else if (screenNum === 2) {
            return (
                <OptionsScreen>
                    <StartButton onClick={() => this.handleClick(3)} name='START' />
                </OptionsScreen>
            )

        } else if (screenNum === 3) {
            return (
                <GameScreen>
                    <StartButton onClick={() => this.handleClick(2)} name='START' />
                </GameScreen>
            )
        }
    }

}

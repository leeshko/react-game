import StartButton from "./Button";

import React from "react";
import OptionsScreen from "./OptionsScreen";
import GameScreen from "./GameScreen";
import StartScreen from "./StartScreen";

import ResultScreen from "./ResultScreen";

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screen: 1,
      score: 0,
    };
  }

  handleClick(screen) {
    this.setState({ screen });
  }

  moveToScoreScreen = (score) => {
    this.setState({ screen: 4, score });
  };

  render() {
    const screenNum = this.state.screen;

    if (screenNum === 1) {
      return (
        <StartScreen>
          <StartButton onClick={() => this.handleClick(2)} name="START" />
        </StartScreen>
      );
    } else if (screenNum === 2) {
      return (
        <OptionsScreen>
          <StartButton onClick={() => this.handleClick(3)} name="START" />
        </OptionsScreen>
      );
    } else if (screenNum === 3) {
      return (
        <GameScreen moveToScoreScreen={this.moveToScoreScreen}>
          <StartButton onClick={() => this.handleClick(2)} name="START" />
        </GameScreen>
      );
    } else if (screenNum === 4) {
      return (
        <ResultScreen score={this.state.score}>
          <StartButton onClick={() => this.handleClick(1)} name="START" />
        </ResultScreen>
      );
    }
  }
}

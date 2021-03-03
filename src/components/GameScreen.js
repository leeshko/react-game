import React from "react";
import s from "../css/gameScreen.module.css";
import Card from "./Card";
import randomArray from "../services/CardField";

export default class GameScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstCard: null,
      secondCard: null,
      clicks: 0,
      score: 0
    };
  }

  updateCardList = (index) => {
    if (this.state.clicks === 1) {
        this.setState({ secondCard: index, clicks: 2 });
    } else {
      this.setState({ firstCard: index, secondCard: null, clicks: 1 });
    }
   
  }

  compareResults() {
    if (this.cardsArr[this.state.firstCard] === this.cardsArr[this.state.secondCard]) {
        this.setState({ score: this.state.score + 1 });
    } else {
        /*turn cards*/
    }
  }

  handleClick = () => {
    //   console.log(this.props.cardNum);
    // console.log((this.props.ind));
  };

  cardsArr = randomArray();
  render() {
    return (
      <div className={s.main}>
        <div className={s.cardField} onClick={this.handleClick}>
          {this.cardsArr.map((e, index) => (
            <Card
              key={index}
              cardNum={index}
              number={`../images/cards/${e}.png`}
              ind={e}
              updateCardList={this.updateCardList}
              isOpen={this.state.firstCard === index || this.state.secondCard === index}
            />
          ))}
        </div>
      </div>
    );
  }
}

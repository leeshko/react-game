import React from "react";
import s from "../css/gameScreen.module.css";
import Card from "./Card";
import randomArray from "../services/CardField";


export default class GameScreen extends React.Component {
  cardsArr = randomArray();
  openedCardsArray = new Array(this.cardsArr.length).fill(0);

  constructor(props) {
    super(props);

    this.state = {
      firstCard: null,
      secondCard: null,
      score: 0
    };
  }

  updateCardList = (index) => {
    if (this.state.firstCard !== null && this.state.secondCard === null) {
        this.setState({ secondCard: index });
        this.compareResults(this.state.firstCard, index);
    } else {
      this.setState({ firstCard: index, secondCard: null });
    }
  };

  compareResults(firstIndex, secondIndex) {
    if ( this.cardsArr[firstIndex] === this.cardsArr[secondIndex] ) {
      this.setState({ score: this.state.score + 1 });
      this.openedCardsArray[firstIndex] = 1;
      this.openedCardsArray[secondIndex] = 1;
      if (this.openedCardsArray.indexOf(0) === - 1) {
         
       this.props.moveToScoreScreen(this.state.score);
      }
    }
  }



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
              isOpen={
                this.state.firstCard === index ||
                this.state.secondCard === index || 
                this.openedCardsArray[index] === 1
              }
            />
          ))}
        </div>
      </div>
    );
  }
}

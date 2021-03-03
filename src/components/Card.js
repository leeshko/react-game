import React from "react";
import "../css/card.css";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={"flip-card " + (this.props.isOpen ? " active" : "")}
        onClick={() => {
          this.props.updateCardList(this.props.cardNum);
        }}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              className="frontCard"
              src="../images/cards/back2.png"
              alt="Logo"
            ></img>
          </div>
          <div className="flip-card-back">
            <img className="backCard" src={this.props.number} alt="Logo"></img>
          </div>
        </div>
      </div>
    );
  }
}

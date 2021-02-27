import React from 'react';
import s from '../css/gameScreen.module.css';
import Card from './Card';


const cards = {
    numberOfCards: 8,
    cardBack: 1
}

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
const cardsQuantity = cards.numberOfCards * 2;

let arr = cardsArray(cardsQuantity);
let cardsArr = randomArray(arr);


function cardsArray(num) {
    let numArray = [];
    for (let i = 0; i < num / 2; i++) {
        numArray.push(i);
    }
    return numArray.concat(numArray);
}

function randomArray(array) {
    for (let i = cardsQuantity - 1; i >= 0; i--) {
        let randomIndex = getRandomInt(i);
        let interNum = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = interNum;
    }
    return array;
}



const GameScreen = () => {

    return (
        <div className={s.main}>
            <div className={s.cardField}>
               
             {cardsArr.map(e => <Card number = {e}/>)}     {/*пока не знаю, как задать key={e}*/}
            
            </div>
        </div>
    )
}


export default GameScreen;
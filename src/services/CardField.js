
const cards = {
    numberOfCards: 8,
    cardBack: 1
}

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
const cardsQuantity = cards.numberOfCards * 2;

export default function randomArray() {
    let numArray = [];
    for (let i = 0; i < cardsQuantity / 2; i++) {
        numArray.push(i);
    }
    numArray = numArray.concat(numArray);
        
    for (let i = cardsQuantity - 1; i >= 0; i--) {
        let randomIndex = getRandomInt(i);
        let interNum = numArray[i];
        numArray[i] = numArray[randomIndex];
        numArray[randomIndex] = interNum;
    }
    return numArray;
}






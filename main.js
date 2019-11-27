let cards = [
  { number: 1 },
  { number: 1 },
  { number: 2 },
  { number: 2 },
  { number: 3 },
  { number: 3 },
  // { number: 4 },
  // { number: 4 },
  // { number: 5 },
  // { number: 5 },
  // { number: 6 },
  // { number: 6 },
  // { number: 7 },
  // { number: 7 },
  // { number: 8 },
  // { number: 8 },
  // { number: 9 },
  // { number: 9 },
]

const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
}

let cardFlipped = false;
let countFlipped = 0;

const cardWrapper = document.querySelector('.card-wrapper');
const resetGame = document.querySelector('.reset');

const startGame = () => {
  shuffle(cards);
  resetGame.innerHTML = 'New Game';
  if(cardWrapper.hasChildNodes()) {
    cardWrapper.innerHTML = '';
    cards.forEach(card => {
      const div = document.createElement('div');
      div.innerHTML = card.number;
      div.className = 'card';
      cardWrapper.appendChild(div);
      div.addEventListener('click', flipCard);
    });
  } else {
    cards.forEach(card => {
      const div = document.createElement('div');
      div.innerHTML = card.number;
      div.className = 'card';
      cardWrapper.appendChild(div);
      div.addEventListener('click', flipCard);
    });
  }
}

let firstCardFlipped = false;
let lockBoard = false;
let firstCard;
let secondCard;
let count = 0;

const flipCard = (event) => {
  if (lockBoard) {
    return;
  }

  if (firstCard === event.target) {
    return;
  }

  if (!firstCardFlipped) {
    firstCardFlipped = true;
    console.log('first');
    firstCard = event.target;
    firstCard.classList.add('flipped');
    console.log(firstCard);
    return;
  }

  secondCard = event.target;
  secondCard.classList.add('flipped');
  lockBoard = true;


  setTimeout(()=> {checkForMatch(); }, 500);

  console.log('second');
  console.log(secondCard);
 }

const checkForMatch = () => {
  if (firstCard.innerHTML === secondCard.innerHTML) {
    disableCards();
    console.log('match');
    count++;
    console.log(count);

    resetCards();
    return;
  }
  unflipCards();
}

const disableCards = () => {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  console.log('disabled cards');
}

const unflipCards = () => {
  firstCard.classList.remove('flipped');
  secondCard.classList.remove('flipped');
  resetCards();
}

const resetCards = () => {
  firstCardFlipped = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
  checkIfWon();
}

const checkIfWon = () => {
  if(count === 3) {
    console.log('you won!!!');
    firstCardFlipped = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
    count = 0;
    return;
  }
}

resetGame.addEventListener('click', startGame);
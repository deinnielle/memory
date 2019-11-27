let cards = [
  { number: 1 },
  { number: 1 },
  { number: 2 },
  { number: 2 },
  { number: 3 },
  { number: 3 },
  { number: 4 },
  { number: 4 },
  { number: 5 },
  { number: 5 },
  { number: 6 },
  { number: 6 },
  { number: 7 },
  { number: 7 },
  { number: 8 },
  { number: 8 },
  { number: 9 },
  { number: 9 },
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

let hasFlippedCard = false;

const flipCard = (event) => {
  if (hasFlippedCard === false) {
    hasFlippedCard = true;
    console.log('first');
    firstCard = event.target;
    firstCard.classList.add('flipped');
    firstCard.removeEventListener('click', flipCard);
    console.log(firstCard);
    return;
  }

  secondCard = event.target;
  secondCard.classList.add('flipped');
  hasFlippedCard = false;

  checkForMatch();
  console.log('second');
  console.log(secondCard);
 }

const checkForMatch = () => {
  if (firstCard.innerHTML === secondCard.innerHTML) {
    disableCards();
    console.log('match');
    return;
  }
  unflipCards();
}

const disableCards = () => {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  console.log('test');
}

const unflipCards = () => {
  firstCard.classList.remove('flipped');
  secondCard.classList.remove('flipped');
}

resetGame.addEventListener('click', startGame);
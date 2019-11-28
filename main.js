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

const cardsWrapper = document.querySelector('.cards-wrapper');
const newGame = document.querySelector('.new-game p');

const startGame = () => {
  shuffle(cards);
  newGame.innerHTML = 'New Game';
  if(cardsWrapper.hasChildNodes()) {
    cardsWrapper.innerHTML = '';
    generateCards();
  } else {
    generateCards();
  }
}

const generateCards = () => {
  cards.forEach(card => {
    const div = document.createElement('div');
    div.className = 'flip-card';
    div.innerHTML = createCards(card.number);
    cardsWrapper.appendChild(div);
    div.addEventListener('click', flipCard);
  });
}

const createCards = (number) => {
  return (
    `<div class='flip-card-inner'>
      <div class='flip-card-front'>
        <img src='img/card-front.jpg' alt='Card' data-number='${number}' />
      </div>
      <div class='flip-card-back'>
        <span>${number}</span>
      </div>
    </div>`
  );
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
    console.log(event);

    firstCard = event.target;
    firstCard.offsetParent.offsetParent.classList.add('flipped');
    console.log(firstCard);
    return;
  }

  secondCard = event.target;
  secondCard.offsetParent.offsetParent.classList.add('flipped');
  lockBoard = true;

  setTimeout(()=> {checkForMatch(); }, 500);
  console.log('second');
  console.log(secondCard);
 }

const checkForMatch = () => {
  if (firstCard.dataset.number === secondCard.dataset.number) {
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
  firstCard.offsetParent.offsetParent.classList.remove('flipped');
  secondCard.offsetParent.offsetParent.classList.remove('flipped');
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

newGame.addEventListener('click', startGame);
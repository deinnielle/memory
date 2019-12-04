let firstCardFlipped = false;
let lockBoard = false;
let firstCard;
let secondCard;
let count = 0;

const cards = [];

for (let i = 1; i <= 8; i++) {
  cards.push(
    {number: i},
    {number: i},
  );
}

const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
}

const cardsWrapper = document.querySelector('.cards-wrapper');
const newGame = document.querySelector('.new-game');

const startGame = () => {
  shuffle(cards);
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
    firstCard.offsetParent.offsetParent.classList.add('flip');
    console.log(firstCard);
    return;
  }

  secondCard = event.target;
  secondCard.offsetParent.offsetParent.classList.add('flip');
  lockBoard = true;
  setTimeout(() => {
    checkForMatch();
  }, 500);

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
  resetCards();
  console.log('disabled cards');
}

const unflipCards = () => {
  firstCard.offsetParent.offsetParent.classList.remove('flip');
  secondCard.offsetParent.offsetParent.classList.remove('flip');
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
  if (count === 8) {
    console.log('you won!!!');
    cardsWrapper.innerHTML = '';
    cardsWrapper.innerHTML = '<img src="img/winner.gif" alt="You won!">';
    firstCardFlipped = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
    count = 0;
    return;
  }
}

window.onload = startGame();
newGame.addEventListener('click', startGame);
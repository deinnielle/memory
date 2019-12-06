'use strict';

const cardsWrapper = document.querySelector('.cards-wrapper');
const easy = document.querySelector('.new-game.easy');
const medium = document.querySelector('.new-game.medium');
const hard = document.querySelector('.new-game.hard');
const crazy = document.querySelector('.new-game.crazy');
const counter = document.querySelector('.counter');

const fail = new Audio('audio/fail.mp3');
const win = new Audio('audio/win.mp3');
const match = new Audio('audio/match.mp3');

let cards = [];
let firstCardFlipped = false;
let lockBoard = false;
let firstCard;
let secondCard;
let clicks = 0;
let matchCount = 0;
let board;

const startGame = (event) => {
  win.pause();
  win.currentTime = 0;
  counter.innerHTML = '';

  if (event) {
    board = event.target.dataset.board;
    console.log(board);

  } else {
    board = 8;
  }

  for (let i = 1; i <= board; i++) {
    cards.push(
      {number: i},
      {number: i},
    );
  }

  shuffle(cards);

  if(cardsWrapper.hasChildNodes()) {
    cardsWrapper.innerHTML = '';
    generateCards();
  } else {
    generateCards();
  }
  cards = [];
}

const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
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
        <p>${number}</p>
      </div>
    </div>`
  );
}

const flipCard = (event) => {
  clicks++;
  console.log(event);

  if (clicks > 0) {
    counter.innerHTML = `Clicks: ${clicks}`;
  }

  if (lockBoard) {
    return;
  }

  if (event.target.className === 'flip-card-back' || event.target.tagName === 'P') {
    console.log('hej');
    return;
  }

  if (!firstCardFlipped) {
    firstCardFlipped = true;
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
}

const checkForMatch = () => {
  if (firstCard.dataset.number === secondCard.dataset.number) {
    disableCards();
    console.log('match');
    matchCount++;
    resetCards();
    match.play();
    return;
  }
  unflipCards();
  fail.play();
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
  if (matchCount == board) {
    console.log('you won!!!');
    cardsWrapper.innerHTML = '';
    cardsWrapper.innerHTML = (
      `<div class="win">
        <img src="img/winner.gif" alt="You won!">
      </div>`
    );
    firstCardFlipped = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
    matchCount = 0;
    clicks = 0;
    win.play();
    return;
  }
}

window.onload = startGame();

easy.addEventListener('click', startGame);
medium.addEventListener('click', startGame);
hard.addEventListener('click', startGame);
crazy.addEventListener('click', startGame);
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
    // must add so you cant click on firstcard twice
    // firstCard.removeEventListener('click', flipCard);
    console.log(firstCard);

    return;
  }

  // if(firstCard)

  secondCard = event.target;
  secondCard.classList.add('flipped');
  hasFlippedCard = false;

  checkForMatch();
    console.log('second');
  console.log(secondCard);

    // if (firstCard.offsetLeft != event.target.offsetLeft && firstcard.offsetTop !=  event.target.offsetTop ) {
    //   console.log('hej');
    //   secondCard.classList.add('flipped');
    //   hasFlippedCard = false;

    //   checkForMatch();
    // }










 }

//Add disable card before checkmatch

  const checkForMatch = () => {
    if (firstCard.innerHTML === secondCard.innerHTML) {
      console.log(firstCard);

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


// cardWrapper.addEventListener('click', flipCard);

resetGame.addEventListener('click', startGame);

// firstCard.classList
// DOMTokenList(2) ["card", "flipped", value: "card flipped"]length: 2value: "card flipped"0: "card"1: "flipped"__proto__: DOMTokenList

  //  if (hasFlippedCard === false && firstCard.classList.value === 'card flipped' && secondCard.classList.value === 'card flipped') {
  //     console.log('won');

  //   }

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
    });
  } else {
    cards.forEach(card => {
      const div = document.createElement('div');
      div.innerHTML = card.number;
      div.className = 'card';
      cardWrapper.appendChild(div);
    });
  }
}


// let cardFlipped = false;


// const flipCard = () => {

//   if (!hasFlippedCard) {
//     hasFlippedCard = true;
//     firstCard = event.target.innerHTML;
//      return;
//    }

//    secondCard = event.target.innerHTML;
//    hasFlippedCard = false;

//   //  checkForMatch();
//  }


// let click = 0;


const card = document.querySelector('.card');
const flipped = document.querySelector('.flipped');

let clickFlip = 0;

let firstCard = 0;
let secondCard = 0;

// const click = (event) => {
//   // console.log(event.target.innerHTML);
//   // console.log(firstCard);

//   if(firstCard === 0){

//     firstCard = event.target.innerHTML;
//     console.log('first card' + firstCard);
//   } else {
//     secondCard = event.target.innerHTML;
//     console.log('second card' + firstCard);

//   }
//   clickFlip++;
//   // if (clickFlip === 2) {

//   // }


// }




cardWrapper.addEventListener('click', flipCard);


resetGame.addEventListener('click', startGame);





// const cardWrapper = document.querySelector('.card-wrapper');
// const card = document.querySelector('.card');

// cards.forEach(card => {
//   const div = document.createElement('div');
//   div.innerHTML = card.number;
//   cardWrapper.appendChild(div);
//   div.addEventListener('click', (event) => {
//     // console.log(div.innerHTML);
//     clicks++;
//     div.classList.add('flipped');
//     if(clickFlip >= 2){
//       clickFlip = 0;
//     }  else {
//       clickFlip++;
//     }

//     console.log(clickFlip);

//   });
// });
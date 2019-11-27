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

shuffle(cards);

let cardFlipped = false;
let countFlipped = 0;

const cardWrapper = document.querySelector('.card-wrapper');
const removeClass = document.querySelector('.flipped');

cards.forEach(card => {
  const div = document.createElement('div');
  div.innerHTML = card.number;
  div.className = 'card';
  cardWrapper.appendChild(div);
  div.addEventListener('click', (event) => {
    // console.log(div.innerHTML);
    // console.log(event.srcElement);
    // console.log(event);
    let left = event.srcElement.offsetLeft;
    let top = event.srcElement.offsetTop;
    let content = event.srcElement.innerHTML;
    div.classList.add('flipped');

    // if(count <= 2) {
    //   count++
    // } else {
    //   count = 0;
    // }

    // if (cardFlipped === false) {
    //   cardFlipped = true;
    // }

    console.log(left);
    console.log(top);
    console.log(content);
  });
});

const div = document.querySelector('.card-wrapper div');



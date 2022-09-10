function getRandomNumber(){
  return Math.floor(Math.random()*6)+1;
}

let playerOne = getRandomNumber();
let playerTwo = getRandomNumber();

document.querySelectorAll('img')[0].setAttribute('src', 'images/dice'+playerOne+'.png');

document.querySelectorAll('img')[1].setAttribute('src', 'images/dice'+playerTwo+'.png');

let gameResult;

if(playerOne > playerTwo) {
  gameResult = '🚩 Player 1 Wins!';
} else if (playerTwo > playerOne) {
  gameResult = 'Player 2 Wins! 🚩';
} else {
  gameResult = 'Draw!'
}

document.querySelector('h1').innerHTML = gameResult;
// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';

const playBtn = document.querySelector('#play-btn');
const compThrow = document.querySelector('#computer-throw');
const whoWon = document.querySelector('#who-won');
const numWins = document.querySelector('#number-wins');
const numLosses = document.querySelector('#number-losses');
const numDraws = document.querySelector('#number-draws');
const resetBtn = document.querySelector('#reset-btn');
const numResets = document.querySelector('#num-of-resets');

// initialize global state
let wins = 0;
let loses = 0;
let draws = 0;

  // playBtn.addEventListener('click', () => {
  
  // }

// function didUserWin(player, computer) {
//   }

// console logging to check stuff is there
// console.log(playBtn, compThrow, whoWon, numWins, numLosses, numDraws, resetBtn, numResets);
console.log(getRandomThrow());
console.log(wins, loses, draws);

numWins.textContent = `number of wins: ${wins}`;
numLosses.textContent = `number of wins: ${loses}`;
numDraws.textContent = `number of wins: ${draws}`;
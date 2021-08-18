import { didUserWin } from './did-user-win.js';
import { getRandomThrow } from './get-random-throw.js';

const playBtn = document.querySelector('#play-btn');
const compThrow = document.querySelector('#computer-throw');
const whoWon = document.querySelector('#who-won');
const numWins = document.querySelector('#number-wins');
const numLosses = document.querySelector('#number-losses');
const numDraws = document.querySelector('#number-draws');
const resetBtn = document.querySelector('#reset-btn');
const numResets = document.querySelector('#num-of-resets');

let wins = 0;
let loses = 0;
let draws = 0;

let computer = getRandomThrow();

playBtn.addEventListener('click', () => {
    const player = document.querySelector('input:checked');
    const outcome = didUserWin(player.value, computer);
    if (outcome === 'win') {
        wins++;
        whoWon.textContent = 'you win!';
    }
    if (outcome === 'loss') {
        loses++;
        whoWon.textContent = 'computer won...';
    }
    if (outcome === 'draw') {
        draws++;
        whoWon.textContent = 'A draw, try again';
    }
    numWins.textContent = `number of wins: ${wins}`;
    numLosses.textContent = `number of losses: ${loses}`;
    numDraws.textContent = `number of draws: ${draws}`;
    compThrow.textContent = `computer picked: ${computer}`;
    computer = getRandomThrow();
});
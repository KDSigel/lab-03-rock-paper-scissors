// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { didUserWin } from '../did-user-win.js';
import { getRandomThrow } from '../get-random-throw.js';

const test = QUnit.test;

test('rock and scissors is loss', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';

    //Act
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

const test2 = QUnit.test;

test2 ('return rock, paper or scissor', (expect) =>{
    const array = ['rock', 'paper', 'scissors'];
    const expected = true;
    const actual = array.includes(getRandomThrow());
    expect.equal(actual, expected);
});

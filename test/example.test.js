// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { didUserWin } from '../did-user-win.js';

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

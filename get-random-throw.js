export function getRandomThrow() {
    const choiceArray = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return choiceArray[randomNum];
}
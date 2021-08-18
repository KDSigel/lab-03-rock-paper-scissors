export function didUserWin() {

}

const randomNum = Math.floor(Math.random() * 3);
export function getRandomThrow() {
    const choiceArray = [rock, paper, scissors];
    return choiceArray[randomNum];
}
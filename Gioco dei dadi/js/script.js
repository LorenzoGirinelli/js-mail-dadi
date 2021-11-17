const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber);

const computerNumber = Math.floor(Math.random() * 6) + 1;
console.log(computerNumber);

let gameResult;
if( userNumber > computerNumber) {
    gameResult = `L' utente vince`;
} else {
    gameResult = `Il computer vince`;
}
console.log(gameResult);
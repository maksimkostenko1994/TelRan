let dollar = 72.72;
let euro = 86.44;
const ask = parseInt(prompt('Enter the sum: '));
let convertToDollar = ask / dollar;
let convertToEuro = ask / euro;

alert('Dollars: ' + convertToDollar.toFixed(2) + '$, Euros: ' + convertToEuro.toFixed(2) + '€');

//======================================================================

let userNumber;

do {
    userNumber = parseInt(prompt('Please, enter the number'));
} while (isNaN(userNumber) || userNumber < 2);

let sum = 0;

for (let i = 2; i <= userNumber; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
alert('The sum of even numbers: ' + sum);

//======================================================================

let randomNum = Math.floor(Math.random() * 30);
console.log('Random number: ' + randomNum);
let userTry = parseInt(prompt('Try to guess the number: '));

for (let i = 4; i > 0; i--) {
    if (userTry > randomNum) {
        userTry = parseInt(prompt('The number is less! Try again! You have ' + i + ' attempt!Try again: '));
        console.log('User Try: ' + userTry);
        console.log('userTry > randomNum ' + i);
    }
    if (userTry < randomNum) {
        userTry = parseInt(prompt('The number is bigger! Try again! You have ' + i + ' attempt!Try again: '));
        console.log('User Try: ' + userTry);
        console.log('userTry < randomNum ' + i);
    }
    if (userTry === randomNum) {
        alert('Congratulation! You win!');
        break;
    }
    if (i === 1) {
        console.log('i===0 ' + i);
        alert('You lose! The number was: ' + randomNum);
    }
}
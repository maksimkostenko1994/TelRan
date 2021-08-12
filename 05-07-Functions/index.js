//============== Task 1 ===============================
let massage;

let isRight = function (user_answer, real_answer) {
    if (user_answer === real_answer) {
        return massage = 'You right!!!';
    } else {
        return massage = `Wrong answer, right number is ${real_answer}`;
    }
}

//======================================================

const numbers = [];

for (let i = 0; i < 5; i++) {
    numbers[i] = parseInt(Math.random() * 100);
}

alert(`Remember numbers and orders\n${numbers}`);

//========================================================

let userAnswer = +prompt('What is first number?');
isRight(userAnswer, numbers[0]);
alert(massage);

//========================================================

userAnswer = +prompt('What is last number?');
isRight(userAnswer, numbers[numbers.length - 1])
alert(massage);

//========================================================

let randomIndex = parseInt(Math.random() * numbers.length);  //0 1 2 3 4
userAnswer = +prompt(`What was the ${randomIndex + 1} number?`);
isRight(userAnswer, numbers[randomIndex]);
alert(massage);

//======================= End Task 1 ======================

//======================= Task 2 ==========================

let powerNumber = function (a, b) {
    let result = a;
    for (let i = 0; i < b - 1; i++) {
        result *= a;
    }
    return result;
}

console.log(powerNumber(5, 3));

//====================== End Task 2 =======================

//====================== Task 3 ===========================

const numbersSum = [2, 4, 6, 10, 12];

let sumNumbers = function (arr) {
    let sum = 0;
    for (let i = 0; i < numbersSum.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumNumbers(numbersSum));

//====================== End Task 3 ========================

//====================== Task 4 ============================

const numbersArr = [1, 2, 3, 4, 5, 6, 10];

let reversArray = function (arr) {
    let reverse = null;
    for (let i = 0, j = numbersArr.length - 1; i < numbersArr.length, j > 0; i++, j--) {
        reverse = arr[i];
        arr[i] = arr[j];
        arr[j] = reverse;
        if (i === j || i === j - 1) {
            return arr;
        }
    }
}

console.log(reversArray(numbersArr));

//======================= End Task 4 ========================

// let reverse = function (a) {
//     for (let i = 0, j = a.length - 1; i < j;)
//         a[i] = a[j] + (a[j--] = a[i++], 0)
//     return a;
// }
//
// console.log(reverse(numbersArr));
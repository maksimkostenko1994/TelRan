function stringCat1(str, s) {
    let res = '';
    if (str.length > s) {
        for (let i = 0; i < s; i++) {
            res += str[i];
            if (i === s - 1) {
                res = res + '...';
            }
        }
    } else {
        return console.log(str);
    }
    return console.log(res);
}

function stringCat2(str, s) {
    if (str.length > s)
        return str.slice(0, s) + '...';
    else return str;
}

stringCat1('hello world!', 7);
stringCat1('hello', 3);
stringCat1('hel', 3);

console.log(stringCat2('hello world!', 7));
console.log(stringCat2('hello', 3));
console.log(stringCat2('hel', 3));

const vocabulary = [
    ['Привет', 'Hello'],
    ['Стол', 'Table'],
    ['Холодильник', 'Refrigerator'],
    ['Машина', 'Car'],
    ['Цветок', 'Flower']
];

let translationGame = function (elem, item) {
    if (elem === item)
        return 'You are right!';
    else return `You are wrong. Correct translate is ${item}`;

}

let getRandomWord = function () {
    return Math.round(Math.random() * vocabulary.length);
}

let randomWord = vocabulary[getRandomWord()];

let userAnswer = prompt(`How will be ${randomWord[0]}`);

alert(translationGame(userAnswer, randomWord[1]));
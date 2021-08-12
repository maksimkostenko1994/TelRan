const vocabulary = [
    {english: [['Привет', 'Hello'], ['Стол', 'Table'], ['Холодильник', 'Refrigerator'], ['Машина', 'Car'], ['Цветок', 'Flower']]},
    {german: [['Привет', 'Hallo'], ['Стол', 'Tisch'], ['Холодильник', 'Kühlschrank'], ['Машина', 'Auto'], ['Цветок', 'Blume']]},
    {polish: [['Привет', 'Czesc'], ['Стол', 'Stol'], ['Холодильник', 'Lodowka'], ['Машина', 'Maszyna'], ['Цветок', 'Kwiat']]},
    {ukrainian: [['Привет', 'Привіт'], ['Стол', 'Стіл'], ['Холодильник', 'Холодильник'], ['Машина', 'Автомобіль'], ['Цветок', 'Квітка']]},
];

const getRandomWord = function (language) {
    return (language.length !== 0) ? Math.round(Math.random() * (language.length - 1)) : 0;
}

const checkUserLanguage = function (respond = 'ukraine', array = vocabulary) { // boolean
    for (let item of array) if (respond == Object.keys(item)) return true;
    return false;
}

const getKeys = function (array) {
    let keys = [];
    for (let item of array) keys.push(Object.keys(item));
    return keys;
}

const getLanguage = function (userChose, array) {
    for (let item in array)
        if (userChose == Object.keys(array[item]))
            return array[item];
}

let userLanguage = prompt('Chose the language:');
do {
    if (!checkUserLanguage(userLanguage, vocabulary)) // boolean
        userLanguage = prompt(`This language is not exist in our service. Chose one from the list: ${getKeys(vocabulary)}`);
} while (!checkUserLanguage(userLanguage, vocabulary));

const translationGame = function (elem, item) {
    if (elem === 'q') {
        return `The word was ${item}`;
    }
    if (elem === item) {
        getLanguage(userLanguage, vocabulary)[userLanguage].splice(getLanguage(userLanguage, vocabulary)[userLanguage].indexOf(word), 1);
        return 'You are right!';
    } else return `You are wrong. Correct translate is ${item}`;
}

let word;
let userAnswer;

do {
    if (getLanguage(userLanguage, vocabulary)[userLanguage].length !== 0) {
        word = getLanguage(userLanguage, vocabulary)[userLanguage][getRandomWord(getLanguage(userLanguage, vocabulary)[userLanguage])];
        userAnswer = prompt(`What is the translation ${word[0]} on ${userLanguage}:`);
        alert(translationGame(userAnswer, word[1]));
    } else {
        alert(`You are expert in ${userLanguage}.`);
        userAnswer = 'q';
    }
} while (userAnswer !== 'q');


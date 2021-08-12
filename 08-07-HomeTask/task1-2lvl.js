const next_lvl = [
    {
        english: [
            ['Сейчас я иду в школу', 'I am going to school now'],
            ['Я люблю читать', 'I like reading'],
            ['У меня есть собака', 'I have a dog'],
            ['Завтра я пойду в магазин', 'Tomorrow i will go to shop'],
            ['Вчера был отличный день', 'Yesterday was good day']]
    },
    {
        german: [
            ['Сейчас я иду в школу', 'Ich gehe jetzt zur Schule'],
            ['Я люблю читать', 'Ich mag lesen'],
            ['У меня есть собака', 'Ich habe einen Hund'],
            ['Завтра я пойду в магазин', 'Ich gehe morgen in den Laden'],
            ['Вчера был отличный день', 'Gestern war ein toller Tag']
        ]
    },
    {
        polish: [
            ['Сейчас я иду в школу', 'Teraz idę do szkoły'],
            ['Я люблю читать', 'Lubię czytać'],
            ['У меня есть собака', 'Mam psa'],
            ['Завтра я пойду в магазин', 'Jutro pójdę do sklepu'],
            ['Вчера был отличный день', 'Wczoraj był wspaniały dzień']
        ]
    },
    {
        ukrainian: [
            ['Сейчас я иду в школу', 'Зараз я йду в школу'],
            ['Я люблю читать', 'Я люблю читати'],
            ['У меня есть собака', 'У мене є собака'],
            ['Завтра я пойду в магазин', 'Завтра я піду в магазин'],
            ['Вчера был отличный день', 'Вчора був чудовий день']
        ]
    }
];

const getRandomWordLvl2 = function (language) {
    return (language.length !== 0) ? Math.round(Math.random() * (language.length - 1)) : 0;
}

const checkUserLanguageLvl2 = function (respond = 'ukraine', array = next_lvl) { // boolean
    for (let item of array) if (respond == Object.keys(item)) return true;
    return false;
}

const getKeysLvl2 = function (array) {
    let keys = [];
    for (let item of array) keys.push(Object.keys(item));
    return keys;
}

const getLanguageLvl2 = function (userChose, array) {
    for (let item in array)
        if (userChose == Object.keys(array[item]))
            return array[item];
}

let userLanguageLvl2 = prompt('Chose the language:');
do {
    if (!checkUserLanguageLvl2(userLanguageLvl2, next_lvl)) // boolean
        userLanguageLvl2 = prompt(`This language is not exist in our service. Chose one from the list: ${getKeysLvl2(next_lvl)}`);
} while (!checkUserLanguageLvl2(userLanguageLvl2, next_lvl));

const translationGameLvl2 = function (elem, item) {
    if (elem === 'q') {
        return `The sentence was ${item}`;
    }
    if (elem === item) {
        getLanguageLvl2(userLanguageLvl2, next_lvl)[userLanguageLvl2].splice(getLanguageLvl2(userLanguageLvl2, next_lvl)[userLanguageLvl2].indexOf(sentence), 1);
        return 'Everything correct!'
    } else {
        let split_elem = elem.split(' ');
        let split_item = item.split(' ');
        let answer = '';
        for (let i = 0; i < split_elem.length; i++) {
            if (split_elem[i] === split_item[i]) {
                answer += split_item[i] + ' ';
            } else {
                answer += `{${split_elem[i]}} `
            }
        }
        return `You have mistakes: ${answer}`
    }
}

let sentence;
let userAnswerLvl2;

do {
    if (getLanguageLvl2(userLanguageLvl2, next_lvl)[userLanguageLvl2].length !== 0) {
        sentence = getLanguageLvl2(userLanguageLvl2, next_lvl)[userLanguageLvl2][getRandomWordLvl2(getLanguageLvl2(userLanguageLvl2, next_lvl)[userLanguageLvl2])];
        userAnswerLvl2 = prompt(`To quit enter "q"! What is the translation ${sentence[0]} on ${userLanguageLvl2}:`);
        alert(translationGameLvl2(userAnswerLvl2, sentence[1]));
    } else {
        alert(`You are expert in ${userLanguageLvl2}.`);
        userAnswerLvl2 = 'q';
    }
} while (userAnswerLvl2 !== 'q');

const play = document.querySelector('#play'),
    btnCheckWord = document.querySelector('#check'),
    letterChar = document.querySelector('#letter'),
    btnContinue = document.querySelector('#again'),
    validator = document.querySelector('#validator');
let WORD = '', RESULT = '';

//start the game
const playGame = () => {
    document.querySelector('.section .guess-word').style.display = 'block';
    document.querySelector('#winner').style.display = 'none'
    play.style.display = 'none';
    const odjWord = words[getRandomWord(words)]
    WORD = odjWord.word
    document.querySelector('#word-length').innerHTML = `You word consist of ${WORD.length} letters.<br>It is ${odjWord.hint}.`;
    document.querySelector('#guess-word').innerText = getWord(WORD);
    RESULT = getWord(WORD);
    document.querySelector('#guess-word-info').style.display = 'none'
}

play.onclick = () => playGame();

const words = [
    {word: 'mama', hint: 'member of the family'},
    {word: 'home', hint: 'place of living'},
    {word: 'television', hint: 'digital device'},
    {word: 'day', hint: 'related to calendar'},
    {word: 'pencil', hint: 'written affiliation'},
    {word: 'book', hint: 'printed products'}
];

//get random index of words array
const getRandomWord = (words) => {
    return Math.floor(Math.random() * words.length)
}

//change WORD to ----
const getWord = (word) => {
    let result = '';
    for (let char of word) result += '-';
    return result;
}

//main logic
const checkLetter = (letter) => {
    let res = RESULT.split('');
    for (let i = 0; i < WORD.length; i++)
        if (letter === WORD[i]) res[i] = letter
    validator.style.cssText = 'color: red;font-size: 1.5em;';
    if(res.join('') === RESULT) validator.innerText = `There are not letter ${letter.toUpperCase()}`
    RESULT = res.join('')
    if (RESULT === WORD) {
        document.querySelector('#winner').style.display = 'block'
        document.querySelector('#winner h2').innerText = `Word was ${WORD.toUpperCase()}`;
        document.querySelector('.section .guess-word').style.display = 'none';
        play.style.display = 'none';
        validator.innerText = '';
    } else
        document.querySelector('#guess-word').innerText = RESULT;
    letterChar.value = '';
}

btnCheckWord.onclick = () => checkLetter(letterChar.value);
btnContinue.onclick = () => playGame();

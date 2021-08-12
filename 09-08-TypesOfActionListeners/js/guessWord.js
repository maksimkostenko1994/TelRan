const play = document.querySelector('#play'),
    btnCheckWord = document.querySelector('#check'),
    letter = document.querySelector('#letter'),
    btnContinue = document.querySelector('#again'),
    validator = document.querySelector('#validator');
let WORD = '', RESULT = '';

//start the game
const playGame = () => {
    document.querySelector('.section .guess-word').style.display = 'block';
    play.style.display = 'none';
    WORD = words[getRandomWord(words)]
    document.querySelector('#word-length').innerText = `You word is ${WORD.length} letter`;
    document.querySelector('#guess-word').innerText = getWord(WORD);
    RESULT = getWord(WORD);
}

play.onclick = () => playGame();

const words = ['mama', 'home', 'television', 'day', 'pencil', 'book'];

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

//main logik
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
    this.letter.value = '';
}

btnCheckWord.onclick = () => checkLetter(letter.value);
btnContinue.onclick = () => playGame();

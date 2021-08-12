//menu buttons
const home = document.querySelector('#home'),
    guessNumber = document.querySelector('#guessNumber'),
    rememberOder = document.querySelector('#rememberOder'),
    translateWord = document.querySelector('#translateWord'),
    guessWord = document.querySelector('#guessWord');

//views
const sectionHome = document.querySelector('#section-home'),
    sectionGuessNumber = document.querySelector('#section-guessNumber')
sectionRemeberOder = document.querySelector('#section-rememberOder'),
    sectionTranslateWord = document.querySelector('#section-translateWord'),
    sectionGuessWord = document.querySelector('#section-guessWord');

home.onclick = () => {
    sectionHome.style.display='block';
    sectionGuessNumber.style.display='none';
    sectionRemeberOder.style.display='none';
    sectionTranslateWord.style.display='none';
    sectionGuessWord.style.display='none';
}

guessNumber.onclick = () => {
    sectionHome.style.display='none';
    sectionGuessNumber.style.display='block';
    sectionRemeberOder.style.display='none';
    sectionTranslateWord.style.display='none';
    sectionGuessWord.style.display='none';
}

rememberOder.onclick = () => {
    sectionHome.style.display='none';
    sectionGuessNumber.style.display='none';
    sectionRemeberOder.style.display='block';
    sectionTranslateWord.style.display='none';
    sectionGuessWord.style.display='none';
}

translateWord.onclick = () => {
    sectionHome.style.display='none';
    sectionGuessNumber.style.display='none';
    sectionRemeberOder.style.display='none';
    sectionTranslateWord.style.display='block';
    sectionGuessWord.style.display='none';
}

guessWord.onclick = () => {
    sectionHome.style.display='none';
    sectionGuessNumber.style.display='none';
    sectionRemeberOder.style.display='none';
    sectionTranslateWord.style.display='none';
    sectionGuessWord.style.display='block';
}
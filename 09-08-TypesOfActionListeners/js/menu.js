//menu buttons
const home = document.querySelector('#home'),
    guessNumber = document.querySelector('#guessNumber'),
    rememberOder = document.querySelector('#rememberOder'),
    translateWord = document.querySelector('#translateWord'),
    guessWord = document.querySelector('#guessWord');

//views
const sectionHome = document.querySelector('#section-home'),
    sectionGuessNumber = document.querySelector('#section-guessNumber'),
    sectionRememberOder = document.querySelector('#section-rememberOder'),
    sectionTranslateWord = document.querySelector('#section-translateWord'),
    sectionGuessWord = document.querySelector('#section-guessWord');

home.onclick = () => {
    sectionHome.style.display = 'block';
    sectionGuessNumber.style.display = 'none';
    sectionRememberOder.style.display = 'none';
    sectionTranslateWord.style.display = 'none';
    sectionGuessWord.style.display = 'none';
    home.classList.add('active')
    guessNumber.classList.remove('active')
    rememberOder.classList.remove('active')
    translateWord.classList.remove('active')
    guessWord.classList.remove('active')
}

guessNumber.onclick = () => {
    sectionHome.style.display = 'none';
    sectionGuessNumber.style.display = 'block';
    sectionRememberOder.style.display = 'none';
    sectionTranslateWord.style.display = 'none';
    sectionGuessWord.style.display = 'none';
    home.classList.remove('active')
    guessNumber.classList.add('active')
    rememberOder.classList.remove('active')
    translateWord.classList.remove('active')
    guessWord.classList.remove('active')
}

rememberOder.onclick = () => {
    sectionHome.style.display = 'none';
    sectionGuessNumber.style.display = 'none';
    sectionRememberOder.style.display = 'block';
    sectionTranslateWord.style.display = 'none';
    sectionGuessWord.style.display = 'none';
    home.classList.remove('active')
    guessNumber.classList.remove('active')
    rememberOder.classList.add('active')
    translateWord.classList.remove('active')
    guessWord.classList.remove('active')
}

translateWord.onclick = () => {
    sectionHome.style.display = 'none';
    sectionGuessNumber.style.display = 'none';
    sectionRememberOder.style.display = 'none';
    sectionTranslateWord.style.display = 'block';
    sectionGuessWord.style.display = 'none';
    home.classList.remove('active')
    guessNumber.classList.remove('active')
    rememberOder.classList.remove('active')
    translateWord.classList.add('active')
    guessWord.classList.remove('active')
}

guessWord.onclick = () => {
    sectionHome.style.display = 'none';
    sectionGuessNumber.style.display = 'none';
    sectionRememberOder.style.display = 'none';
    sectionTranslateWord.style.display = 'none';
    sectionGuessWord.style.display = 'block';
    home.classList.remove('active')
    guessNumber.classList.remove('active')
    rememberOder.classList.remove('active')
    translateWord.classList.remove('active')
    guessWord.classList.add('active')
}
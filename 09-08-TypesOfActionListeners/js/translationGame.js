"use strict"

//buttons
const btnStartTranslation = document.querySelector('#btn-start-translation'),
    btnChooseLanguage = document.querySelector('#btn-choose-language'),
    btnCheckUserTranslation = document.querySelector('#check-user-translation'),
    btnTranslationRepeat = document.querySelector('#translation-game-repeat')

//boxes
const translationGameBox = document.querySelector('.translation-game-box'),
    translationCheckBox = document.querySelector('.translation-check-box'),
    translationResultBox = document.querySelector('.translation-result-box')

//inputs
const inputLanguageFrom = document.querySelector('#language-from'),
    inputLanguageTo = document.querySelector('#language-to'),
    inputCheckUserAnswer = document.querySelector('#user-translate')

//info
const translationGameInfo = document.querySelector('#translation-game-info')

//main variables
let wordIndex, attemptTranslation, languageFrom, languageTo, wordsTo, wordsFrom;

//database of words
const vocabulary = [
    {
        english: ['day', 'homework', 'holidays', 'dog', 'family']
    },
    {
        ukraine: ['день', "домашня робота", "канікули", "собака", "сім'я"]
    },
    {
        russian: ["день", "домашняя работа", "каникулы", "собака", "семья"]
    },
    {
        germany: ['tag', 'hausaufgaben', 'Ferien', 'hund', 'Familie']
    }
]

//auxiliary functions
const getLanguages = (array) => {
    return array.map(item => Object.keys(item).toString())
}

const randomWordIndex = (array) => {
    return Math.floor(Math.random() * array.length)
}

const getWordsArray = (language, array) => {
    for (let item of array)
        if (Object.keys(item).toString() === language)
            return item[language]
    return 'Not found'
}

const checkLanguage = (language, array) => {
    for (let item of array)
        if (item === language) return true
    return false
}

const getNewArrayOfLanguages = (element, array) => {
    return array.filter(item => item !== element);
}

//starting the game
const startTranslationGame = () => {
    attemptTranslation = 3
    btnChooseLanguage.setAttribute('disabled', 'disabled')
    hideElements(btnStartTranslation, translationGameInfo, translationResultBox)
    showElements(translationGameBox)
    translationGameBox.querySelector('h3').innerText = `Choose languages from what to what you would like to check:`
    translationGameBox.querySelectorAll('h2')[0].innerText = getLanguages(vocabulary)
    translationGameBox.querySelectorAll('h2')[1].innerText = getLanguages(vocabulary)
    clearInput(inputLanguageFrom, inputLanguageTo, inputCheckUserAnswer)
    translationCheckBox.querySelector('h2').innerText = ''
    translationCheckBox.querySelector('h3').innerText = ''
    translationCheckBox.querySelector('label').innerText = ''
}

btnStartTranslation.onclick = () => startTranslationGame()

inputLanguageFrom.oninput = (event) => {
    languageFrom = event.target.value;
    for (let item of getLanguages(vocabulary))
        if (item === languageFrom) {
            translationGameBox.querySelectorAll('label')[0].textContent = ''
            translationGameBox.querySelectorAll('h2')[1].innerText = getNewArrayOfLanguages(languageFrom, getLanguages(vocabulary))
            if (checkLanguage(languageFrom, getLanguages(vocabulary)) && checkLanguage(languageTo, getNewArrayOfLanguages(languageTo, getLanguages(vocabulary))))
                btnChooseLanguage.removeAttribute('disabled')
            break
        } else {
            translationGameBox.querySelectorAll('label')[0].innerText = 'The language doesn\'t exist'
            btnChooseLanguage.setAttribute('disabled', 'disabled')
        }

}

inputLanguageTo.oninput = (event) => {
    languageTo = event.target.value;
    for (let item of getLanguages(vocabulary))
        if (item === languageTo) {
            translationGameBox.querySelectorAll('label')[1].innerText = ''
            translationGameBox.querySelectorAll('h2')[0].innerText = getNewArrayOfLanguages(languageTo, getLanguages(vocabulary))
            if (checkLanguage(languageTo, getLanguages(vocabulary)) && checkLanguage(languageFrom, getNewArrayOfLanguages(languageTo, getLanguages(vocabulary))))
                btnChooseLanguage.removeAttribute('disabled')
            break
        } else {
            translationGameBox.querySelectorAll('label')[1].innerText = 'The language doesn\'t exist'
            btnChooseLanguage.setAttribute('disabled', 'disabled')
        }
}

btnChooseLanguage.onclick = () => {
    languageFrom = inputLanguageFrom.value
    languageTo = inputLanguageTo.value
    hideElements(translationGameBox)
    showElements(translationCheckBox)
    wordsFrom = getWordsArray(languageFrom, vocabulary);
    wordsTo = getWordsArray(languageTo, vocabulary);
    wordIndex = randomWordIndex(wordsFrom)
    translationCheckBox.querySelector('h2').innerText = `How will be ${wordsFrom[wordIndex].toUpperCase()} on ${languageTo}?`
    clearInput(inputLanguageFrom, inputLanguageTo)
}

btnCheckUserTranslation.onclick = () => {
    const userAnswer = inputCheckUserAnswer.value;
    clearInput(inputCheckUserAnswer)
    if (userAnswer === '' || userAnswer === null) {
        translationCheckBox.querySelector('label').innerText = 'Please, type a word'
    } else if (userAnswer === wordsTo[wordIndex]) {
        wordsFrom = wordsFrom.filter(item => item!==wordsFrom[wordIndex])
        if (wordsFrom.length === 0 && attemptTranslation > 1) {
            translationResultBox.querySelector('h2').innerHTML = `Congratulation! You win!<br> Press "REPEAT" to play again!`
            hideElements(translationCheckBox)
            showElements(translationResultBox)
        }
        else {
            wordsTo = wordsTo.filter(item => item!==wordsTo[wordIndex])
            wordIndex = randomWordIndex(wordsFrom)
            translationCheckBox.querySelector('h2').innerText = `How will be ${wordsFrom[wordIndex].toUpperCase()} on ${languageTo}?`
        }
    } else if (attemptTranslation <= 1) {
        translationResultBox.querySelector('h2').innerHTML = `Game over! Correct answer is ${wordsTo[wordIndex].toUpperCase()}.<br> Press "REPEAT" to play again!`
        hideElements(translationCheckBox)
        showElements(translationResultBox)
    } else {
        clearInput(inputCheckUserAnswer)
        attemptTranslation--;
        translationCheckBox.querySelector('h3').innerHTML = `You answer is wrong! You have ${attemptTranslation} attempt.<br>Try again!`
    }
}

btnTranslationRepeat.onclick = () => startTranslationGame()

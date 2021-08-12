const guessNumberInfo = document.querySelector('#guess-number-info'),
    btnStartGuessNumber = document.querySelector('#btn-guess-number-start'),
    guessNumberBox = document.querySelector('.guess-number-box'),
    userNumberInput = document.querySelector('#user-number'),
    btnNumberCheck = document.querySelector('#btn-number-check'),
    guessNumberResult = document.querySelector('.guess-number-result'),
    btnGuessNumberRepeat = document.querySelector('#guess-repeat')

let botRange, topRange, randomNumber, attempt;

const startGameGuessNumber = () =>{
    botRange = 0;
    topRange = 100;
    btnStartGuessNumber.style.display = 'none'
    guessNumberInfo.style.display = 'none'
    guessNumberBox.style.display = 'block'
    guessNumberResult.style.display = 'none'
    userNumberInput.value = ''
    guessNumberBox.querySelector('label').innerText = `Please, input number from ${botRange} to ${topRange}.`
    randomNumber = getRandomNumber();
    console.log(randomNumber)
    attempt = 5
}

btnStartGuessNumber.onclick = () => startGameGuessNumber()

const getRandomNumber = () => {
    return Math.floor(Math.random() * 101);
}

btnNumberCheck.onclick = () => {
    const predict = parseInt(userNumberInput.value);
    switch (true) {
        case predict>topRange || predict<botRange:
            guessNumberBox.querySelector('label').innerHTML = `Guessed number is out range. <br> Please, input number from ${botRange} to ${topRange}.`
            break
        case attempt === 1:
            guessNumberBox.style.display = 'none'
            guessNumberResult.style.display = 'block'
            guessNumberResult.querySelector('h2').innerHTML = `You lose! The suggest word was ${randomNumber}.<br> Press "REPEAT" to try again.`
            break
        case predict < randomNumber:
            attempt--;
            botRange = predict
            guessNumberBox.querySelector('label').innerHTML = `Guessed number is less, then number. You have ${attempt} attempt.<br> Please, input number from ${botRange} to ${topRange}.`
            userNumberInput.value = ''
            break
        case predict > randomNumber:
            attempt--;
            topRange = predict
            guessNumberBox.querySelector('label').innerHTML = `Guessed number is bigger, then number. You have ${attempt} attempt.<br> Please, input number from ${botRange} to ${topRange}.`
            userNumberInput.value = ''
            break
        case predict === randomNumber:
            guessNumberBox.style.display = 'none'
            guessNumberResult.style.display = 'block'
            guessNumberResult.querySelector('h2').innerHTML = `Congratulation! You win! Press "REPEAT" to try again.`
            break
    }
}

btnGuessNumberRepeat.onclick = () => startGameGuessNumber();


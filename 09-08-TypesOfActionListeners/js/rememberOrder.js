const btnStartRememberOder = document.querySelector('#btn-start-remember'),
    rememberBox = document.querySelector('.remember-box'),
    btnShowOrder = document.querySelector('#show-order'),
    answerRememberBox = document.querySelector('.answer-remember-box'),
    userAnswerInput = document.querySelector('#user-remember-answer'),
    rememberResultBox = document.querySelector('.remember-result-box'),
    btnRepeatRememberGame = document.querySelector('#repeat-order'),
    btnCheckUserAnswer = document.querySelector('#check-user-index')

let rememberArray, attemptRemember, randomIndexRememberArray;

const createArray = () => {
    let res = [], random = Math.floor(Math.random() * 101)
    res.push(random)
    do {
        for (let j = 0; j < res.length; j++) {
            if (res.length < 10) {
                if (res[j] === random) {
                    j = 0;
                    random = Math.floor(Math.random() * 101)
                }
                if (res[j] !== random && j === res.length - 1)
                    res.push(random)
            }
        }
    }
    while (res.length < 10)
    return res;
}

const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length)
}


const startRememberGame = () => {
    hideElements(btnStartRememberOder, document.querySelector('#remember-info'), rememberResultBox)
    clearInput(userAnswerInput)
    answerRememberBox.querySelector('label').innerHTML = ''
    rememberArray = createArray();
    showElements(rememberBox, rememberBox.querySelector('h2'), btnShowOrder)
    attemptRemember = 3;
}

btnStartRememberOder.onclick = () => startRememberGame()

btnShowOrder.onclick = () => {
    hideElements(btnShowOrder)
    let timer = 10
    showElements(rememberBox.querySelector('#timer'), rememberBox.querySelector('#index'), rememberBox.querySelector('#array-remember-info'))
    rememberBox.querySelector('#index').style.display = 'flex'
    rememberBox.querySelector('#index').innerHTML = 'INDEXES:'
    for (let i = 0; i < rememberArray.length; i++)
        rememberBox.querySelector('#index').innerHTML += `<span>${i + 1}</span>`

    rememberBox.querySelector('#array-remember-info').style.display = 'flex'
    rememberBox.querySelector('#array-remember-info').innerHTML = 'NUMBER:'
    for (let i = 0; i < rememberArray.length; i++)
        rememberBox.querySelector('#array-remember-info').innerHTML += `<span>${rememberArray[i]}</span>`

    let interval = setInterval(function () {
        if (timer < 0) {
            clearInterval(interval);
            hideElements(rememberBox.querySelector('h2'), rememberBox.querySelector('#index'), rememberBox.querySelector('#timer'), rememberBox.querySelector('#array-remember-info'))
            randomIndexRememberArray = getRandomIndex(rememberArray)
            answerRememberBox.querySelector('h2').innerText = `What is the index of ${rememberArray[randomIndexRememberArray]}?`
            showElements(answerRememberBox)
        } else rememberBox.querySelector('#timer').innerText = timer
        timer--;
    }, 1000)
}

btnCheckUserAnswer.onclick = () => {
    const userAnswer = parseInt(userAnswerInput.value)
    clearInput(userAnswerInput)
    if(isNaN(userAnswer)){
        answerRememberBox.querySelector('label').innerHTML = `Index should be a number. <br>Try again!`
    }else if (attemptRemember < 1) {
        hideElements(answerRememberBox)
        showElements(rememberResultBox)
        rememberResultBox.querySelector('h2').innerHTML = `Game over! The index of ${rememberArray[randomIndexRememberArray]} was ${randomIndexRememberArray + 1}.<br>Press "REPEAT" to play again.`
    } else if (userAnswer - 1 === randomIndexRememberArray) {
        hideElements(answerRememberBox)
        showElements(rememberResultBox)
        rememberResultBox.querySelector('h2').innerHTML = `Congratulation! You win!<br>Press "REPEAT" to play again.`
    } else {
        attemptRemember--
        answerRememberBox.querySelector('label').innerHTML = `Index ${userAnswer} is incorrect. You have ${attemptRemember} attempt. <br>Try again!`
    }
}

btnRepeatRememberGame.onclick = () => startRememberGame();
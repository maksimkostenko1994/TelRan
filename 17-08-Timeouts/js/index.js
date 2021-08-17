//buttons
const btnStart = document.querySelector('#btn-start'),
    btnStop = document.querySelector('#btn-stop')

//inputs
const userInput = document.querySelector('#user-input')

//others
const timerItem = document.querySelectorAll('.box-timer h1')[1]

//variables
let setTimer;

const showTimer = () => {
    if (userInput.value === '')
        document.querySelector('.box-timer label').innerHTML = 'Set a number';
    else {
        let timer = +userInput.value;
        userInput.value = '';
        btnStart.setAttribute('disabled', 'disable');
        btnStop.removeAttribute('disabled');
        setTimer = setInterval(() => {
            if (timer < 0) {
                clearInterval(setTimer)
                timerItem.innerHTML = 'Finished'
                btnStart.removeAttribute('disabled');
                btnStop.setAttribute('disabled', 'disable');
            } else {
                timerItem.innerHTML = `${timer}`;
            }
            timer--;
        }, 1000)
    }
}

btnStart.onclick = showTimer;

const stopTimer = () => {
    clearInterval(setTimer)
    btnStart.removeAttribute('disabled');
    btnStop.setAttribute('disabled', 'disable');
}

btnStop.onclick = stopTimer;

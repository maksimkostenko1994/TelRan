// buttons
const btnFindOut = document.querySelector('#find-out')

// inputs
const inputDate = document.querySelector('#input-date')

// date box
const daysBox = document.querySelector('.days h1'),
    hoursBox = document.querySelector('.hours h1'),
    minutesBox = document.querySelector('.minutes h1'),
    secondsBox = document.querySelector('.seconds h1')

//boxes
const formBox = document.querySelector('.form-box');

//interval
let timeLeft;

const getDaysInMonth = (month, year) => {
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
}

const checkDate = (date) => {
    if (date === '')
        return `Date should be in format dd.mm.yyyy`
    else {
        const dateArr = date.split('.');
        const [days, month, year] = dateArr;
        const daysOfMonth = getDaysInMonth(+month - 1, +year).length;
        switch (true) {
            case dateArr.length !== 3 || isNaN(days) || isNaN(month) || isNaN(year):
                return `Date should be in format dd.mm.yyyy`;
            case +year < new Date().getFullYear():
                return `Year should be more then ${new Date().getFullYear()}`
            case +month > 12:
                return `Month should be in range from 1 to 12`
            case +days > daysOfMonth:
                return `Days should be in range from 1 to ${daysOfMonth}`
            case (new Date(year, +month - 1, days) - new Date() < 0):
                const today = new Date()
                return `Today is ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
        }
    }
    return true;
}

inputDate.oninput = (event) => {
    const date = event.target.value.split('')
    if (date.length === 2) {
        inputDate.value += `.`
    } else if (date.length === 5) {
        inputDate.value += `.`
    }
}


const setDate = () => {
    const date = inputDate.value;
    if (checkDate(date) !== true)
        formBox.querySelector('label').innerHTML = `${checkDate(date)}`;
    else {
        if (timeLeft !== null)
            clearInterval(timeLeft)
        const dateArr = date.split('.');
        const [days, month, year] = dateArr;
        formBox.querySelector('label').innerHTML = ''
        timeLeft = setInterval(() => {
            const dayLeft = new Date(year, +month - 1, days) - new Date()
            if (Math.floor(dayLeft / (24 * 60 * 60 * 1000)) < 0 && Math.floor(dayLeft / (60 * 60 * 1000) % 24) < 0 && Math.floor(dayLeft / (60 * 1000) % 60) < 0 && Math.floor(dayLeft / 1000 % 60) < 0) {
                clearInterval(timeLeft)
            } else {
                daysBox.innerHTML = `${Math.floor(dayLeft / 24 / 60 / 60 / 1000)}`
                hoursBox.innerHTML = `${Math.floor(dayLeft / (60 * 60 * 1000) % 24)}`
                minutesBox.innerHTML = `${Math.floor(dayLeft / (60 * 1000) % 60)}`
                secondsBox.innerHTML = `${Math.floor(dayLeft / 1000 % 60)}`
            }
        }, 1000)
    }
}

btnFindOut.onclick = setDate


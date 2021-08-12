"use strict"
const getTask = (value) => {
    if (value === 'next') {
        document.querySelector('#nextTask').style.display = 'none'
        document.querySelector('#prevTask').style.display = 'block'
        document.querySelector('#task-slider').style.display = 'none'
        document.querySelector('#task-next').style.display = 'block'
    } else {
        document.querySelector('#nextTask').style.display = 'block'
        document.querySelector('#prevTask').style.display = 'none'
        document.querySelector('#task-slider').style.display = 'block'
        document.querySelector('#task-next').style.display = 'none'
    }
}

const images = [];

for (let i = 0; i < 8; i++)
    images.push(`./img/${i + 1}.jpg`)

let iterator = images.length / 2;

const prev = () => {
    iterator--;
    if (iterator === -1) {
        iterator = images.length - 1
        document.querySelector('#img').innerHTML = `<img id="img" src="${images[iterator]}" alt="1" width="800" height="500">`
    } else
        document.querySelector('#img').innerHTML = `<img id="img" src="${images[iterator]}" alt="1" width="800" height="500">`
}

const next = () => {
    iterator++;
    if (iterator === images.length) {
        iterator = 0
        document.querySelector('#img').innerHTML = `<img id="img" src="${images[iterator]}" alt="1" width="800" height="500">`
    } else
        document.querySelector('#img').innerHTML = `<img id="img" src="${images[iterator]}" alt="1" width="800" height="500">`
}

//task 2

const calculate = (value) => {
    switch (true) {
        case value === '+':
            const addNumbers = document.getElementsByClassName('add')
            addNumbers[2].innerText = `${parseInt(addNumbers[0].value) + parseInt(addNumbers[1].value)}`
            break
        case value === '/':
            const divNumbers = document.getElementsByClassName('div')
            divNumbers[2].innerText = `${parseInt(divNumbers[0].value) / parseInt(divNumbers[1].value)}`
            break
        case value === '*':
            const multipleNumbers = document.getElementsByClassName('multiple')
            multipleNumbers[2].innerText = `${parseInt(multipleNumbers[0].value) * parseInt(multipleNumbers[1].value)}`
            break
        case value === '-':
            const minusNumbers = document.getElementsByClassName('minus')
            minusNumbers[2].innerText = `${parseInt(minusNumbers[0].value) - parseInt(minusNumbers[1].value)}`
            break
    }

}

const checkPalindrome = function () {
    let res = document.getElementById('palindrome').value.split(' ').join('').toUpperCase(); //to upper case
    if (res.length < 2) return document.getElementById('checkPalindrome').innerText = 'Palindrome';
    for(let i = 0;i<res.length-1;i++)
        if (res[0] !== res.slice(-1)) return document.getElementById('checkPalindrome').innerText = 'Not Palindrome'
    return document.getElementById('checkPalindrome').innerText = 'Palindrome';
}
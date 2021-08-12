"use strict"

const btns = document.querySelectorAll('button')
let btnStyle = 'width: 150px; height: 30px; cursor: pointer; transition: background-color 0.5s ease'

for (let btn of btns) {
    btn.style.cssText = btnStyle
    btn.onmouseover = () => {
        btn.style.backgroundColor = 'lightblue'
        btn.style.border = '0px'
        btn.style.borderRadius = '2px'
        btn.style.color = 'white'
    }
    btn.onmouseout = () => {
        btn.style.cssText = btnStyle
    }
}

const inputs = document.querySelectorAll('input')
let inputStyle = 'width: 250px; height: 24px; padding-left: 5px'

for (let input of inputs)
    input.style.cssText = inputStyle


//task 1
const textFromBtn = document.getElementById('text-from-btn')
textFromBtn.style.transition = 'font-size 1s ease, color 1s ease'

const getValue = (value) => {
    (isNaN(parseInt(value))) ? textFromBtn.style.color = value : textFromBtn.style.fontSize = `${value}px`
}

//task 2
const textFromInput = document.getElementById('text-from-input')
textFromInput.style.transition = 'font-size 1s ease, color 1s ease'

const getColorValue = (item) => {
    item = document.getElementById('color').value;
    textFromInput.style.color = item
}

const getSizeValue = (item) => {
    item = document.getElementById('size').value;
    textFromInput.style.fontSize = `${item}px`
}

//task 3
const square = document.getElementById('square')
square.style.cssText = "text-align: center; width: 300px; height: 300px; background-color: yellow; cursor: pointer; transition: background-color 1s ease"
let iterator = 0;
square.onclick = () => {
    square.innerHTML = `<h1 style="margin: 0; font-size: 14em; line-height: 300px; color: white">${iterator++}</h1>`
    square.style.backgroundColor = `#${Math.random().toString(16).substring(2, 8).toUpperCase()}`
}



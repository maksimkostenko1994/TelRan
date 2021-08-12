const removeBox = document.querySelector('#removeBox')

for (let i = 0; i < 8; i++)
    removeBox.innerHTML += `<div class="box" data-value="${i}" onclick="removeSquares(attributes[1].value)" style="
background-color: rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})"></div>`

const boxes = document.querySelectorAll('#removeBox .box');
const removeSquares = (value) => {
    if (document.querySelectorAll('#removeBox .box').length > 1)
        removeBox.removeChild(boxes[value])
    else document.querySelectorAll('#removeBox .box').length = 1
}

const circleBox = document.querySelector('#circleBox')

for (let i = 0; i < 8; i++)
    circleBox.innerHTML += `<div class="box" data-value="${i}" onclick="circleSquares(attributes[1].value)" style="
background-color: rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})"></div>`


const circles = document.querySelectorAll('#circleBox .box');
const circleSquares = (value) => {
    circles[value].classList.toggle('circle')
}
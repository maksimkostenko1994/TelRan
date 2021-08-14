//buttons
const btnJazz = document.querySelector('#jazz-btn'),
    btnRock = document.querySelector('#rock-btn'),
    btnBlues = document.querySelector('#blues-btn')

//content
const contentBox = document.querySelector('.content')

//variables
const jazzSize = 9, rockSize = 5, bluesSize = 8

//add content
const addContent = (size) => {
    contentBox.innerHTML = ''
    for (let i = 0; i < size; i++) {
        contentBox.append(createElement())
    }
}


//create element
const createElement = () => {
    const div = document.createElement('div')
    div.classList.add('box')
    const color = Math.random().toString(16)
    div.style.backgroundColor = `#${color.substr(2, 8)}`
    div.style.border = `1px solid black`
    return div
}

//main logic
btnJazz.onclick = () => addContent(jazzSize)

btnRock.onclick = () => addContent(rockSize)

btnBlues.onclick = () => addContent(bluesSize)
function hideElements() {
    for (let item of arguments) item.style.display = 'none'
}

function showElements() {
    for (let item of arguments) item.style.display = 'block'
}

function clearInput() {
    for (let item of arguments) item.value = ''
}
const users = [
        {
            name: 'Vasyl',
            lastName: 'Ivanov',
            city: 'Berlin'
        },
        {
            name: 'Maks',
            lastName: 'Grabo',
            city: 'Mainz'
        },
        {
            name: 'Ivan',
            lastName: 'Pupkin',
            city: 'Moscow'
        },
        {
            name: 'Natasha',
            lastName: 'Frolova',
            city: 'Frankfurt-am-Main'
        },
        {
            name: 'Elena',
            lastName: 'Sitar',
            city: 'Berlin'
        }
    ],
    listBox = document.querySelector('.list-box')

const createUser = (index, user) => {
    const li = document.createElement('li')
    li.setAttribute('data-index', index)
    li.innerHTML = `<h2>${user.name} ${user.lastName}</h2><h4>From: <span>${user.city}</span></h4>`
    li.onclick = onclickHandler
    return li
}

const renderUserList = (array) => {
    const ul = document.createElement('ul')
    for (let user of array) {
        const userItem = createUser(array.indexOf(user), user),
         index = +localStorage.getItem('index')
        if (index === array.indexOf(user)) {
            userItem.style.backgroundColor = 'blue'
        } else {
            userItem.style.backgroundColor = 'white'
        }
        ul.appendChild(userItem)
    }
    listBox.appendChild(ul)
}

const onclickHandler = (event) => {
    const list = listBox.querySelectorAll('ul li')
    if (event.target.tagName === 'H2' || event.target.tagName === 'H4') {
        const index = +event.target.parentNode.dataset.index
        event.target.parentNode.style.backgroundColor = `blue`
        list.forEach(item => {if(+item.dataset.index !== index) item.style.backgroundColor = 'white'})
        localStorage.setItem('index', `${index}`)
    }
    if (event.target.tagName === 'SPAN') {
        const index = +event.target.parentNode.parentNode.dataset.index
        event.target.parentNode.parentNode.style.backgroundColor = `blue`
        list.forEach(item => {if(+item.dataset.index !== index) item.style.backgroundColor = 'white'})
        localStorage.setItem('index', `${index}`)
    }
}

renderUserList(users)

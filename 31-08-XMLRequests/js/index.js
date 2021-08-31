const BASE_URL = 'https://jsonplaceholder.typicode.com'

const app = document.querySelector('#app')
let user;

const createUser = (user) => {
    const li = document.createElement('li')
    li.setAttribute('data-user', `${user.id}`)
    li.innerHTML = `<h2>${user.name}</h2><p>${user.username}</p><h3>${user.email}</h3>`
    li.onclick = (event) => renderTodoList(event, user.name)
    return li
}

const renderUsers = (array) => {
    const ul = document.createElement('ul')
    for (let item of array) ul.appendChild(createUser(item))
    return ul
}

async function getUsers() {
    return await (await fetch(`${BASE_URL}/users`)).json()
}

getUsers().then(users => app.appendChild(renderUsers(users)));


const renderTodoList = (event, userName) => {
    if (event.target.tagName === 'H2' || event.target.tagName === 'P' || event.target.tagName === 'H3') {
        const id = +event.target.parentNode.dataset.user;
        getTodoList(id).then(todos => {
            const todoBox = app.querySelector('.todo-box')
            if (todoBox !== null) {
                todoBox.innerHTML = ''
                todoBox.appendChild(renderTodo(userName, todos))
            } else {
                app.appendChild(renderTodo(userName, todos))
            }
        })
    }
}

async function getTodoList(id) {
    return await (await fetch(`${BASE_URL}/todos?userId=${id}`)).json()
}

async function getUser(id) {
    return await (await fetch(`${BASE_URL}/users?id=${id}`)).json()
}


const createTodo = (todo) => {
    const li = document.createElement('li')
    li.setAttribute('data-todo', `${todo.id}`)
    li.innerHTML = `<input type="checkbox"><h4>${todo.title}</h4>`
    li.onclick = checkTodo
    return li
}

const renderTodo = (userName, list) => {
    const ul = document.createElement('ul'),
        div = document.createElement('div'),
        h1 = document.createElement('h1')
    h1.innerHTML = `${userName}`
    div.classList.add('todo-box')
    for (let item of list) ul.appendChild(createTodo(item))
    div.append(h1, ul)
    return div
}

const checkTodo = (event) => {
    if (event.target.tagName === 'INPUT') {
        // const id = +event.target.parentNode.dataset.todo;
        (event.target.checked) ?
            event.target.nextElementSibling.style.textDecoration = 'line-through' :
            event.target.nextElementSibling.style.textDecoration = 'none'
    }
}

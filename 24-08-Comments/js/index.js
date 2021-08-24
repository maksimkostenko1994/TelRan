// # проект messanger
// объект User : {id: 3, name: 'Vasya', city: 'Berlin'}
// массив из трех users :[user1, user2, user3]
//
// массив сообщений: [{
//     id:0,
//     userId:3,
//     title:'Some title',
//     text: 'Some text',
//     data: '01.10.2021'
//     comments:[{}, {}, {}]
// },{},{}]
//
// comment: {
//     id:0,
//         userId:3,
//         postId:0,
//         text: 'some text',
//         data:'05.10.2021
// }

class User {
    constructor(name, city) {
        this.name = name
        this.city = city
        this.id = User.id++
    }

    static id = 0

    renderUser() {
        return `<h3 data-id="${this.id}">${this.name}, ${this.city}</h3>`
    }
}

const users = [
    new User('Vasya Pupkin', 'Berlin'),
    new User('Maksym Kostenko', 'Mainz'),
    new User('Ivan Ivanov', 'Kiev')
]

const usersList = document.querySelector('.users-list')

const renderUsersList = (array) => {
    array.forEach(item => {
        usersList.innerHTML += item.renderUser()
    })
}

renderUsersList(users)

class Message {
    constructor(userId, title, text, data) {
        this.userId = userId
        this.title = title
        this.text = text
        this.data = data
        this.comments = []
        this.id = Message.id++
    }

    static id = 0

    renderMessage() {
        return `
            <div class="message" data-message="${this.id}">
                <h4>${this.title}</h4>
                <p>Published: ${this.data}</p>
            </div>
        `
    }

    renderFullInfo() {
        return `
            <div data-message="${this.id}">
               <h3>${this.title}</h3>
               <p>${this.text}</p>
               <h4>Published: ${this.data}</h4>
               <hr>
               ${(this.comments.length === 0) ? "<p>No comment</p>" : this.comments.map(item => item.renderComment(users.find(el => el.id === item.userId).name)).join('')}
               <hr>
               <div class="comment">
                <input type="text" placeholder="Enter your name" id="user-name"><button id="btn-push-comment">Comment</button><br>
                <textarea id="user-comment" placeholder="Enter comment..."></textarea>
               </div>
            </div>
        `
    }

}

class Comment {
    constructor(userId, messageId, text, data) {
        this.id = Comment.id++
        this.userId = userId
        this.messageId = messageId
        this.text = text
        this.data = data
    }

    static id = 0

    renderComment(userName) {
        return `
            <div>
                <h5>${this.text}</h5>
                <p>${this.data}, comment by ${userName}</p>
            </div>
        `
    }
}

const messages = [
    new Message(0, 'Hello', 'World', new Date().getFullYear()),
    new Message(0, 'About', 'Meeting', new Date().getFullYear()),
    new Message(1, 'Text', 'Info', new Date().getFullYear())
]

const leftBox = document.querySelector('.left'),
    rightBox = document.querySelector('.right')

if (leftBox.innerHTML === '') {
    leftBox.innerHTML = 'No selected messages'
}
if (rightBox.innerHTML === '') {
    rightBox.innerHTML = 'No selected message'
}


usersList.onclick = (event) => {
    if (event.target.tagName === 'H3') {
        const user = users.find(item => +event.target.dataset.id === item.id)
        const userMessages = messages.filter(message => message.userId === user.id)
        leftBox.innerHTML = userMessages.map(item => item.renderMessage()).join('')
    }
}

leftBox.onclick = (event) => {
    if (event.target.classList.contains('message')) {
        const message = messages.find(item => +event.target.dataset.message === item.id)
        const user = users.find(item => message.userId === item.id)
        rightBox.innerHTML = message.renderFullInfo(user.name)
    } else if (event.target.tagName === 'H4' || event.target.tagName === 'P') {
        const message = messages.find(item => +event.target.parentNode.dataset.message === item.id)
        const user = users.find(item => message.userId === item.id)
        rightBox.innerHTML = message.renderFullInfo(user.name)
    }
}

rightBox.onclick = (event) => {
    if (event.target.tagName === 'BUTTON') {
        const commentInput = document.querySelector('#user-comment')
        const userName = document.querySelector('#user-name')
        if (commentInput.value !== '' && userName.value !== '') {
            const messageId = +event.target.parentNode.parentNode.dataset.message;
            const message = messages.find(item => item.id === messageId)
            const user = users.find(item => item.name === userName.value)
            if (user !== undefined) {
                const date = `${new Date().getFullYear()}/${new Date().getDate()}/${new Date().getMonth() + 1}`
                message.comments.push(new Comment(user.id, message.id, commentInput.value, date))
                console.log(message.comments)
                rightBox.innerHTML = message.renderFullInfo()
            }
        }
    }

}

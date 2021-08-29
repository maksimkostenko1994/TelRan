import Store from "../../db/store.js";
import {loadLoginPage} from "../routing.js";
import Message from "../../db/message.js";
import Post from "../../db/post.js"
import Comment from "../../db/comment.js"

export const renderUserPage = (user) => {
    const btnSignup = document.querySelector('#signup'),
        btnLogin = document.querySelector('#login')
    btnLogin.style.display = 'none'
    btnSignup.innerHTML = `<i class="fas fa-sign-out-alt"></i><span>logout</span>`
    btnSignup.addEventListener('click', logout);

    function logout(event) {
        event.preventDefault()
        localStorage.removeItem('auth')
        btnLogin.style.display = ''
        btnSignup.innerHTML = `<i class="fas fa-sign-in-alt"></i><span>start here</span>`
        btnSignup.removeEventListener('click', logout)
        loadLoginPage()
    }

    const messages = Store.getAllMessages().filter(item => item.userToId === user.id),
        posts = Store.getAllPosts();

    const div = document.createElement('div')
    div.classList.add('user-page')
    div.innerHTML = `
            <ul class="user-menu">
                <li>Fullname: <h2> ${user.firstName} ${user.lastName}</h2></li>
                <li>Nickname: <h2>${user.nickName}</h2></li>
                <li>Email: <h2>${user.email}</h2></li>
            </ul>
            <div class="user-info">
                <div class="message-box">
                    <div class="message-navigation">
                        <ul class="user-info-menu">
                            <li>Inbox</li>
                        </ul>
                    </div>
                    <form action="#" name="sendMessage">
                        <input type="text" name="nickname" placeholder="Enter nickname..."><br>
                        <textarea name="message"></textarea><br>
                        <button>Send message</button>
                    </form>
                </div>
                <div class="post-box">
                    <form action="#" name="createPost">
                        <input type="text" name="title" placeholder="Enter title...">
                        <textarea name="post"></textarea><br>
                        <button>Post</button>
                    </form>
                </div>
                <div class="section-info"></div>
            </div>
    `
    const box = div.querySelector('.message-navigation'),
        postBox = div.querySelector('.post-box')
    box.appendChild(renderMessages())
    postBox.prepend(renderPosts())

    function renderMessages() {
        const ul = document.createElement('ul')
        ul.classList.add('messages')

        const users = Store.getAllUsers()
        users.splice(users.findIndex((el => el.id === user.id)), 1)

        for (let item of users) {
            const messageArray = messages.filter(el => el.userFromId === item.id)
            if (messageArray.length > 0) {
                const li = document.createElement('li')
                li.setAttribute('data-message', item.id)
                li.classList.add('message-item')
                li.innerHTML = `<h2>${item.firstName} ${item.lastName} aka <span>${item.nickName}</span></h2><p>${messageArray[messageArray.length - 1].text}</p><h4>Date of message: <span>${messageArray[messageArray.length - 1].dateText}</span></h4>`
                li.onclick = (event) => renderConversation(event, item)
                ul.appendChild(li)
            }

        }
        return ul
    }

    function renderPosts() {
        const ul = document.createElement('ul'),
            h2 = document.createElement('h2')
        h2.innerHTML = `Posts`
        ul.appendChild(h2)
        if (posts.length > 0)
            for (let post of posts) {
                const userObj = Store.getAllUsers().find(item => item.id === post.userId)
                const li = document.createElement('li')
                li.setAttribute('data-post', `${post.id}`)
                li.innerHTML = `<h1>Author: <span>${userObj.firstName} ${userObj.lastName}</span></h1><h3>Title: <span>${post.title}</span></h3><p>${post.text}</p><h4>Date: <span>${post.date}</span></h4>`
                li.onclick = (event) => renderPostInfo(event, userObj, post)
                ul.appendChild(li)
            }
        return ul
    }

    function renderPostInfo(event, userObj, post) {
        if (event.target.tagName === 'LI' || event.target.tagName === 'H1' || event.target.tagName === 'H3' || event.target.tagName === 'SPAN' || event.target.tagName === 'H4' || event.target.tagName === 'P') {
            const sectionInfo = div.querySelector('.section-info')
            sectionInfo.innerHTML = `<div class="post-info"><h1>Author: <span>${userObj.firstName} ${userObj.lastName}</span></h1><h2>Title: <span>${post.title}</span></h2><p>${post.text}</p><h4>Date: <span>${post.date}</span></h4></div>`
            const ul = document.createElement('ul'),
                h2 = document.createElement('h2')
            h2.innerHTML = `Comments`
            ul.classList.add('comments')
            ul.appendChild(h2)
            const comments = Store.getAllComments().filter(item => item.postId === post.id);
            if (comments.length === 0) ul.innerHTML = `No comments`
            else
                for (let comment of comments) {
                    const userComment = Store.getAllUsers().find(item => item.id === comment.userId)
                    const li = document.createElement('li')
                    li.setAttribute('data-comment', `${comment.id}`)
                    li.innerHTML = `<h3>Author: <span>${userComment.nickName}</span></h3><p>${comment.text}</p><h5>Date: <span>${comment.date}</span></h5><span class="remove"><i class="fas fa-trash"></i></span>`
                    li.onclick = (event) => {
                        if (event.target.classList.contains('remove')) {
                            const id = +event.target.parentNode.dataset.comment
                            Store.removeComment(comments.findIndex(item => item.id === id))
                        }
                        if (event.target.tagName === 'svg') {
                            const id = +event.target.parentNode.parentNode.dataset.comment
                            Store.removeComment(comments.findIndex(item => item.id === id))
                        }
                        if (event.target.tagName === 'path') {
                            const id = +event.target.parentNode.parentNode.parentNode.dataset.comment
                            Store.removeComment(comments.findIndex(item => item.id === id))
                        }
                    }
                    ul.appendChild(li)
                }

            sectionInfo.appendChild(ul)
            sectionInfo.appendChild(renderFormComment(user, post))
        }
    }

    function renderFormComment(userObj, post) {
        const formComment = document.createElement('form')
        formComment.setAttribute('name', 'formComment')
        formComment.setAttribute('action', '#')
        formComment.innerHTML = `
            <textarea name="comment"></textarea>
            <button>Send comment</button>
        `
        formComment.onclick = (event) => {
            event.preventDefault()
            if (event.target.tagName === 'BUTTON')
                Store.setComment(new Comment(userObj.id, post.id, formComment.comment.value, new Date().toLocaleDateString()))

        }
        return formComment
    }

    const formPost = div.querySelector('form[name="createPost"]')
    formPost.onclick = (event) => {
        event.preventDefault()
        if (event.target.tagName === 'BUTTON')
            if (formPost.post.value !== '' || formPost.title.value !== '') {
                Store.setPost(new Post(user.id, formPost.title.value, formPost.post.value, new Date().toLocaleDateString()))
            }
        renderPosts()
    }

    const formMessage = div.querySelector('form[name="sendMessage"]')
    formMessage.onclick = (event) => {
        event.preventDefault()
        if (event.target.tagName === 'BUTTON')
            if (formMessage.nickname.value === '') formMessage.nickname.placeholder = 'Nickname cannot be empty'
            else {
                const userTo = Store.getAllUsers().find(item => item.nickName === formMessage.nickname.value)
                if (userTo !== undefined && formMessage.message.value !== '') {
                    Store.setMessage(new Message(userTo.id, user.id, formMessage.message.value, new Date(), new Date().toLocaleDateString()))
                }
            }
    }

    const renderConversation = (event, userName) => {
        const messagesFrom = Store.getAllMessages().filter(item => (item.userToId === user.id && item.userFromId === userName.id) || (item.userFromId === user.id && item.userToId === userName.id))

        const h2 = document.createElement('h2')
        h2.innerHTML = `${userName.firstName} ${userName.lastName}`

        if (event.target.tagName === 'LI' || event.target.tagName === 'H2' || event.target.tagName === 'P' || event.target.tagName === 'H4' || event.target.tagName === 'SPAN') {
            const sectionInfo = div.querySelector('.section-info')
            sectionInfo.innerHTML = ''

            const ul = document.createElement('ul')
            ul.appendChild(h2)
            for (let i of messagesFrom) {
                ul.innerHTML += (i.userFromId === user.id) ? `<li class="right" style="text-align: right"><span class="right-message"></span>${i.text}</li>` : `<li class="left"><span class="left-message"></span>${i.text}</li>`
            }
            sectionInfo.appendChild(ul)
        }
    }
    return div
}
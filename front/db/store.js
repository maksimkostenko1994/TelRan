const USERS_KEY = 'USERS',
    MESSAGES_KEY = 'MESSAGES',
    POSTS_KEY = 'POSTS',
    COMMENTS_KEY = 'COMMENTS'

class Store {
    static setUser(user) {
        const users = this.getAllUsers();
        users.push(user)
        localStorage.setItem(USERS_KEY, JSON.stringify(users))
    }

    static getAllUsers() {
        let res = JSON.parse(localStorage.getItem(USERS_KEY))
        return (res) ? res : []
    }

    static setMessage(message) {
        const messages = this.getAllMessages();
        messages.push(message)
        localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages))
    }

    static getAllMessages() {
        let res = JSON.parse(localStorage.getItem(MESSAGES_KEY))
        return (res) ? res : []
    }

    static setPost(post) {
        const posts = this.getAllPosts();
        posts.push(post)
        localStorage.setItem(POSTS_KEY, JSON.stringify(posts))
    }

    static getAllPosts() {
        let res = JSON.parse(localStorage.getItem(POSTS_KEY))
        return (res) ? res : []
    }

    static setComment(comment) {
        const comments = this.getAllComments();
        comments.push(comment)
        localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments))
    }

    static removeComment(index) {
        const comments = this.getAllComments()
        comments.splice(index, 1)
        localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments))
    }

    static getAllComments() {
        let res = JSON.parse(localStorage.getItem(COMMENTS_KEY))
        return (res) ? res : []
    }
}

export default Store
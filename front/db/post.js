import Store from "./store.js";

class Post {
    constructor(userId, title, text, date) {
        this.userId = userId
        this.title = title
        this.text = text
        this.date = date
        this.id = Post.id++
    }

    static id = (Store.getAllPosts().length > 0) ? ++Store.getAllPosts()[Store.getAllPosts().length - 1].id : 0
}

export default Post
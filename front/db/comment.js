import Store from "./store.js";

class Comment {
    constructor(userId, postId, text, date) {
        this.userId = userId
        this.postId = postId
        this.text = text
        this.date = date
        this.id = Comment.id++
    }

    static id = (Store.getAllComments().length > 0) ? ++Store.getAllComments()[Store.getAllComments().length - 1].id : 0
}

export default Comment
import Store from "./store.js";

class Message {
    constructor(userToId, userFromId, text, dateTime, dateText) {
        this.userToId = userToId
        this.userFromId = userFromId
        this.text = text
        this.dateTime = dateTime
        this.dateText = dateText
        this.id = Message.id++
    }

    static id = (Store.getAllMessages().length > 0) ? ++Store.getAllMessages()[Store.getAllMessages().length - 1].id : 0
}

export default Message
import Store from "./store.js";

class User {
    constructor(firstName, lastName, email, nickName, password) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.nickName = nickName
        this.password = password
        this.id = User.id++
    }

    static id = (Store.getAllUsers().length > 0) ? ++Store.getAllUsers()[Store.getAllUsers().length - 1].id : 0
}

export default User
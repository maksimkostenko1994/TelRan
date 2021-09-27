import * as Action from "./actionTypes"

const initState = {
    posts: []
}

export default function postReducer(state = initState, {type, payload}) {
    switch (type) {
        case Action.ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {title: payload.title, author: payload.author, text: payload.text}]
            }

        case Action.REMOVE_POST:
            const postArr = [...state.posts]
            postArr.splice(payload.index, 1)
            return {
                ...state,
                posts: [...postArr]
            }

        default:
            return state || []
    }
}
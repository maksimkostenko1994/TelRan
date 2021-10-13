import {createSlice} from "@reduxjs/toolkit"

import {startLoading, stopLoading} from '../appReducer/AppReducer'

const initialState = {
    todos: []
}

const todoReducer = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, {payload}) => {
            state.todos.push(
                {
                    title: payload.title,
                    status: false
                }
            )
        },
        changeStatus: (state, {payload}) => {
            state.todos[payload.index].status = payload.status
        },
        removeTodo: (state, {payload}) => {
            state.todos.splice(payload.index, 1)
        }
    }
})

export default todoReducer.reducer

export const {addTodo, changeStatus, removeTodo} = todoReducer.actions
export const todoSelector = state => state.todo.todos

export const addTodoAction = text => dispatch => {
    dispatch(startLoading())
    setTimeout(() => {
        dispatch(addTodo({title: text}))
        dispatch(stopLoading())
    }, 2000)
}